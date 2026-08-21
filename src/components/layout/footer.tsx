import Link from "next/link";
import { NAP } from "@/lib/seo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-xl font-light tracking-wide">DUBAI BUILDINGS</h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            Dubai Buildings is a premier real estate partner helping investors,
            developers, and businesses acquire high-value buildings across
            Dubai.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-sm tracking-widest text-gray-300 mb-5 font-semibold">
            EXPLORE
          </h3>

          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link
              href="/buy-buildings-dubai/"
              className="hover:text-white transition"
            >
              Buy Buildings
            </Link>

            <Link
              href="/sell-building-dubai/"
              className="hover:text-white transition"
            >
              Sell Buildings
            </Link>

            <Link
              href="/lease-buildings-dubai/"
              className="hover:text-white transition"
            >
              Lease Buildings
            </Link>

            <Link href="/build/" className="hover:text-white transition">
              Build
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm tracking-widest text-gray-300 mb-5 font-semibold">
            COMPANY
          </h3>

          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link href="/about-us/" className="hover:text-white transition">
              About Us
            </Link>

            <Link href="/services/" className="hover:text-white transition">
              Services
            </Link>

            <Link href="/contact-us/" className="hover:text-white transition">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm tracking-widest text-gray-300 mb-5 font-semibold">
            CONTACT
          </h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p>{NAP.streetAddress}</p>
            <p>{NAP.addressLocality}, United Arab Emirates</p>

            <a
              href={`tel:${NAP.telephone}`}
              className="block hover:text-white transition"
            >
              {NAP.telephoneDisplay}
            </a>

            <a
              href={`tel:${NAP.mobile}`}
              className="block hover:text-white transition"
            >
              {NAP.mobileDisplay}
            </a>

            <a
              href={NAP.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 md:px-50 text-gray-400 text-sm flex md:flex-row sm:flex-col flex-col gap-2 justify-between items-center">
        <div className="flex  gap-4">
          <Link href="/privacy-policy/" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions/"
            className="hover:text-white transition"
          >
            Terms & Conditions
          </Link>
        </div>
        <div>© {currentYear} Dubai Buildings. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
