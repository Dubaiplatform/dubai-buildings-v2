import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://www.dubai-buildings.com";

/**
 * Per-page last-modified dates. Update the date for a page whenever its
 * content changes; identical dates across every URL are ignored by Google.
 */
const pages: { path: string; lastModified: string; priority: number }[] = [
  { path: "/", lastModified: "2026-10-20", priority: 1 },
  { path: "/buy-buildings-dubai/", lastModified: "2026-10-20", priority: 0.9 },
  { path: "/sell-building-dubai/", lastModified: "2026-10-20", priority: 0.9 },
  { path: "/lease-buildings-dubai/", lastModified: "2026-10-20", priority: 0.9 },
  { path: "/build/", lastModified: "2026-10-20", priority: 0.9 },
  { path: "/about-us/", lastModified: "2026-10-20", priority: 0.9 },
  { path: "/contact-us/", lastModified: "2026-10-20", priority: 0.8 },
  { path: "/services/", lastModified: "2026-10-20", priority: 0.9 },
  {
    path: "/services/investment-sales-acquisition-services/",
    lastModified: "2026-10-20",
    priority: 0.9,
  },
  {
    path: "/services/land-development-consultancy/",
    lastModified: "2026-10-20",
    priority: 0.9,
  },
  {
    path: "/services/healthcare-development/",
    lastModified: "2026-10-20",
    priority: 0.9,
  },
  {
    path: "/services/education-development-consultancy/",
    lastModified: "2026-10-20",
    priority: 0.9,
  },
  {
    path: "/services/hospitality-development-consultancy/",
    lastModified: "2026-10-20",
    priority: 0.9,
  },
  {
    path: "/services/investments-logistics-investments/",
    lastModified: "2026-10-20",
    priority: 0.9,
  },
  {
    path: "/services/residential-investment/",
    lastModified: "2026-10-20",
    priority: 0.9,
  },
  {
    path: "/services/commercial-agency/",
    lastModified: "2026-10-20",
    priority: 0.9,
  },
  {
    path: "/services/asset-management/",
    lastModified: "2026-10-20",
    priority: 0.9,
  },
  { path: "/privacy-policy/", lastModified: "2026-03-04", priority: 0.3 },
  { path: "/terms-and-conditions/", lastModified: "2026-03-04", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(page.lastModified),
    priority: page.priority,
  }));
}
