import Link from "next/link";

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
          <h3 className="text-sm tracking-widest text-gray-300 mb-5">
            NAVIGATION
          </h3>

          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link href="/buy" className="hover:text-white transition">
              Buy
            </Link>

            <Link href="/sell" className="hover:text-white transition">
              Sell
            </Link>

            <Link href="/lease" className="hover:text-white transition">
              Lease
            </Link>

            <Link href="/build" className="hover:text-white transition">
              Build
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm tracking-widest text-gray-300 mb-5">
            COMPANY
          </h3>

          <div className="flex flex-col gap-3 text-gray-400 text-sm">
            <Link href="/about-us" className="hover:text-white transition">
              About Us
            </Link>

            <Link href="/services" className="hover:text-white transition">
              Services
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/termsAndConditions"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm tracking-widest text-gray-300 mb-5">
            CONTACT
          </h3>

          <div className="space-y-3 text-gray-400 text-sm">
            <p>Al Saqr Business Tower</p>
            <p>Dubai, United Arab Emirates</p>

            <a
              href="tel:+971581514623"
              className="block hover:text-white transition"
            >
              +971 58 151 4623
            </a>

            <a
              href="mailto:info@dubaibuildings.com"
              className="block hover:text-white transition"
            >
              info@dubaibuildings.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © {currentYear} Dubai Buildings. All Rights Reserved.
      </div>
    </footer>
  );
}
