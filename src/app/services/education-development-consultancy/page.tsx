import type { Metadata } from "next";
import HealthcareDevelopmentClient from "./education-development-consultancy-client";

export const metadata: Metadata = {
  title: "Education Development & Consultancy in Dubai",
  description:
    "Dubai Buildings provides specialized education development consultancy in Dubai. Our team offers feasibility studies, market research, operator sourcing, and strategic advisory for schools, universities, and educational institutions.",

  alternates: {
    canonical:
      "https://www.dubai-buildings.com/services/education-development-consultancy/",
  },

  openGraph: {
    title: "Education Development & Consultancy in Dubai",
    description:
      "Expert education development consultancy in Dubai. We provide market research, feasibility studies, and operator sourcing for educational projects.",
    url: "https://www.dubai-buildings.com/services/education-development-consultancy/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Education Development & Consultancy in Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Education Development & Consultancy in Dubai",
    description:
      "Plan and develop schools and educational institutions in Dubai with expert consultancy and data-driven insights.",
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function LandDevelopments() {
  return <HealthcareDevelopmentClient />;
}
