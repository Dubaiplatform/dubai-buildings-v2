"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import WhiteLogo from "@/white-logo.svg";
import Image from "next/image";

export default function Header({ isHome }: any) {
  const router = useRouter();

  const menuItems = [
    { label: "BUY", href: "/buy" },
    { label: "SELL", href: "/sell" },
    { label: "LEASE", href: "/lease" },
    { label: "BUILD", href: "/build" },
    { label: "ABOUT US", href: "/about-us" },
    { label: "SERVICES", href: "/services" },
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
    flex items-center justify-between
    px-4 md:px-10 py-8
    transition-all duration-300
    ${scrolled ? "bg-black shadow-lg" : !isHome ? "bg-black" : "bg-transparent"}
  `}
      >
        {/* LEFT SIDE */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          <Link href="/buy" className="nav-link">
            BUY
          </Link>
          <Link href="/sell" className="nav-link">
            SELL
          </Link>
          <Link href="/lease" className="nav-link">
            LEASE
          </Link>
        </div>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className="text-white text-lg sm:text-xl md:text-2xl tracking-wide font-light"
          >
            DUBAI BUILDINGS
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-end gap-6 flex-1">
          <div className="hidden md:flex items-center gap-8">
            <Link href="/build" className="nav-link">
              BUILD
            </Link>
            <Link href="/about-us" className="nav-link">
              ABOUT US
            </Link>
            <Link href="/services" className="nav-link">
              SERVICES
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
