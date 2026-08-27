/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const teachingSeoTitles: Record<string, string> = {
  "/teaching/adventures-french-structuralism-course-notes":
    "French Structuralism Course Notes · Mohammad Reza Naderi",
  "/teaching/dark-enlightenment-collapse-of-transition":
    "Dark Enlightenment: Transition · Mohammad Reza Naderi",
  "/teaching/dark-enlightenment-from-acceleration-to-control":
    "Dark Enlightenment: Control · Mohammad Reza Naderi",
  "/teaching/meaning-structure-determination":
    "Structuralism to Deleuze · Mohammad Reza Naderi",
  "/teaching/reading-deleuze-structuralism":
    "Deleuze on Structuralism · Mohammad Reza Naderi",
  "/teaching/unconscious-materialism-hegel":
    "Hegel’s Unconscious Materialism · Mohammad Reza Naderi",
};

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.mrnaderi.org") {
      url.hostname = "mrnaderi.org";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const response = await handler.fetch(request, env, ctx);
    const seoTitle = teachingSeoTitles[url.pathname];

    // Keep the full scholarly headings on the pages themselves, while serving
    // concise search titles for every teaching subpage.
    if (seoTitle) {
      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("text/html")) {
        const html = await response.text();
        const rewritten = html.replace(
          /<title>[\s\S]*?<\/title>/,
          `<title>${seoTitle}</title>`,
        );
        const headers = new Headers(response.headers);
        headers.delete("content-length");
        headers.delete("etag");
        return new Response(rewritten, {
          status: response.status,
          statusText: response.statusText,
          headers,
        });
      }
    }

    return response;
  },
};

export default worker;
