import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

import Layout from "@/components/layout";
import JsonLd from "@/components/seo/json-ld";
import { NAP, realEstateAgentSchema, webSiteSchema } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultTitle =
  "Buy, Sell, Lease & Develop Buildings in Dubai | Dubai Buildings";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dubai-buildings.com"),

  title: {
    default: defaultTitle,
    template: "%s | Dubai Buildings",
  },

  description:
    "Dubai Buildings is a leading B2B real estate service provider in Dubai helping investors, developers, and occupiers buy, sell, lease, and develop commercial and residential buildings with professional guidance.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: defaultTitle,
    description:
      "Discover commercial and residential building opportunities in Dubai. Dubai Buildings helps investors, developers, and businesses buy, sell, lease, and develop properties.",
    url: "https://www.dubai-buildings.com",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Dubai Buildings Real Estate Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "Buy, sell, lease, and develop buildings in Dubai with trusted B2B real estate experts.",
    images: ["/home/og-home.webp"],
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

  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": `${NAP.geo.latitude};${NAP.geo.longitude}`,
    ICBM: `${NAP.geo.latitude}, ${NAP.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE">
      <GoogleTagManager gtmId="GTM-M9NGVC6L" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* GTM noscript fallback — not included by @next/third-parties */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M9NGVC6L"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <JsonLd data={[realEstateAgentSchema, webSiteSchema]} />
        <Layout>{children}</Layout>
      </body>
      <GoogleAnalytics gaId="G-MB41E12444" />
    </html>
  );
}
