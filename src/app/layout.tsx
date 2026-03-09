import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Layout from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dubai-buildings.com"),

  title: {
    default: "Buy, Sell, Lease & Develop Buildings in Dubai | Dubai Buildings",
    template: "%s | Dubai Buildings",
  },

  description:
    "Dubai Buildings is a leading B2B real estate service provider in Dubai helping investors, developers, and occupiers buy, sell, lease, and develop commercial and residential buildings with professional guidance.",

  keywords: [
    "Dubai buildings for sale",
    "buildings for lease Dubai",
    "commercial buildings Dubai",
    "buy building Dubai",
    "sell building Dubai",
    "Dubai real estate investment",
    "commercial property Dubai",
    "Dubai building development",
    "Dubai real estate consultancy",
    "Dubai B2B real estate services",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dubai Buildings | Buy, Sell, Lease & Develop Buildings in Dubai",
    description:
      "Discover commercial and residential building opportunities in Dubai. Dubai Buildings helps investors, developers, and businesses buy, sell, lease, and develop properties.",
    url: "https://www.dubai-buildings.com",
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
    title: "Dubai Buildings | Real Estate Services in Dubai",
    description:
      "Buy, sell, lease, and develop buildings in Dubai with trusted B2B real estate experts.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Real Estate",
  verification: {
    google: "SIqihCka4TL-lGCSsHs3NGB6m4flay_ACVsPpPhDD4E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
