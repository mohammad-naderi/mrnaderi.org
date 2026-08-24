import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://mrnaderi.org/sitemap.xml",
    host: "https://mrnaderi.org",
  };
}
