import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { SERVICE_PAGES, serviceBreadcrumbs, servicePath } from "@/lib/service-pages";
import CommercialAgencyClient from "./commercial-agency-client";

const description =
  "Commercial agency services in Dubai from Dubai Buildings: landlord and tenant advisory, lease negotiation and market research for offices and retail.";

export const metadata: Metadata = {
  title: "Commercial Agency Services in Dubai",
  description,

  alternates: {
    canonical: "https://www.dubai-buildings.com/services/commercial-agency/",
  },

  openGraph: {
    title: "Commercial Agency Services in Dubai",
    description:
      "Expert commercial agency services in Dubai. We help landlords and tenants with leasing, rent negotiations, property management, and market analysis.",
    url: "https://www.dubai-buildings.com/services/commercial-agency/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Commercial Agency Services in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Agency Services in Dubai",
    description:
      "Lease and manage commercial properties in Dubai with expert landlord and tenant services, market research, and advisory solutions.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const slug = "commercial-agency";
const path = servicePath(slug);

export default function CommercialAgency() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: SERVICE_PAGES[slug],
            description,
            path,
          }),
          breadcrumbSchema(serviceBreadcrumbs(slug)),
        ]}
      />
      <CommercialAgencyClient />
    </>
  );
}
