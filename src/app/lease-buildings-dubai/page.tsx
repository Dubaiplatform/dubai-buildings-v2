import type { Metadata } from "next";
import LeaseClient from "./lease-client";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

const title = "Lease Buildings in Dubai";
const description =
  "Lease buildings in Dubai with Dubai Buildings. We help tenants find suitable properties and assist landlords in sourcing reliable tenants for commercial and residential buildings.";
const path = "/lease-buildings-dubai/";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `https://www.dubai-buildings.com${path}`,
  },
  openGraph: {
    title,
    description:
      "Find buildings for lease in Dubai or source the best tenants for your property with professional real estate guidance.",
    url: `https://www.dubai-buildings.com${path}`,
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Discover commercial and residential buildings available for lease across Dubai.",
    images: ["/home/og-home.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Lease() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: title,
            description,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: title, path },
          ]),
        ]}
      />
      <LeaseClient />
    </>
  );
}
