import type { Metadata } from "next";
import RedirectClient from "@/components/seo/redirect-client";

export const metadata: Metadata = {
  title: "Buy Buildings In Dubai",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.dubai-buildings.com/buy-buildings-dubai/",
  },
};

export default function BuyRedirectPage() {
  return <RedirectClient href="/buy-buildings-dubai/" />;
}
