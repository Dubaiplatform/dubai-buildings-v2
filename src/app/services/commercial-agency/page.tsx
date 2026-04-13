import type { Metadata } from "next";
import CommercialAgencyClient from "./commercial-agency-client";

export const metadata: Metadata = {
  title: "Commercial Agency Services in Dubai",
  description:
    "Dubai Buildings offers professional commercial agency services in Dubai. We provide landlord and tenant advisory, lease negotiations, market research, property valuation, and strategic solutions for offices, retail, and commercial spaces.",

  keywords: [
    "commercial agency Dubai",
    "office leasing Dubai",
    "retail property Dubai",
    "commercial property advisory UAE",
    "lease negotiation Dubai",
    "tenant services Dubai",
    "landlord services Dubai",
    "property valuation Dubai",
    "Dubai commercial real estate",
    "commercial property management UAE",
  ],

  alternates: {
    canonical: "https://www.dubai-buildings.com/services/commercial-agency/",
  },

  openGraph: {
    title: "Commercial Agency Services in Dubai",
    description:
      "Expert commercial agency services in Dubai. We help landlords and tenants with leasing, rent negotiations, property management, and market analysis.",
    url: "https://www.dubai-buildings.com/services/commercial-agency/",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Commercial Agency Services in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Commercial Agency Services in Dubai",
    description:
      "Lease and manage commercial properties in Dubai with expert landlord and tenant services, market research, and advisory solutions.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CommercialAgency() {
  return <CommercialAgencyClient />;
}
