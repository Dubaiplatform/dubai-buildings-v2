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
      url: `${baseUrl}/buy-buildings-dubai/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sell-building-dubai/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lease-buildings-dubai/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/build/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/investment-sales-acquisition-services/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/land-development-consultancy/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/healthcare-development/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/education-development-consultancy/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/hospitality-development-consultancy/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/investments-logistics-investments/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/residential-investment/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/commercial-agency/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/asset-management/`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}
