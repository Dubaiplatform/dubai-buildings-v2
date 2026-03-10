import type { Metadata } from "next";
import SellClient from "./sell-client";

export const metadata: Metadata = {
  title: "Sell Your Building in Dubai",
  description:
    "Sell your building in Dubai with Dubai Buildings. We connect landlords and investors with qualified buyers and provide professional guidance for a smooth and secure property sale.",

  keywords: [
    "sell building Dubai",
    "sell commercial building Dubai",
    "Dubai building sale",
    "sell property Dubai",
    "Dubai real estate building sale",
    "sell investment building Dubai",
  ],

  alternates: {
    canonical: "https://www.dubai-buildings.com/sell-building-dubai",
  },

  openGraph: {
    title: "Sell Your Building in Dubai | Dubai Buildings",
    description:
      "Looking to sell a building in Dubai? Dubai Buildings connects landlords with qualified investors and buyers for secure and professional property transactions.",
    url: "https://www.dubai-buildings.com/sell-building-dubai",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Sell Buildings in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sell Your Building in Dubai",
    description:
      "Connect with qualified buyers and investors to sell your building in Dubai with expert real estate guidance.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Sell() {
  return <SellClient />;
}
