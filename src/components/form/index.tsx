"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import BuySellForm from "./contact-form";

export default function Form({ isHome }: { isHome?: boolean }) {
  const [pathnameValue, setPathnameValue] = React.useState("");

  const renderForm = () => {
    switch (pathnameValue) {
      case "buy":
        return <BuySellForm mode="buy" />;
      case "sell":
        return <BuySellForm mode="sell" />;
      case "lease":
        return <BuySellForm mode="lease" />;
      case "build":
        return <BuySellForm mode="build" />;
      default:
        return null;
    }
  };

  // Scroll modal to top when form type is selected
  React.useEffect(() => {
    if (pathnameValue) {
      const el = document.getElementById("main-contact-form");
      if (el) {
        el.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [pathnameValue]);

  return (
    <section id="contact-form" className="section-padding text-white bg-black ">
      <div className={`text-center ${isHome ? "md:mb-8 sm:mb-4 mb-4" : ""}`}>
        <h2 className="md:text-5xl sm:text-xl text-xl">
          Select your requirement
        </h2>
        <p className="text-sm">
          Share your requirement with our Professional, Reliable and Efficient
          team
        </p>
      </div>

      {!pathnameValue && (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 md:px-40">
          {["buy", "sell", "lease", "build"].map((type) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" space-y-10 md:max-w-xl px-4"
            >
              <Button
                onClick={() => {
                  setPathnameValue(type);
                  setTimeout(() => {
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="px-6 py-7 text-sm sm:text-base bg-white hover:bg-primary/90 text-black border-none uppercase tracking-[0.2em] font-light transition-all duration-300 hover:scale-105 w-full cursor-pointer flex justify-between items-center "
              >
                <span>{type}</span>
                <ArrowRight className="text-black w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <div key={pathnameValue}>{renderForm()}</div>
      </AnimatePresence>
    </section>
  );
}
