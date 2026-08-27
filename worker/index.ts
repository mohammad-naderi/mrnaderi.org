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

function escapeHtmlAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

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

        // Remove every server-rendered title and meta-description first, then add
        // exactly one canonical copy of each. This avoids route/layout duplication.
        html = html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "");
        html = html.replace(/<meta\b(?=[^>]*\bname\s*=\s*["']description["'])[^>]*>/gi, "");

        const canonicalHead =
          `<title>${seo.title}</title>` +
          `<meta name="description" content="${escapeHtmlAttribute(seo.description)}">`;
        html = html.replace(/<head([^>]*)>/i, `<head$1>${canonicalHead}`);

        // Next/vinext can mutate metadata during hydration. Keep the final DOM at
        // one title + one description, and restore their canonical values whenever
        // the framework touches the head.
        const seoScript = `<script>(()=>{const t=${JSON.stringify(seo.title)},d=${JSON.stringify(seo.description)};let busy=false;const fix=()=>{if(busy)return;busy=true;try{const h=document.head;const ts=Array.from(h.querySelectorAll('title'));let tt=ts.shift();if(!tt){tt=document.createElement('title');h.appendChild(tt)}if(tt.textContent!==t)tt.textContent=t;ts.forEach(n=>n.remove());const ms=Array.from(h.querySelectorAll('meta[name="description"]'));let m=ms.shift();if(!m){m=document.createElement('meta');m.setAttribute('name','description');h.appendChild(m)}if(m.getAttribute('content')!==d)m.setAttribute('content',d);ms.forEach(n=>n.remove())}finally{busy=false}};fix();const o=new MutationObserver(()=>queueMicrotask(fix));o.observe(document.head,{childList:true,subtree:true,attributes:true,characterData:true});window.addEventListener('load',fix)})();</script>`;
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
