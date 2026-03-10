"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header({ isHome }: any) {
  const router = useRouter();

  const menuItems = [
    { label: "BUY", href: "/buy-buildings-dubai" },
    { label: "SELL", href: "/sell-building-dubai" },
    { label: "LEASE", href: "/lease-buildings-dubai" },
    { label: "BUILD", href: "/build" },
    { label: "SERVICES", href: "/services" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "CONTACT US", href: "/contact-us" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`
  fixed top-0 left-0 right-0 z-50
  px-4 sm:px-6 md:px-50 py-6
  transition-all duration-300
  ${scrolled ? "bg-black shadow-lg" : !isHome ? "bg-black" : "bg-transparent"}
`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 items-center">
          {/* LEFT LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/buy-buildings-dubai"
              className="text-white tracking-widest text-sm hover:text-gray-300 transition"
            >
              BUY
            </Link>

            <Link
              href="/sell-building-dubai"
              className="text-white tracking-widest text-sm hover:text-gray-300 transition"
            >
              SELL
            </Link>

            <Link
              href="/lease-buildings-dubai"
              className="text-white tracking-widest text-sm hover:text-gray-300 transition"
            >
              LEASE
            </Link>

            <Link
              href="/build"
              className="text-white tracking-widest text-sm hover:text-gray-300 transition"
            >
              BUILD
            </Link>
          </div>

          {/* LOGO */}
          <div className="flex md:justify-center">
            <Link
              href="/"
              className="text-white text-xl sm:text-xl md:text-2xl tracking-wide md:font-light font-[550]"
            >
              DUBAI BUILDINGS
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-end items-center gap-6">
            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/about-us"
                className="text-white tracking-widest text-sm hover:text-gray-300 transition"
              >
                ABOUT US
              </Link>

              <Link
                href="/services"
                className="text-white tracking-widest text-sm hover:text-gray-300 transition"
              >
                OUR SERVICES
              </Link>

              <Link
                href="/contact-us"
                className="text-white tracking-widest text-sm hover:text-gray-300 transition"
              >
                CONTACT US
              </Link>
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden text-white text-3xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex flex-col"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              ✕
            </button>

            <div className="flex flex-col gap-8 px-8 pt-24">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => {
                    setMenuOpen(false);
                    router.push(item.href);
                  }}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white text-lg tracking-widest text-left"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
