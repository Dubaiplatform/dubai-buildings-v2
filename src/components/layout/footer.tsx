import Link from "next/link";
import { NAP, SOCIAL_PROFILES } from "@/lib/seo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <p className="text-xl font-light tracking-wide">DUBAI BUILDINGS</p>

          <p className="text-gray-400 text-sm leading-relaxed">
            Dubai Buildings is a B2B brokerage for whole buildings in Dubai —
            buy, sell, lease, and develop mandates for institutional investors,
            developers, and corporate occupiers.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm tracking-widest text-gray-300 mb-5 font-semibold">
            EXPLORE
          </p>

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
          <p className="text-sm tracking-widest text-gray-300 mb-5 font-semibold">
            COMPANY
          </p>

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
          <p className="text-sm tracking-widest text-gray-300 mb-5 font-semibold">
            CONTACT
          </p>

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

            <a
              href={`mailto:${NAP.email}`}
              className="block hover:text-white transition"
            >
              {NAP.email}
            </a>

            {SOCIAL_PROFILES.length > 0 && (
              <div className="flex flex-wrap gap-4 pt-2">
                {SOCIAL_PROFILES.map((profile) => (
                  <a
                    key={profile.url}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    {profile.name}
                  </a>
                ))}
              </div>
            )}
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
