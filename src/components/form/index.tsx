"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import BuySellForm from "./contact-form";

export default function Form() {
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

  return (
    <section
      id="contact-form"
      className="section-padding text-white bg-black space-y-10"
    >
      <div className="text-center">
        <h2 className="text-5xl">Select your requirement</h2>
        <p>
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
              className="text-center space-y-10 md:max-w-xl px-4"
            >
              <Button
                onClick={() => setPathnameValue(type)}
                className="px-12 py-7 text-sm sm:text-base bg-white hover:bg-primary/90 text-black border-none uppercase tracking-[0.2em] font-light transition-all duration-300 hover:scale-105 w-full"
              >
                {type}
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
