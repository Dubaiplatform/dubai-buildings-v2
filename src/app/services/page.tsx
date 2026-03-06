import type { Metadata } from "next";
import ServicesClient from "./services-client";

export const metadata: Metadata = {
  title: "Real Estate Services in Dubai",
  description:
    "Explore professional real estate services in Dubai with Dubai Buildings. We help investors, landlords, and businesses buy, sell, lease, and develop buildings with expert guidance.",

  keywords: [
    "Dubai real estate services",
    "commercial real estate Dubai",
    "Dubai building investment services",
    "buy sell lease buildings Dubai",
    "Dubai property consultancy",
    "Dubai building investment opportunities",
  ],

  alternates: {
    canonical: "https://www.dubai-buildings.com/services",
  },

  openGraph: {
    title: "Real Estate Services in Dubai | Dubai Buildings",
    description:
      "Professional real estate services helping investors, landlords, and businesses buy, sell, lease, and develop buildings across Dubai.",
    url: "https://www.dubai-buildings.com/services",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
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
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Services() {
  return <ServicesClient />;
}
