import type { Metadata } from "next";
import AboutClient from "./about-client";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, faqPageSchema } from "@/lib/seo";
import { aboutFaqs } from "./faqs";

export const metadata: Metadata = {
  title: "About Dubai Buildings",
  description:
    "Dubai Buildings is a B2B real estate advisory in Dubai helping investors, developers and corporate occupiers buy, sell, lease and develop whole buildings.",

  alternates: {
    canonical: "https://www.dubai-buildings.com/about-us/",
  },

  openGraph: {
    title: "About Dubai Buildings",
    description:
      "Learn about Dubai Buildings, a trusted B2B real estate partner helping investors, developers, and businesses with building investments and opportunities in Dubai.",
    url: "https://www.dubai-buildings.com/about-us",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
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
    images: ["/home/og-home.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Dubai Buildings", path: "/about-us/" },
          ]),
          faqPageSchema(aboutFaqs),
        ]}
      />
      <AboutClient />
    </>
  );
}
