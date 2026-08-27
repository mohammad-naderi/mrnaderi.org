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

type TeachingSeo = {
  title: string;
  description: string;
};

const teachingSeo: Record<string, TeachingSeo> = {
  "/teaching/adventures-french-structuralism-course-notes": {
    title: "French Structuralism Notes · Mohammad Reza Naderi",
    description:
      "Course notes for Adventures of French Structuralism, covering structure, determination, Deleuze, Lacan, novelty, and contemporary French philosophy.",
  },
  "/teaching/dark-enlightenment-collapse-of-transition": {
    title: "Dark Enlightenment: Transition · Mohammad Reza Naderi",
    description:
      "A seminar on accelerationism, political transition, and the collapse of transition in the emergence of Dark Enlightenment.",
  },
  "/teaching/dark-enlightenment-from-acceleration-to-control": {
    title: "Dark Enlightenment: Control · Mohammad Reza Naderi",
    description:
      "A seminar on Dark Enlightenment, acceleration, control, and the intellectual routes linking it to currents associated with the left.",
  },
  "/teaching/meaning-structure-determination": {
    title: "Structuralism to Deleuze · Mohammad Reza Naderi",
    description:
      "A seminar on structuralism, Deleuze, determination, the Idea, and the philosophical problem of novelty.",
  },
  "/teaching/reading-deleuze-structuralism": {
    title: "Deleuze on Structuralism · Mohammad Reza Naderi",
    description:
      "A course companion to Gilles Deleuze’s “How Do We Recognize Structuralism?” for Adventures of French Structuralism.",
  },
  "/teaching/unconscious-materialism-hegel": {
    title: "Hegel’s Unconscious Materialism · Mohammad Reza Naderi",
    description:
      "A seminar on Badiou’s reading of Hegel’s Science of Logic, dialectic, multiplicity, and the problem of philosophical beginning.",
  },
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
    const seo = teachingSeo[url.pathname];

    if (seo) {
      const contentType = response.headers.get("content-type") ?? "";
      if (contentType.includes("text/html")) {
        let html = await response.text();

        // Normalize the initial HTML metadata.
        html = html.replace(
          /<title>[\s\S]*?<\/title>/,
          `<title>${seo.title}</title>`,
        );
        html = html.replace(
          /<meta(?=[^>]*\bname=["']description["'])[^>]*>/i,
          `<meta name="description" content="${seo.description}">`,
        );

        // vinext/Next metadata hydration can restore route-level metadata after the
        // initial HTML is parsed. Re-apply the concise search metadata after hydration
        // so crawlers that render JavaScript see the same final values.
        const seoScript = `<script>(()=>{const t=${JSON.stringify(seo.title)},d=${JSON.stringify(seo.description)};const a=()=>{if(document.title!==t)document.title=t;let m=document.querySelector('meta[name="description"]');if(!m){m=document.createElement('meta');m.setAttribute('name','description');document.head.appendChild(m)}if(m.getAttribute('content')!==d)m.setAttribute('content',d)};a();document.addEventListener('DOMContentLoaded',a,{once:true});setTimeout(a,0);setTimeout(a,500);setTimeout(a,1500)})();</script>`;
        html = html.replace("</body>", `${seoScript}</body>`);

        const headers = new Headers(response.headers);
        headers.delete("content-length");
        headers.delete("etag");
        return new Response(html, {
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
