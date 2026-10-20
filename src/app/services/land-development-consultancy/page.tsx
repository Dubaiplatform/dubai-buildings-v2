import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { SERVICE_PAGES, serviceBreadcrumbs, servicePath } from "@/lib/service-pages";
import LandDevelopmentsClient from "./land-development-consultancy-client";

const description =
  "Land and development consultancy in Dubai from Dubai Buildings: plot sourcing, feasibility studies and development advisory for investors and developers.";

export const metadata: Metadata = {
  title: "Land & Development Consultancy in Dubai",
  description,

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/land-development-consultancy/",
  },

  openGraph: {
    title: "Land & Development Consultancy in Dubai",
    description:
      "Expert land and development consultancy in Dubai. Get feasibility studies, market insights, and strategic advisory for successful real estate projects.",
    url: "https://www.dubai-buildings.com/services/land-development-consultancy/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Land & Development Consultancy in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Land & Development Consultancy in Dubai",
    description:
      "Plan and develop your real estate projects in Dubai with expert consultancy and data-driven insights.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const slug = "land-development-consultancy";
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
      <LandDevelopmentsClient />
    </>
  );
}
