import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { SERVICE_PAGES, serviceBreadcrumbs, servicePath } from "@/lib/service-pages";
import InvestSalesClient from "./invest-sales-client";

const description =
  "Investment sales and acquisition services in Dubai from Dubai Buildings: off-market building deals, market research and deal structuring for investors.";

export const metadata: Metadata = {
  title: "Investment Sales & Acquisitions in Dubai | Expert Property Advisors",
  description,

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/investment-sales-acquisition-services/",
  },

  openGraph: {
    title: "Investment Sales & Acquisitions in Dubai",
    description:
      "Access exclusive real estate investment opportunities in Dubai. Dubai Buildings provides expert advisory, market research, and deal execution for investors.",
    url: "https://www.dubai-buildings.com/services/investment-sales-acquisition-services/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Investment Sales & Acquisitions in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Investment Sales & Acquisitions in Dubai",
    description:
      "Discover profitable real estate investment opportunities with expert advisory services in Dubai.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const slug = "investment-sales-acquisition-services";
const path = servicePath(slug);

export default function InvestmentSales() {
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
      <InvestSalesClient />
    </>
  );
}
