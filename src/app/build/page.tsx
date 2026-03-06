import type { Metadata } from "next";
import BuildClient from "./build-client";

export const metadata: Metadata = {
  title: "Develop Buildings in Dubai",
  description:
    "Develop your building in Dubai with Dubai Buildings. Our experts guide investors and developers through planning, design, and construction with trusted industry professionals.",

  keywords: [
    "develop building Dubai",
    "Dubai building development",
    "real estate development Dubai",
    "build commercial building Dubai",
    "Dubai property development consultancy",
    "Dubai building development experts",
  ],

  alternates: {
    canonical: "https://www.dubai-buildings.com/build",
  },

  openGraph: {
    title: "Develop Buildings in Dubai | Dubai Buildings",
    description:
      "Work with experienced consultants to develop buildings in Dubai. From concept and planning to construction and delivery.",
    url: "https://www.dubai-buildings.com/build",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Develop Buildings in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Develop Buildings in Dubai",
    description:
      "Expert consultancy for building development projects in Dubai from concept to completion.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Build() {
  return <BuildClient />;
}
