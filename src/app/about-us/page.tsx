"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Form from "@/components/form";
import { FAQ } from "@/components/ui/faq";

export default function About() {
  const [showMoreAbout, setShowMoreAbout] = useState(false);

  const faqsQuestions = [
    {
      question: "What services does Dubai Buildings provide?",
      answer:
        "Dubai Buildings is a business-to-business real estate advisory firm that helps investors, developers, and corporate occupiers buy, sell, lease, and develop buildings across Dubai.",
    },
    {
      question: "Who can benefit from Dubai Buildings services?",
      answer:
        "Our services are designed for institutional investors, property developers, corporate tenants, and building owners who require professional assistance with large-scale real estate transactions in Dubai.",
    },
    {
      question: "How do you find buyers for buildings in Dubai?",
      answer:
        "We use our extensive network of local and international investors who are actively looking to buy buildings in Dubai. Our targeted marketing strategy ensures that your property reaches qualified buyers who are financially capable of completing the transaction.",
    },
    {
      question:
        "Why should I work with Dubai Buildings instead of a traditional agent?",
      answer:
        "Unlike traditional agents, we focus on a professional, research-driven approach, offering verified opportunities and tailored solutions that match each client’s specific investment or business requirements.",
    },
    {
      question:
        "Does Dubai Buildings work with international investors and companies?",
      answer:
        "Yes. We regularly work with international investors, developers, and global companies looking to invest in, lease, or develop buildings in Dubai.",
    },
  ];

  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/hero/1.webp')" }} // change image path if needed
          role="img"
          aria-label="Buy Buildings Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            About Us
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Text Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="tracking-wide text-gray-700 space-y-4">
            {/* First paragraph always visible */}
            <p className="text-justify">
              Dubai Buildings is a premier business-to-business real estate
              service provider in Dubai, specializing in connecting
              institutional investors, developers, and corporate occupiers with
              the right property opportunities. We understand the challenges
              businesses face when searching for a reliable partner to support
              their real estate requirements in Dubai’s fast-moving market. Our
              team simplifies the process by carefully sourcing suitable
              properties and delivering tailored solutions that align with each
              client’s investment or operational goals.
            </p>

            {/* Animated content */}
            <AnimatePresence initial={false}>
              {showMoreAbout && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-justify">
                    Instead of spending time browsing hundreds of inaccurate
                    property listings or dealing with unreliable agents in the
                    market, Dubai Buildings offers a professional and
                    client-focused approach. Our experienced team provides
                    verified opportunities, market insights, and strategic
                    guidance to ensure that every property search is efficient
                    and transparent.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <button
              onClick={() => setShowMoreAbout(!showMoreAbout)}
              className="text-black font-semibold underline"
            >
              {showMoreAbout ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>

      <Form />

      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/hero/3.webp')" }}
          role="img"
          aria-label="Dubai Building"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
              Golden mashrabiyas encase majestic architectural dimensions to
              create blissfully shaded interiors against the azure backdrop of
              the Arabian sky
            </h2>
          </div>
        </div>
      </section>

      <FAQ questions={faqsQuestions} />
    </main>
  );
}
