/** Canonical names for the /services/* routes, shared by schema and breadcrumbs. */
export const SERVICE_PAGES = {
  "asset-management": "Asset Management",
  "commercial-agency": "Commercial Agency",
  "education-development-consultancy": "Education Development Consultancy",
  "healthcare-development": "Healthcare Development Consultancy",
  "hospitality-development-consultancy": "Hospitality Development Consultancy",
  "investment-sales-acquisition-services": "Investment Sales & Acquisitions",
  "investments-logistics-investments": "Industrial & Logistics Investments",
  "land-development-consultancy": "Land & Development Consultancy",
  "residential-investment": "Residential Investment",
} as const;

export type ServiceSlug = keyof typeof SERVICE_PAGES;

export function servicePath(slug: ServiceSlug) {
  return `/services/${slug}/`;
}

export function serviceBreadcrumbs(slug?: ServiceSlug) {
  const items = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services/" },
  ];
  if (slug) items.push({ name: SERVICE_PAGES[slug], path: servicePath(slug) });
  return items;
}
