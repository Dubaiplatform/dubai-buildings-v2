import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { SERVICE_PAGES, serviceBreadcrumbs, servicePath } from "@/lib/service-pages";
import CommercialAgencyClient from "./asset-management-client";

const description =
  "Professional asset management in Dubai from Dubai Buildings: lease management, rent collection, financial reporting and strategic advisory for whole buildings.";

export const metadata: Metadata = {
  title: "Asset Management Services in Dubai",
  description,

  alternates: {
    canonical: "https://www.dubai-buildings.com/services/asset-management/",
  },

  openGraph: {
    title: "Asset Management Services in Dubai",
    description:
      "Comprehensive asset management services in Dubai. Dubai Buildings manages residential, commercial, and mixed-use properties with strategic, financial, and operational expertise.",
    url: "https://www.dubai-buildings.com/services/asset-management/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Asset Management Services in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Asset Management Services in Dubai",
    description:
      "Maximize your property returns with Dubai Buildings’ asset management services, including lease management, financial reporting, and facilities oversight.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const slug = "asset-management";
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
