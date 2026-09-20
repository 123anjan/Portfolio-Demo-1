import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.stackmorphic.com";

  return [
    "",
    "/services",
    "/projects",
    "/process",
    "/tech-stack",
    "/about",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
