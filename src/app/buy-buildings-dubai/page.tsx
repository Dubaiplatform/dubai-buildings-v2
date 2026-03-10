import type { Metadata } from "next";
import BuyClient from "./buy-client";

export const metadata: Metadata = {
  title: "Buy Buildings In Dubai",
  description:
    "Find investment buildings for sale in Dubai with Dubai Buildings. Access exclusive building acquisition opportunities for investors across multiple communities and budgets.",

  keywords: [
    "buy building Dubai",
    "investment buildings Dubai",
    "commercial buildings for sale Dubai",
    "Dubai building investment",
    "buy commercial building Dubai",
    "Dubai real estate investment buildings",
  ],

  alternates: {
    canonical: "https://www.dubai-buildings.com/buy-buildings-dubai",
  },

  openGraph: {
    title: "Buy Buildings In Dubai",
    description:
      "Discover investment buildings for sale in Dubai. Dubai Buildings connects investors with exclusive commercial and residential building opportunities.",
    url: "https://www.dubai-buildings.com/buy-buildings-dubai",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Buy Buildings In Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Buy Buildings In Dubai",
    description:
      "Explore commercial and residential building investment opportunities across Dubai.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Buy() {
  return <BuyClient />;
}
