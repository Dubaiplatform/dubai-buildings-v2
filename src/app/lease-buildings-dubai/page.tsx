import type { Metadata } from "next";
import LeaseClient from "./lease-client";

export const metadata: Metadata = {
  title: "Lease Buildings in Dubai",
  description:
    "Lease buildings in Dubai with Dubai Buildings. We help tenants find suitable properties and assist landlords in sourcing reliable tenants for commercial and residential buildings.",

  keywords: [
    "lease building Dubai",
    "commercial building for lease Dubai",
    "Dubai building leasing",
    "rent building Dubai",
    "office building lease Dubai",
    "Dubai commercial property lease",
  ],

  alternates: {
    canonical: "https://www.dubai-buildings.com/lease-buildings-dubai",
  },

  openGraph: {
    title: "Lease Buildings in Dubai | Dubai Buildings",
    description:
      "Find buildings for lease in Dubai or source the best tenants for your property with professional real estate guidance.",
    url: "https://www.dubai-buildings.com/lease-buildings-dubai",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Lease Buildings in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lease Buildings in Dubai",
    description:
      "Discover commercial and residential buildings available for lease across Dubai.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Lease() {
  return <LeaseClient />;
}
