"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BuySellForm from "@/components/form/contact-form";
import { FAQ } from "@/components/ui/faq";

export default function Build() {
  const [showMoreDevelop, setShowMoreDevelop] = useState(false);

  const faqsQuestions = [
    {
      question: "How can I develop a building in Dubai?",
      answer:
        "To develop a building in Dubai, you need to secure suitable land, obtain approvals from the relevant authorities, and work with experienced architects, engineers, and contractors. Our team assists developers through every stage of the development process.",
    },
    {
      question: "What types of buildings can be developed in Dubai?",
      answer:
        "Developers can build residential buildings, commercial office buildings, hotels, mixed-use developments, and retail properties depending on zoning regulations and project feasibility.",
    },
    {
      question: "Do you help investors develop buildings in Dubai?",
      answer:
        "Yes. We work with investors and developers to plan, design, and execute development projects while ensuring they align with market demand and investment goals.",
    },
    {
      question: "What approvals are required to develop a building in Dubai?",
      answer:
        "Building development requires approvals from authorities such as Dubai Municipality, planning departments, and other regulatory bodies depending on the project type and location.",
    },
    {
      question: "How long does it take to develop a building in Dubai?",
      answer:
        "The timeline varies depending on the project size and complexity. The process typically includes planning, approvals, design, construction, and final inspections.",
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
            Build
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Text Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Develop your building with the best in the business.
          </h2>

          <div className="tracking-wide text-gray-700 space-y-4">
            {/* First visible part */}
            <p className="text-justify">
              Dubai continues to be one of the fastest-growing real estate
              markets in the world, creating significant opportunities for
              investors and property owners looking to develop buildings in
              Dubai. With strong demand for residential, commercial, and
              mixed-use developments, the city offers an ideal environment for
              large-scale property development.
            </p>

            <AnimatePresence initial={false}>
              {showMoreDevelop && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden space-y-4"
                >
                  <p className="text-justify">
                    However, successful development requires careful planning,
                    market insight, and collaboration with experienced
                    professionals. Our team provides comprehensive support for
                    investors and developers who want to develop buildings in
                    Dubai, guiding them through every stage of the development
                    process. From initial concept planning and site evaluation
                    to project execution and completion, we ensure that each
                    development aligns with market demand and long-term
                    investment goals.
                  </p>

                  <p className="text-justify">
                    By combining industry expertise with deep market knowledge,
                    we help developers create buildings that are both
                    commercially viable and strategically positioned within
                    Dubai’s competitive real estate market.
                  </p>

                  <p className="text-justify">
                    Understanding the full development lifecycle is essential
                    for anyone planning to develop buildings in Dubai. Every
                    successful project begins with a clear vision supported by
                    detailed feasibility studies and market analysis. Our team
                    analyzes location trends, community growth, infrastructure
                    development, and investor demand to help determine the best
                    development strategy.
                  </p>

                  <p className="text-justify">
                    This data-driven approach allows property owners to develop
                    buildings in Dubai that attract investors, tenants, and
                    buyers in the long term. Dubai’s real estate market evolves
                    quickly, and staying ahead of these trends is crucial for
                    successful development. Whether it involves residential
                    apartment buildings, hospitality projects, commercial
                    developments, or mixed-use buildings, we ensure that every
                    development project is aligned with current and future
                    market opportunities.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setShowMoreDevelop(!showMoreDevelop)}
              className="text-black font-semibold underline"
            >
              {showMoreDevelop ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-black py-20">
        <div className="text-center text-white">
          <h2 className="text-5xl">Share your basic information</h2>
          <p>
            Share your requirement with our Professional, Reliable and Efficient
            team
          </p>
        </div>
        <BuySellForm mode="build" />
      </section>

      <section className="relative h-[50vh] sm:h-[60vh]  w-full overflow-hidden">
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
              Develop Buildings in Dubai with Leading Designers Engineers and
              Contractors
            </h2>
          </div>
        </div>
      </section>

      <FAQ questions={faqsQuestions} />
    </main>
  );
}
