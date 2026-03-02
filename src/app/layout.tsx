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
  metadataBase: new URL("https://distresseddealsdubai.com"),

  title: {
    default: "Dubai Buildings",
    template: "%s | Distressed Deals Dubai",
  },

  description:
    "Discover exclusive Distressed Deals in Dubai. Off-market, below-market value apartments, villas, and investor opportunities for serious cash buyers.",

  keywords: [
    "distressed property Dubai",
    "Dubai off market deals",
    "Dubai below market value property",
    "Dubai investor deals",
    "Dubai real estate opportunities",
    "cash buyer property Dubai",
    "Distressed Property Deals Dubai",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Dubai Buildings",
    description:
      "Access exclusive Distressed Deals in Dubai for serious investors and cash buyers.",
    url: "https://distresseddealsdubai.com",
    siteName: "Distressed Deals Dubai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Distressed Deals in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dubai Buildings",
    description:
      "Exclusive distressed and below-market value property deals in Dubai.",
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

  category: "real estate",
  verification: {
    // google: "bPTUu8_dHIXrPdqDdkwuxJu0VkJKvf_rJBaLKFSpG_g",
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
