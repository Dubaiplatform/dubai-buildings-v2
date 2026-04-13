import type { Metadata } from "next";
import HospitalityDevelopmentClient from "./hospitality-development-consultancy-client";

export const metadata: Metadata = {
  title: "Hospitality Development & Consultancy in Dubai",
  description:
    "Dubai Buildings offers specialized hospitality development consultancy in Dubai. We provide feasibility studies, market research, operator sourcing, and strategic advisory to maximize returns on hotel, resort, and mixed-use projects.",

  keywords: [
    "hospitality consultancy Dubai",
    "hotel development Dubai",
    "resort consultancy UAE",
    "hospitality real estate Dubai",
    "hotel project feasibility Dubai",
    "hotel operator sourcing Dubai",
    "resort investment Dubai",
    "Dubai hospitality development services",
    "feasibility study hotels UAE",
    "mixed-use hospitality Dubai",
  ],

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
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
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
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function LandDevelopments() {
  return <HospitalityDevelopmentClient />;
}
