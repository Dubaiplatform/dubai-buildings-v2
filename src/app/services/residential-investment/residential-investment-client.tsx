"use client";

import React from "react";

import { FAQ } from "@/components/ui/faq";
import ContactModal from "@/components/ui/contact-modal";

export default function ResidentialInvestmentClient() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const faqsQuestions = [
    {
      question: "Is residential property investment in Dubai profitable?",
      answer:
        "Yes, residential property investment in Dubai is highly profitable due to strong rental demand, attractive yields, tax-free income, and long-term capital appreciation.",
    },
    {
      question: "What types of residential properties can I invest in Dubai?",
      answer:
        "Investors can choose from apartment buildings, residential towers, villa compounds, and blocks of flats, including fully leased income-generating properties.",
    },
    {
      question:
        "What are the benefits of investing in residential buildings in Dubai?",
      answer:
        "Residential buildings offer stable rental income, high occupancy rates, long-term lease options, and consistent demand from residents and expatriates.",
    },
    {
      question:
        "How do I find the best residential investment opportunities in Dubai?",
      answer:
        "The best opportunities can be found through market research, access to off-market deals, and working with experienced real estate advisors who provide verified investment-grade properties.",
    },
    {
      question:
        "Can foreign investors invest in residential properties in Dubai?",
      answer:
        "Yes, foreign investors can buy residential properties in designated freehold areas in Dubai, making it a globally attractive real estate investment destination.",
    },
  ];
  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/services/residential-investment.webp')",
          }}
          role="img"
          aria-label="Residential Investment"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Residential Investment
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div>
          <div className="p-6">
            <h3 className="tracking-widest font-medium text-[24px]">
              Residential Investment
            </h3>
            <div className="space-y-4">
              <p className="tracking-wider text-gray-700 ">
                As a partner of one of the leading real estate agencies in the
                UAE, Dubai-Buildings.com has established a platform for private
                investors, real estate investment funds, and developers to
                acquire and dispose of residential investment properties in an
                effective and efficient manner.
              </p>

              <p className="tracking-wider text-gray-700 ">
                Our unrivaled expertise in the local market provides clients
                with accurate and up to date market intelligence to maximize
                their returns. Our Residential Investment team specializes in
                income generating assets with long term leases or guaranteed
                returns.
              </p>

              <p className="tracking-wider text-gray-700 ">
                The Residential Investment team maintains an updated inventory
                of fully-vetted, investment-grade residential properties
                throughout the UAE. Our knowledge and expertise in this segment
                of the market stems from our extensive experience in handling
                previous transactions which include residential towers, villa
                compounds, and blocks of flats.
              </p>

              <p className="tracking-wider text-gray-700 ">
                Dubai Buildings network of property owners, real estate
                developers, banks, and institutional investors ensures a steady
                stream of properties available for both acquisition and
                disposal. Our unique position in the market also provides our
                clients with access to High Net Worth Individuals and regional
                family offices with trophy residential property portfolios.
              </p>

              <div className="">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="border px-4 py-3 bg-black hover:bg-black/90 text-white cursor-pointer "
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
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
              Discover high-yield residential investment opportunities in Dubai
              with expert guidance, verified properties, and data-driven market
              insights.
            </h2>
          </div>
        </div>
      </section>

      <FAQ questions={faqsQuestions} />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
