"use client";

import React from "react";

import { FAQ } from "@/components/ui/faq";
import ContactModal from "@/components/ui/contact-modal";

export default function EducationDevelopmentClient() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const faqsQuestions = [
    {
      question: "What is education development consultancy in Dubai?",
      answer:
        "Education development consultancy in Dubai provides expert guidance for planning, developing, and managing educational projects such as schools, universities, and training institutes to ensure profitability and long-term success.",
    },
    {
      question:
        "Is investing in educational real estate in Dubai a good opportunity?",
      answer:
        "Yes, investing in educational real estate in Dubai is a growing opportunity due to increasing population, demand for quality education, and government support, offering stable long-term returns.",
    },
    {
      question:
        "What factors should be considered when developing a school in Dubai?",
      answer:
        "Key factors include location demand, population demographics, regulatory approvals, feasibility studies, operator selection, and long-term financial planning to ensure a successful education project.",
    },
    {
      question: "Can foreign investors invest in education projects in Dubai?s",
      answer:
        "Yes, foreign investors can invest in education developments in Dubai, subject to local regulations and approvals, making it an attractive sector for international investors.",
    },
    {
      question:
        "What services are included in education development consultancy?",
      answer:
        "Services include market research, location analysis, feasibility studies, development strategy, operator sourcing, due diligence, financial reporting, and investment advisory across the entire project lifecycle.",
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
              "url('/services/Education Development and Consultancy .webp')",
          }}
          role="img"
          aria-label="Buy Buildings In Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Education Development and Consultancy
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div>
          <div className="p-6">
            <h3 className="tracking-widest font-medium text-[24px]">
              Education Development and Consultancy
            </h3>
            <div className="space-y-4">
              <p className="tracking-wider text-gray-700 ">
                Dubai Buildings position as a partner of one of the leading real
                estate agencies in the UAE provides a wealth of local market
                knowledge in the Education sector. Our Education Development and
                Consultancy specialists work with developers, operators, and
                institutional investors through every stage of the development
                cycle to provide objective professional advice and accurate, up
                to date information for data-backed decision making.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>
                  Our Education Development and Consultancy services include:
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
              Build and scale successful education projects with expert
              consultancy, market intelligence, and strategic execution.
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
