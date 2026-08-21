import type { Metadata } from "next";
import BuyClient from "./buy-client";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

const title = "Buy Buildings In Dubai";
const description =
  "Find investment buildings for sale in Dubai with Dubai Buildings. Access exclusive building acquisition opportunities for investors across multiple communities and budgets.";
const path = "/buy-buildings-dubai/";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `https://www.dubai-buildings.com${path}`,
  },
  openGraph: {
    title,
    description:
      "Discover investment buildings for sale in Dubai. Dubai Buildings connects investors with exclusive commercial and residential building opportunities.",
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
      "Explore commercial and residential building investment opportunities across Dubai.",
    images: ["/home/og-home.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Buy() {
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
      <BuyClient />
    </>
  );
}
