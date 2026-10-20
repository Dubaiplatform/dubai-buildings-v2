import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { SERVICE_PAGES, serviceBreadcrumbs, servicePath } from "@/lib/service-pages";
import InvestmentsLogisticsInvestmentsClient from "./investments-logistics-investments-client";

const description =
  "Industrial and logistics investments in Dubai from Dubai Buildings: warehouses, logistics facilities and industrial assets for investors and occupiers.";

export const metadata: Metadata = {
  title: "Industrial & Logistics Investments in Dubai",
  description,

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/investments-logistics-investments/",
  },

  openGraph: {
    title: "Industrial & Logistics Investments in Dubai",
    description:
      "Expert consultancy for industrial and logistics investments in Dubai. From market research to leasing and acquisitions, we help investors make data-driven decisions.",
    url: "https://www.dubai-buildings.com/services/investments-logistics-investments/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Industrial & Logistics Investments in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Industrial & Logistics Investments in Dubai",
    description:
      "Invest in industrial and logistics properties in Dubai with expert market insights, leasing, and acquisition support.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const slug = "investments-logistics-investments";
const path = servicePath(slug);

export default function LandDevelopments() {
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
      <InvestmentsLogisticsInvestmentsClient />
    </>
  );
}
