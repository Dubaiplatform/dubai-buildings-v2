import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { SERVICE_PAGES, serviceBreadcrumbs, servicePath } from "@/lib/service-pages";
import ResidentialInvestmentClient from "./residential-investment-client";

const description =
  "Residential investment services in Dubai from Dubai Buildings: income-generating apartment buildings and advisory for private investors, funds and developers.";

export const metadata: Metadata = {
  title: "Residential Investment Properties in Dubai",
  description,

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/residential-investment/",
  },

  openGraph: {
    title: "Residential Investment Properties in Dubai",
    description:
      "Discover high-return residential investment opportunities in Dubai. Dubai Buildings offers advisory services, market insights, and access to vetted properties.",
    url: "https://www.dubai-buildings.com/services/residential-investment/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Residential Investment Properties in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Residential Investment Properties in Dubai",
    description:
      "Invest in Dubai residential properties with expert advisory, market intelligence, and access to high-return opportunities.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const slug = "residential-investment";
const path = servicePath(slug);

export default function ResidentialInvestment() {
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
      <ResidentialInvestmentClient />
    </>
  );
}
