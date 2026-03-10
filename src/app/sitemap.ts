import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.dubai-buildings.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/buy-buildings-dubai`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sell-building-dubai`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lease-buildings-dubai`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/build`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
