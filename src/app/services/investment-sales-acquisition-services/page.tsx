import type { Metadata } from "next";
import InvestSalesClient from "./invest-sales-client";

export const metadata: Metadata = {
  title: "Investment Sales & Acquisitions in Dubai | Expert Property Advisors",
  description:
    "Maximize your real estate returns with Dubai Buildings’ investment sales and acquisition services. We connect investors with high-value opportunities, offering market research, deal structuring, and data-driven insights across Dubai.",

  keywords: [
    "investment sales Dubai",
    "property acquisition Dubai",
    "real estate investment Dubai",
    "commercial property investment UAE",
    "Dubai real estate advisory",
    "investment opportunities Dubai",
    "buy commercial property Dubai",
    "property portfolio planning Dubai",
    "real estate deal structuring UAE",
    "Dubai property consultants",
  ],

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/servicesinvestment-sales-acquisition-services/",
  },

  openGraph: {
    title: "Investment Sales & Acquisitions in Dubai",
    description:
      "Access exclusive real estate investment opportunities in Dubai. Dubai Buildings provides expert advisory, market research, and deal execution for investors.",
    url: "https://www.dubai-buildings.com/servicesinvestment-sales-acquisition-services/",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Investment Sales & Acquisitions in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Investment Sales & Acquisitions in Dubai",
    description:
      "Discover profitable real estate investment opportunities with expert advisory services in Dubai.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function InvestmentSales() {
  return <InvestSalesClient />;
}
