"use client";

import React from "react";

import { FAQ } from "@/components/ui/faq";
import ContactModal from "@/components/ui/contact-modal";

export default function HealthcareDevelopmentClient() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const faqsQuestions = [
    {
      question: "What is healthcare development consultancy in Dubai?",
      answer:
        "Healthcare development consultancy in Dubai provides expert guidance for planning, developing, and managing healthcare projects such as hospitals, clinics, and medical centers, ensuring compliance, profitability, and long-term success.",
    },
    {
      question: "Is investing in healthcare real estate in Dubai profitable?",
      answer:
        "Yes, healthcare real estate in Dubai is a high-growth sector driven by increasing population, medical tourism, and government support, offering stable long-term returns for investors.",
    },
    {
      question:
        "What factors should be considered when developing a healthcare facility in Dubai?",
      answer:
        "Key factors include location analysis, market demand, regulatory compliance, feasibility studies, operational planning, and selecting the right healthcare operator to ensure project success.",
    },
    {
      question: "Can foreign investors invest in healthcare projects in Dubai?",
      answer:
        "Yes, foreign investors can invest in healthcare developments in Dubai, subject to regulations and approvals, making it an attractive opportunity in a rapidly expanding sector.",
    },
    {
      question:
        "What services are included in healthcare development consultancy?",
      answer:
        "Services include market research, feasibility studies, development strategy, operator sourcing, due diligence, financial reporting, acquisition, and leaseback advisory to support the full lifecycle of healthcare projects.",
    },
  ];
  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/services/healthcare.webp')",
          }}
          role="img"
          aria-label="Buy Buildings In Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Healthcare Development Consultancy
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div>
          <div className="p-6">
            <h3 className="tracking-widest font-medium text-[24px]">
              Healthcare Development Consultancy
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
              Expert healthcare development consultancy in Dubai delivering
              data-driven strategies, feasibility insights, and investment
              optimization.
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
