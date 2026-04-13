import type { Metadata } from "next";
import HealthcareDevelopmentClient from "./healthcare-development-client";

export const metadata: Metadata = {
  title: "Healthcare Development Consultancy in Dubai",
  description:
    "Specialized healthcare development consultancy in Dubai. Dubai Buildings provides feasibility studies, operator sourcing, and strategic advisory to help investors and developers maximize value in medical real estate.",

  keywords: [
    "healthcare real estate Dubai",
    "medical property consultancy Dubai",
    "hospital development Dubai",
    "healthcare consultancy UAE",
    "clinic investment Dubai",
    "medical real estate advisory",
    "healthcare feasibility study Dubai",
    "hospital project consultancy UAE",
    "healthcare property investment Dubai",
    "Dubai healthcare development consultants",
  ],

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
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
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
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function LandDevelopments() {
  return <HealthcareDevelopmentClient />;
}
