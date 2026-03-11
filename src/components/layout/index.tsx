"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import NotFound from "@/app/not-found";

import Header from "./header";
import Footer from "./footer";
import FloatingButton from "./floating-button";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children, ...delegated }: Props) {
  const pathname = usePathname();

  const isHome = pathname === "/";

  // const validRoutes = [
  //   "/",
  //   "/buy-buildings-dubai/",
  //   "/sell-building-dubai/",
  //   "/lease-buildings-dubai/",
  //   "/build/",
  //   "/privacy-policy/",
  //   "/services/",
  //   "/terms-and-conditions/",
  //   "/thank-you/",
  //   "/about-us/",
  //   "/contact-us/",
  //   "/sitemap.xml/",
  //   "/robots.txt/",
  //   "/_not-found/",
  // ];

  // if (!validRoutes.includes(pathname)) {
  //   return <NotFound />;
  // }

  return (
    <main className="relative min-h-screen">
      <Header isHome={isHome} />

      <FloatingButton />

      {/* Page Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`relative ${isHome ? "" : "pt-10"}`}
        >
          <> {children}</>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </main>
  );
}
