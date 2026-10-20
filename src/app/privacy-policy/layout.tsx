import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Dubai Buildings, explaining how we collect, use and protect personal data submitted through www.dubai-buildings.com.",
  alternates: {
    canonical: "https://www.dubai-buildings.com/privacy-policy/",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
