import type { Metadata } from "next";
import LandDevelopmentsClient from "./land-development-consultancy-client";

export const metadata: Metadata = {
  title: "Land & Development Consultancy in Dubai",
  description:
    "Unlock the full potential of your land with Dubai Buildings’ consultancy services. We provide feasibility studies, market analysis, and development strategies to help investors and developers make data-driven decisions in Dubai.",

  keywords: [
    "land consultancy Dubai",
    "development consultancy Dubai",
    "feasibility study Dubai real estate",
    "land acquisition Dubai",
    "property development strategy UAE",
    "real estate development consultancy Dubai",
    "market analysis Dubai property",
    "land investment Dubai",
    "development advisory UAE",
    "Dubai real estate consultants",
  ],

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/land-development-consultancy/",
  },

  openGraph: {
    title: "Land & Development Consultancy in Dubai",
    description:
      "Expert land and development consultancy in Dubai. Get feasibility studies, market insights, and strategic advisory for successful real estate projects.",
    url: "https://www.dubai-buildings.com/services/land-development-consultancy/",
    siteName: "Dubai Buildings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero/home.webp",
        width: 1200,
        height: 630,
        alt: "Land & Development Consultancy in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Land & Development Consultancy in Dubai",
    description:
      "Plan and develop your real estate projects in Dubai with expert consultancy and data-driven insights.",
    images: ["/hero/home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function LandDevelopments() {
  return <LandDevelopmentsClient />;
}
