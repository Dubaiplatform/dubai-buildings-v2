import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { SERVICE_PAGES, serviceBreadcrumbs, servicePath } from "@/lib/service-pages";
import HealthcareDevelopmentClient from "./healthcare-development-client";

const description =
  "Healthcare development consultancy in Dubai from Dubai Buildings: feasibility, site selection and advisory for hospitals, clinics and medical operators.";

export const metadata: Metadata = {
  title: "Healthcare Development Consultancy in Dubai",
  description,

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/healthcare-development/",
  },

  openGraph: {
    title: "Healthcare Development Consultancy in Dubai",
    description:
      "Expert healthcare real estate consultancy in Dubai. From feasibility studies to operator selection, we help deliver successful medical developments.",
    url: "https://www.dubai-buildings.com/services/healthcare-development/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Healthcare Development Consultancy in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Healthcare Development Consultancy in Dubai",
    description:
      "Develop healthcare projects in Dubai with expert consultancy, feasibility, and operator sourcing services.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const slug = "healthcare-development";
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
      <HealthcareDevelopmentClient />
    </>
  );
}
