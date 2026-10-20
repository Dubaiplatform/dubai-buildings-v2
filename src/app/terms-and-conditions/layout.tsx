import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Dubai Buildings website and B2B real estate advisory services in Dubai.",
  alternates: {
    canonical: "https://www.dubai-buildings.com/terms-and-conditions/",
  },
  robots: { index: true, follow: true },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
