import type { Metadata } from "next";
import ContactFormInContact from "@/components/ui/contact-form-contact";
import JsonLd from "@/components/seo/json-ld";
import { NAP, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Dubai Buildings for B2B building sales, acquisitions, leasing, and development consultancy in Dubai. Office 1102, Al Saqr Business Tower.",
  alternates: {
    canonical: "https://www.dubai-buildings.com/contact-us/",
  },
  openGraph: {
    title: "Contact Us",
    description:
      "Speak with Dubai Buildings about buying, selling, leasing, or developing buildings in Dubai.",
    url: "https://www.dubai-buildings.com/contact-us/",
    siteName: "Dubai Buildings",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/home/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Contact Dubai Buildings",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactUs() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact-us/" },
        ])}
      />

      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden bg-black">
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="my-12 md:my-24 px-6 sm:px-8 md:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-gray-700">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">
              Get in touch
            </h2>
            <p className="leading-relaxed">
              Speak with our team about acquisition mandates, disposals,
              leasing, or development consultancy across Dubai.
            </p>
            <div className="space-y-2 text-sm md:text-base">
              <p className="font-medium text-gray-900">Office</p>
              <p>{NAP.streetAddress}</p>
              <p>{NAP.addressLocality}, United Arab Emirates</p>
            </div>
            <div className="space-y-2 text-sm md:text-base">
              <p className="font-medium text-gray-900">Phone</p>
              <a
                href={`tel:${NAP.telephone}`}
                className="block hover:text-black transition"
              >
                {NAP.telephoneDisplay}
              </a>
              <a
                href={`tel:${NAP.mobile}`}
                className="block hover:text-black transition"
              >
                {NAP.mobileDisplay}
              </a>
              <a
                href={NAP.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-black transition"
              >
                WhatsApp: {NAP.mobileDisplay}
              </a>
            </div>
          </div>

          <div>
            <ContactFormInContact />
          </div>
        </div>
      </section>
    </main>
  );
}
