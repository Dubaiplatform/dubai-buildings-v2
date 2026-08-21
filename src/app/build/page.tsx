import type { Metadata } from "next";
import BuildClient from "./build-client";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

const title = "Develop Buildings in Dubai";
const description =
  "Develop your building in Dubai with Dubai Buildings. Our experts guide investors and developers through planning, design, and construction with trusted industry professionals.";
const path = "/build/";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `https://www.dubai-buildings.com${path}`,
  },
  openGraph: {
    title,
    description:
      "Work with experienced consultants to develop buildings in Dubai. From concept and planning to construction and delivery.",
    url: `https://www.dubai-buildings.com${path}`,
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Expert consultancy for building development projects in Dubai from concept to completion.",
    images: ["/home/og-home.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Build() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: title,
            description,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: title, path },
          ]),
        ]}
      />
      <BuildClient />
    </>
  );
}
