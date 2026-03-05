"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import BuySellForm from "@/components/form/contact-form";
import { FAQ } from "@/components/ui/faq";

export default function Build() {
  const [showMoreLease, setShowMoreLease] = useState(false);

  const faqsQuestions = [
    {
      question: "How can I sell my building in Dubai?",
      answer:
        "To sell your building in Dubai, you can work with a specialized real estate advisory firm that has access to qualified investors and developers. Our team helps property owners market their buildings to serious buyers and manage the entire sales process from evaluation to closing.",
    },
    {
      question: "What types of buildings can be sold in Dubai?",
      answer:
        "Owners can sell various types of properties including residential buildings, commercial buildings, mixed-use developments, and fully leased income-generating assets across different communities in Dubai.",
    },
    {
      question: "How do you find buyers for buildings in Dubai?",
      answer:
        "We use our extensive network of local and international investors who are actively looking to buy buildings in Dubai. Our targeted marketing strategy ensures that your property reaches qualified buyers who are financially capable of completing the transaction.",
    },
    {
      question: "What is the typical value of buildings sold in Dubai?",
      answer:
        "Building values in Dubai vary depending on location, size, rental income, and development potential. Many building transactions exceed AED 100 million, especially for well-located residential or commercial assets.",
    },
    {
      question: "How long does it take to sell a building in Dubai?",
      answer:
        "The timeline depends on the property type, pricing strategy, and market demand. With the right marketing and access to qualified investors, buildings in Dubai can be sold efficiently once the right buyer is identified.",
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
            Leasing Buildings
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Text Content */}
        <div className="space-y-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Find the building that best fits your requirements.
            </h2>

            <div className="tracking-wide text-gray-700 space-y-2">
              {/* First visible paragraph */}
              <p className="text-justify">
                Dubai has become one of the world’s leading business and
                hospitality hubs, attracting international companies, hotel
                operators, and corporate tenants looking for strategic locations
                to expand their operations. As the demand for commercial space
                continues to grow, many businesses are searching to lease
                buildings in Dubai that meet their operational requirements and
                long-term growth plans.
              </p>

              {/* Animated content */}
              <AnimatePresence initial={false}>
                {showMoreLease && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden space-y-2"
                  >
                    <p className="text-justify">
                      Whether a company needs a full building for hospitality,
                      corporate headquarters, or mixed-use operations, Dubai
                      offers a wide range of opportunities across prime
                      locations. Our team specializes in helping businesses
                      lease buildings in Dubai by identifying properties that
                      align with their business goals, location preferences, and
                      budget. With extensive market knowledge and industry
                      experience, we help tenants navigate the process
                      efficiently while ensuring they secure the most suitable
                      building for their operations.
                    </p>

                    <p className="text-justify">
                      Finding the right property can be challenging, especially
                      for businesses with specific operational needs. Companies
                      looking to lease buildings in Dubai often require
                      buildings that meet strict criteria such as location
                      accessibility, building size, infrastructure quality, and
                      proximity to key commercial districts. Over the years, we
                      have successfully assisted thousands of tenants, including
                      world-class hotel and hospitality brands, in securing the
                      right buildings across Dubai.
                    </p>

                    <p className="text-justify">
                      Through our strong industry connections and market
                      expertise, we provide tenants with access to exclusive
                      opportunities that are not always publicly listed. This
                      gives businesses a significant advantage when they are
                      looking to lease buildings in Dubai, allowing them to
                      identify suitable properties before they become widely
                      available in the market.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Button */}
              <button
                onClick={() => setShowMoreLease(!showMoreLease)}
                className="text-black font-semibold underline mt-2"
              >
                {showMoreLease ? "Show Less" : "Show More"}
              </button>
            </div>
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
        <BuySellForm mode="lease" />
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
              Lease Buildings in Dubai with Access to Corporate Tenants
            </h2>
          </div>
        </div>
      </section>

      <FAQ questions={faqsQuestions} />
    </main>
  );
}
