import type { Metadata } from "next";
import RedirectClient from "@/components/seo/redirect-client";

export const metadata: Metadata = {
  title: "Sell Buildings In Dubai",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.dubai-buildings.com/sell-building-dubai/",
  },
};

export default function SellRedirectPage() {
  return <RedirectClient href="/sell-building-dubai/" />;
}
