import type { Metadata } from "next";
import ServicesClient from "./services-client";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo";
import { serviceBreadcrumbs } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Real Estate Services in Dubai",
  description:
    "Explore Dubai Buildings' real estate services in Dubai: investment sales, commercial agency, asset management and development consultancy for whole buildings.",

  alternates: {
    canonical: "https://www.dubai-buildings.com/services/",
  },

  openGraph: {
    title: "Real Estate Services in Dubai",
    description:
      "Professional real estate services helping investors, landlords, and businesses buy, sell, lease, and develop buildings across Dubai.",
    url: "https://www.dubai-buildings.com/services",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Dubai Buildings Real Estate Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Real Estate Services in Dubai",
    description:
      "Discover professional real estate services for buying, selling, leasing, and developing buildings in Dubai.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Services() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(serviceBreadcrumbs())} />
      <ServicesClient />
    </>
  );
}
