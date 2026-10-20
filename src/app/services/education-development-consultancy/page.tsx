import type { Metadata } from "next";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";
import { SERVICE_PAGES, serviceBreadcrumbs, servicePath } from "@/lib/service-pages";
import HealthcareDevelopmentClient from "./education-development-consultancy-client";

const description =
  "Education development consultancy in Dubai from Dubai Buildings: site selection, feasibility and advisory for schools, campuses and education operators.";

export const metadata: Metadata = {
  title: "Education Development & Consultancy in Dubai",
  description,

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/education-development-consultancy/",
  },

  openGraph: {
    title: "Education Development & Consultancy in Dubai",
    description:
      "Expert education development consultancy in Dubai. We provide market research, feasibility studies, and operator sourcing for educational projects.",
    url: "https://www.dubai-buildings.com/services/education-development-consultancy/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Education Development & Consultancy in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Education Development & Consultancy in Dubai",
    description:
      "Plan and develop schools and educational institutions in Dubai with expert consultancy and data-driven insights.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const slug = "education-development-consultancy";
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
