import type { Metadata } from "next";
import RedirectClient from "@/components/seo/redirect-client";

export const metadata: Metadata = {
  title: "Lease Buildings In Dubai",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.dubai-buildings.com/lease-buildings-dubai/",
  },
};

export default function LeaseRedirectPage() {
  return <RedirectClient href="/lease-buildings-dubai/" />;
}
