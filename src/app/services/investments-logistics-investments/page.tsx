import type { Metadata } from "next";
import InvestmentsLogisticsInvestmentsClient from "./investments-logistics-investments-client";

export const metadata: Metadata = {
  title: "Industrial & Logistics Investments in Dubai",
  description:
    "Dubai Buildings provides expert industrial and logistics investment services in Dubai. We offer market research, property appraisals, leasing, acquisitions, and development consultancy to maximize returns for investors and occupiers.",

  keywords: [
    "industrial property Dubai",
    "logistics property Dubai",
    "industrial investments UAE",
    "logistics investments Dubai",
    "warehouse leasing Dubai",
    "industrial property consultancy Dubai",
    "logistics property advisory UAE",
    "Dubai industrial real estate",
    "Dubai warehouse investment",
    "industrial & logistics consultancy Dubai",
  ],

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/investments-logistics-investments/",
  },

  openGraph: {
    title: "Industrial & Logistics Investments in Dubai",
    description:
      "Expert consultancy for industrial and logistics investments in Dubai. From market research to leasing and acquisitions, we help investors make data-driven decisions.",
    url: "https://www.dubai-buildings.com/services/investments-logistics-investments/",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Industrial & Logistics Investments in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Industrial & Logistics Investments in Dubai",
    description:
      "Invest in industrial and logistics properties in Dubai with expert market insights, leasing, and acquisition support.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function LandDevelopments() {
  return <InvestmentsLogisticsInvestmentsClient />;
}
