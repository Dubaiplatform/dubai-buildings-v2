import type { Metadata } from "next";
import ResidentialInvestmentClient from "./residential-investment-client";

export const metadata: Metadata = {
  title: "Residential Investment Properties in Dubai",
  description:
    "Dubai Buildings provides expert residential investment services in Dubai. Access income-generating residential properties, market intelligence, and advisory services to maximize returns for private investors, funds, and developers.",

  keywords: [
    "residential investment Dubai",
    "investment properties Dubai",
    "Dubai apartments for investment",
    "villa investment Dubai",
    "residential real estate UAE",
    "income-generating properties Dubai",
    "high-return residential Dubai",
    "Dubai property investment",
    "residential investment advisory UAE",
    "Dubai investment-grade properties",
  ],

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/residential-investment/",
  },

  openGraph: {
    title: "Residential Investment Properties in Dubai",
    description:
      "Discover high-return residential investment opportunities in Dubai. Dubai Buildings offers advisory services, market insights, and access to vetted properties.",
    url: "https://www.dubai-buildings.com/services/residential-investment/",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Residential Investment Properties in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Residential Investment Properties in Dubai",
    description:
      "Invest in Dubai residential properties with expert advisory, market intelligence, and access to high-return opportunities.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ResidentialInvestment() {
  return <ResidentialInvestmentClient />;
}
