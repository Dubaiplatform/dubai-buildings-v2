"use client";

import React from "react";

import { FAQ } from "@/components/ui/faq";
import ContactModal from "@/components/ui/contact-modal";

export default function LandDevelopmentsClient() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const faqsQuestions = [
    {
      question: "What is land and development consultancy in Dubai?",
      answer:
        "Land and development consultancy in Dubai involves expert guidance on land acquisition, feasibility studies, market analysis, and development strategy to help investors and developers maximize project success and profitability.",
    },
    {
      question:
        "How do I choose the right land for property development in Dubai?",
      answer:
        "Choosing the right land requires evaluating location demand, zoning regulations, infrastructure, market trends, and potential return on investment. Professional consultancy ensures informed, data-driven decisions.",
    },
    {
      question:
        "Why are feasibility studies important for real estate development?",
      answer:
        "Feasibility studies assess the financial viability, risks, market demand, and development potential of a project, helping investors avoid costly mistakes and ensure profitable outcomes.",
    },
    {
      question: "Can foreign investors buy land for development in Dubai?",
      answer:
        "Yes, foreign investors can purchase land in designated freehold areas in Dubai, making it an attractive destination for international property developers and investors.",
    },
    {
      question:
        "What services are included in land acquisition and development consultancy?",
      answer:
        "Services typically include market research, competitor analysis, feasibility studies, development planning, land acquisition, deal structuring, and sourcing development partners to support the entire project lifecycle.",
    },
  ];
  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/services/land.webp')",
          }}
          role="img"
          aria-label="Buy Buildings In Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Land and Development Consultancy
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div>
          <div className="p-6">
            <h3 className="tracking-widest font-medium text-[24px]">
              Land and Development Consultancy
            </h3>
            <div className="space-y-4">
              <p className="tracking-wider text-gray-700 ">
                Dubai Buildings leverages its position as a partner of one of
                the leading real estate agencies in the UAE to give our
                consultants an unparalleled advantage; a live feed into the
                latest activities and trends in the property market. With more
                than 100 licensed real estate agents actively leasing, selling,
                and buying properties for our clients on a daily basis, our
                consultants always have their ‘finger on the pulse’ of the
                market with accurate and up to date information.
              </p>

              <p className="tracking-wider text-gray-700 ">
                Our team provides comprehensive feasibility studies for real
                estate developers, banks, and institutional investors throughout
                the UAE. Our consultants add value to our clients by using our
                advantage as a market leader to provide insight and analysis on
                the latest trends, regulations, and competition to anticipate
                and counteract weaknesses and threats, while capitalizing on
                strengths and opportunities to reduce risk. Our approach allows
                our clients to make informed, data-backed decisions at every
                stage of the property development cycle.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>
                  Our Land and Development Consultancy services cover the
                  following sectors:
                </p>
                <ul className="list-disc pl-4">
                  {[
                    "Residential",
                    "Industrial & Logistics",
                    "Education",
                    "Healthcare",
                    "Office",
                    "Hospitality",
                    "Retail",
                  ].map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>

              <div className="text-gray-700 space-y-1">
                <p>Our Land and Development Consultancy services include:</p>
                <ul className="list-disc pl-4">
                  {[
                    "Tailored Market Research & Analysis",
                    "Competitor Analysis",
                    "Feasibility Studies",
                    "Development Strategy",
                    "Development Management",
                  ].map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>

              <div className="text-gray-700 space-y-1">
                <p>Our Land and Development Agency Services include:</p>
                <ul className="list-disc pl-4">
                  {[
                    "Land Sales and Acquisition",
                    "Sourcing of Development Partners",
                    "Sourcing of Corporate Occupiers",
                    "Deal Structuring and Due Diligence",
                    "Bespoke Marketing Campaigns",
                  ].map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
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
              Comprehensive land and property development consultancy services
              in Dubai for investors, developers, and institutions.
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
