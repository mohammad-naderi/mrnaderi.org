import type { MetadataRoute } from "next";

const baseUrl = "https://mrnaderi.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/philosophy",
    "/writing",
    "/publications",
    "/teaching",
    "/about",
    "/teaching/meaning-structure-determination",
    "/teaching/adventures-french-structuralism-course-notes",
    "/teaching/reading-deleuze-structuralism",
    "/teaching/unconscious-materialism-hegel",
    "/teaching/dark-enlightenment-from-acceleration-to-control",
    "/teaching/dark-enlightenment-collapse-of-transition",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route.startsWith("/teaching/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/teaching/") ? 0.7 : 0.8,
  }));
}
