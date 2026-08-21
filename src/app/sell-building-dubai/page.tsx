import type { Metadata } from "next";
import SellClient from "./sell-client";
import JsonLd from "@/components/seo/json-ld";
import { breadcrumbSchema, serviceSchema } from "@/lib/seo";

const title = "Sell Your Building in Dubai";
const description =
  "Sell your building in Dubai with Dubai Buildings. We connect landlords and investors with qualified buyers and provide professional guidance for a smooth and secure property sale.";
const path = "/sell-building-dubai/";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `https://www.dubai-buildings.com${path}`,
  },
  openGraph: {
    title,
    description:
      "Looking to sell a building in Dubai? Dubai Buildings connects landlords with qualified investors and buyers for secure and professional property transactions.",
    url: `https://www.dubai-buildings.com${path}`,
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Sell Buildings in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Connect with qualified buyers and investors to sell your building in Dubai with expert real estate guidance.",
    images: ["/home/og-home.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Sell() {
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
      <SellClient />
    </>
  );
}
