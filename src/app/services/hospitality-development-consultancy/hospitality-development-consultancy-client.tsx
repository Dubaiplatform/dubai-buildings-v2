"use client";

import React from "react";

import { FAQ } from "@/components/ui/faq";
import ContactModal from "@/components/ui/contact-modal";

export default function HospitalityDevelopmentClient() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const faqsQuestions = [
    {
      question: "What is hospitality development consultancy in Dubai?",
      answer:
        "Hospitality development consultancy in Dubai provides expert guidance for planning, developing, and managing hotels, resorts, and serviced apartments to maximize profitability and long-term success.",
    },
    {
      question: "Is investing in hospitality real estate in Dubai profitable?",
      answer:
        "Yes, hospitality real estate in Dubai is highly profitable due to strong tourism demand, high occupancy rates, and global investor interest, making it a high-growth investment sector.",
    },
    {
      question: "What factors are important when developing a hotel in Dubai?",
      answer:
        "Key factors include location analysis, market positioning, target audience, room mix, operator selection, and feasibility studies to ensure strong performance and return on investment.",
    },
    {
      question:
        "Can foreign investors invest in hospitality projects in Dubai?",
      answer:
        "Yes, foreign investors can invest in hospitality developments in Dubai, especially in freehold areas, making it an attractive market for international hotel investors.",
    },
    {
      question:
        "What services are included in hospitality development consultancy?",
      answer:
        "Services include market research, feasibility studies, development strategy, operator sourcing, due diligence, financial reporting, acquisition, and leaseback advisory across the full project lifecycle.",
    },
  ];
  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/services/Hospitality Development and Consultancy.webp')",
          }}
          role="img"
          aria-label="Investments and Logistics Investmentss"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Hospitality Development and Consultancy
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div>
          <div className="p-6">
            <h3 className="tracking-widest font-medium text-[24px]">
              Hospitality Development and Consultancy
            </h3>
            <div className="space-y-4">
              <p className="tracking-wider text-gray-700 ">
                Our specialists provide advice on key factors including location
                analysis, market positioning, room types, key count, and
                ancillary revenue sources. Working internally with our team of
                more than 100 licensed real estate agents in the residential and
                commercial sectors, we offer a unique perspective to extract the
                maximum potential from each project through an effective
                mixed-use strategy.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>
                  Our Hospitality Development and Consultancy services include:
                </p>
                <ul className="list-disc pl-4 ">
                  <li>Market Research</li>
                  <li>Location Analysis</li>
                  <li>Feasibility Studies</li>
                  <li>Development Strategy</li>
                  <li>Development Management</li>
                  <li>Operator Search and Selection</li>
                  <li>Contract Negotiation</li>
                  <li>Due Diligence</li>
                  <li>Financial Reporting</li>
                  <li>Acquisition and Disposal</li>
                  <li>Sale and Leaseback</li>
                  <li>Sourcing Investment Opportunities</li>
                </ul>
              </div>

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
              Unlock high-return hospitality investment opportunities with
              strategic development and consultancy services in Dubai.
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
