"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BuySellForm from "@/components/form/contact-form";
import { FAQ } from "@/components/ui/faq";

export default function BuyClient() {
  const [showMore, setShowMore] = useState(false);
  const faqsQuestions = [
    {
      question: "What types of buildings are available for investment?",
      answer:
        "We offer a wide range of investment opportunities including residential buildings, commercial buildings, mixed-use developments, and fully leased income-generating properties across Dubai.",
    },
    {
      question: "Are the buildings verified before being offered to investors?",
      answer:
        "Yes. All buildings are thoroughly vetted by our team. We review the legal status, financial performance, occupancy levels, and market value to ensure they are attractive and secure investment opportunities.",
    },
    {
      question: "What budget ranges are available for building investments?",
      answer:
        "Our portfolio includes buildings across multiple budget levels from mid-size investment properties to large institutional-grade assets allowing investors to find opportunities that match their financial goals.",
    },
    {
      question: "In which areas of Dubai are the buildings located?",
      answer:
        "We have acquisition opportunities in various prime communities across Dubai, including both established investment zones and emerging high-growth locations.",
    },
    {
      question: "Can international investors purchase buildings in Dubai?",
      answer:
        "Yes. Dubai allows foreign investors to purchase properties in designated freehold areas, making it an attractive market for international building investments.",
    },
  ];
  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/buy/buy.webp')" }}
          role="img"
          aria-label="Buy Buildings In Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Buy Buildings In Dubai
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Text Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Find the building that best meets your investment goals.
          </h2>

          <div className="tracking-wide text-gray-700 space-y-4">
            {/* First half paragraph always visible */}
            <p className="text-justify">
              Dubai has become one of the most attractive destinations for real
              estate investors worldwide, and many investors are actively
              looking to buy buildings in Dubai as part of their long-term
              investment strategy. The city offers a strong economy, a
              business-friendly environment, and a rapidly growing real estate
              market that continues to attract both local and international
              investors.
            </p>

            {/* Animated content */}
            <AnimatePresence initial={false}>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden space-y-4"
                >
                  <p className="text-justify">
                    One of the biggest advantages for investors who want to buy
                    buildings in Dubai is the tax-efficient investment
                    environment. Dubai does not impose annual property taxes or
                    capital gains taxes, which makes property ownership highly
                    profitable compared to many other global cities. In
                    addition, Dubai’s population continues to grow as
                    professionals, entrepreneurs, and multinational companies
                    relocate to the city. This consistent growth increases the
                    demand for residential and commercial properties, making it
                    an ideal time to buy buildings in Dubai for investors
                    seeking strong rental yields and long-term capital
                    appreciation.
                  </p>

                  <p className="text-justify">
                    Investors who choose to buy buildings in Dubai gain access
                    to a wide variety of property types across different
                    budgets, communities, and investment structures.
                    Opportunities include residential apartment buildings,
                    commercial office buildings, mixed-use developments, and
                    fully leased income-generating properties. Residential
                    buildings are particularly attractive because the city’s
                    growing population creates consistent demand for rental
                    housing. Many investors prefer to buy residential buildings
                    in Dubai because they provide steady rental income and
                    strong occupancy rates.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-black font-semibold underline"
            >
              {showMore ? "Show Less" : "Show More"}
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
        <BuySellForm mode="buy" />
      </section>

      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/buy/buy1.webp')" }}
          role="img"
          aria-label="Dubai Building"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
              Buy Buildings in Dubai – Exclusive Building Investment
              Opportunities
            </h2>
          </div>
        </div>
      </section>

      <FAQ questions={faqsQuestions} />
    </main>
  );
}
