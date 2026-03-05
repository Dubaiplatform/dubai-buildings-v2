"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FAQ } from "@/components/ui/faq";
import BuySellForm from "@/components/form/contact-form";

export default function Sell() {
  const [showMoreSell, setShowMoreSell] = useState(false);

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
            Sell Buildings
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Text Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Source the best buyer for your building.
          </h2>

          <div className="tracking-wide text-gray-700 space-y-4">
            {/* First visible part */}
            <p className="text-justify">
              Selling a building in Dubai requires the right strategy, market
              knowledge, and access to qualified investors. Property owners who
              want to sell buildings in Dubai need a partner that understands
              the market and can connect them with serious buyers. Our team
              specializes in sourcing the best buyer for each opportunity,
              ensuring that building owners receive maximum value for their
              assets.
            </p>

            {/* Animated content */}
            <AnimatePresence initial={false}>
              {showMoreSell && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden space-y-4"
                >
                  <p className="text-justify">
                    When clients decide to sell buildings in Dubai, they benefit
                    from our extensive network of investors, developers, and
                    institutional buyers actively looking for large-scale
                    property acquisitions. Over the years, we have built strong
                    relationships with qualified investors who are specifically
                    interested in acquiring residential, commercial, and
                    mixed-use buildings across Dubai. This network allows us to
                    efficiently match the right buyer with the right property,
                    making the process of selling buildings in Dubai smooth,
                    professional, and highly effective.
                  </p>

                  <p className="text-justify">
                    One of the key advantages of working with our team is our
                    proven track record of successfully closing high-value
                    transactions. We have facilitated numerous deals involving
                    buildings valued in excess of AED 100 million, demonstrating
                    our expertise in handling complex building acquisitions and
                    sales. Investors looking to buy buildings in Dubai trust our
                    process because we carefully present well-structured
                    opportunities that align with their investment goals. This
                    trust allows us to bring qualified buyers to sellers who
                    want to sell buildings in Dubai quickly and efficiently.
                  </p>

                  <p className="text-justify">
                    Our industry knowledge also helps us position each building
                    correctly within the market. Every building has unique
                    characteristics, including location, tenant profile, rental
                    income, and development potential. By understanding these
                    factors, we can target the right investors who are actively
                    seeking opportunities to buy buildings in Dubai, ensuring
                    that sellers reach the most relevant and financially capable
                    buyers.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <button
              onClick={() => setShowMoreSell(!showMoreSell)}
              className="text-black font-semibold underline"
            >
              {showMoreSell ? "Show Less" : "Show More"}
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
        <BuySellForm mode="sell" />
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
              Sell Your Building in Dubai to Qualified Investors
            </h2>
          </div>
        </div>
      </section>

      <FAQ questions={faqsQuestions} />
    </main>
  );
}
