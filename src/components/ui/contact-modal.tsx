"use client";

import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import BuySellForm from "../form/contact-form";
import { ArrowRight } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ModalProps) {
  const [pathnameValue, setPathnameValue] = React.useState("");

  // Disable background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const renderForm = () => {
    switch (pathnameValue) {
      case "buy":
        return <BuySellForm mode="buy" onClose={onClose} />;
      case "sell":
        return <BuySellForm mode="sell" onClose={onClose} />;
      case "lease":
        return <BuySellForm mode="lease" onClose={onClose} />;
      case "build":
        return <BuySellForm mode="build" onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <div
      id="main-contact-form"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"
    >
      <div className="bg-black w-[100%] md:w-[50%] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-white px-6 pt-3">
          Select your requirement
        </h2>

        <div className="bg-black md:p-6">
          {!pathnameValue && (
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
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
        </div>
      </div>
    </div>
  );
}
