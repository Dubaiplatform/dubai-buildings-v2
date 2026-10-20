import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { SERVICE_PAGES, serviceBreadcrumbs, servicePath } from "@/lib/service-pages";
import HospitalityDevelopmentClient from "./hospitality-development-consultancy-client";

const description =
  "Hospitality development consultancy in Dubai from Dubai Buildings: location analysis, market positioning and advisory for hotel developers and operators.";

export const metadata: Metadata = {
  title: "Hospitality Development & Consultancy in Dubai",
  description,

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/hospitality-development-consultancy/",
  },

  openGraph: {
    title: "Hospitality Development & Consultancy in Dubai",
    description:
      "Expert hospitality consultancy in Dubai. From feasibility studies to operator selection, we help deliver successful hotel and resort projects.",
    url: "https://www.dubai-buildings.com/services/hospitality-development-consultancy/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Hospitality Development & Consultancy in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hospitality Development & Consultancy in Dubai",
    description:
      "Develop hotels and resorts in Dubai with expert consultancy, feasibility studies, and operator sourcing services.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const slug = "hospitality-development-consultancy";
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
      <HospitalityDevelopmentClient />
    </>
  );
}
