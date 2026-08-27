import type { MetadataRoute } from "next";

const baseUrl = "https://mrnaderi.org";

const routes = [
  "",
  "/philosophy",
  "/philosophy/persian",
  "/philosophy/persian/terms",
  "/writing",
  "/publications",
  "/teaching",
  "/about",
  "/about/persian",
  "/teaching/meaning-structure-determination",
  "/teaching/adventures-french-structuralism-course-notes",
  "/teaching/reading-deleuze-structuralism",
  "/teaching/unconscious-materialism-hegel",
  "/teaching/dark-enlightenment-from-acceleration-to-control",
  "/teaching/dark-enlightenment-collapse-of-transition",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-08-26"),
    changeFrequency: route.startsWith("/teaching/") ? "monthly" : "weekly",
  }));
}
