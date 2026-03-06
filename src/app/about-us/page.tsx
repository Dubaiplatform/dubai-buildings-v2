import type { Metadata } from "next";
import AboutClient from "./about-client";

export const metadata: Metadata = {
  title: "About Dubai Buildings",
  description:
    "Dubai Buildings is a premier B2B real estate service provider in Dubai helping investors, developers, and corporate occupiers buy, sell, lease, and develop buildings with professional guidance.",

  keywords: [
    "Dubai Buildings company",
    "about Dubai Buildings",
    "Dubai real estate consultancy",
    "B2B real estate Dubai",
    "commercial real estate experts Dubai",
    "Dubai building investment consultancy",
  ],

  alternates: {
    canonical: "https://www.dubai-buildings.com/about-us",
  },

  openGraph: {
    title: "About Dubai Buildings | Real Estate Experts in Dubai",
    description:
      "Learn about Dubai Buildings, a trusted B2B real estate partner helping investors, developers, and businesses with building investments and opportunities in Dubai.",
    url: "https://www.dubai-buildings.com/about-us",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Dubai Buildings Real Estate Experts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Dubai Buildings",
    description:
      "Discover how Dubai Buildings helps investors, developers, and businesses with building investment and real estate opportunities in Dubai.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return <AboutClient />;
}
