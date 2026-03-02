"use client";

import Link from "next/link";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/hero/2.webp",
    title: "Find the building that best meets your investment goals",
    subtitle: "Discover Premium Properties",
    link: "/buy",
  },
  {
    image: "/hero/1.webp",
    title: "Source the best buyer for your building",
    subtitle: "Exclusive Beachfront Living",
    link: "/buy",
  },
  {
    image: "/hero/3.webp",
    title: "Find the building that best fits your requirements",
    subtitle: "Sky High Sophistication",
    link: "/buy",
  },
  {
    image: "/hero/3.webp",
    title: "Source the best tenant for your building",
    subtitle: "Sky High Sophistication",
    link: "/buy",
  },
  {
    image: "/hero/3.webp",
    title: "Develop your building with the best in the business",
    subtitle: "Sky High Sophistication",
    link: "/buy",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    startAutoSlide(); // 🔥 reset timer
  };
  return (
    <section className="relative w-screen h-screen overflow-hidden bg-black">
      {/* ================= SLIDES ================= */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            exit={{ scale: 1.2 }}
            transition={{ duration: 3, ease: "linear" }}
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
          </motion.div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center px-6 md:px-16">
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl text-center "
            >
              <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-light tracking-wide mb-4">
                {slides[currentIndex].title}
              </h2>

              <p className="text-white/80 text-base sm:text-lg md:text-xl tracking-wider mb-8">
                {slides[currentIndex].subtitle}
              </p>

              <Link
                href={slides[currentIndex].link}
                className="relative inline-block overflow-hidden px-8 py-3 md:px-10 md:py-4 border border-white text-white tracking-widest text-xs md:text-sm group"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  EXPLORE MORE
                </span>

                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[49] pointer-events-auto flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className="group cursor-pointer"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-1 transition-all duration-300 ${
                index === currentIndex
                  ? "w-12 bg-white"
                  : "w-6 bg-white/40 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* ================= BOTTOM NAV ================= */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-40 grid grid-cols-1 md:grid-cols-3 bg-white/10">
        {["NEW DEVELOPEMENTS", "BRANDED RESIDENCES", "SERVICE"].map(
          (item, index) => (
            <motion.div
              key={item}
              onClick={() => setCurrentIndex(index)}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className={`px-6 py-4 md:px-8 md:py-6 cursor-pointer backdrop-blur-sm
                ${
                  index === currentIndex
                    ? "bg-black/60 text-white"
                    : "bg-black/30 hover:bg-black/50 text-white/80"
                }`}
            >
              <h3 className="text-xs md:text-sm tracking-widest font-medium">
                {item}
              </h3>
            </motion.div>
          )
        )}
      </div> */}
    </section>
  );
}
