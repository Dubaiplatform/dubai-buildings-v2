"use client";

import React from "react";

import { FAQ } from "@/components/ui/faq";
import ContactModal from "@/components/ui/contact-modal";

export default function CommercialAgencyClient() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const faqsQuestions = [
    {
      question: "What is a commercial real estate agency in Dubai?",
      answer:
        "A commercial real estate agency in Dubai provides services for leasing, buying, and managing office spaces, retail units, and other business properties for landlords and tenants.",
    },
    {
      question:
        "What services do commercial real estate agencies offer in Dubai?",
      answer:
        "Services include market research, property valuation, leasing strategy, rent negotiations, tenant sourcing, landlord representation, and property management.",
    },
    {
      question: "What are landlord services in commercial real estate?",
      answer:
        "Landlord services include lease structuring, rent negotiations, marketing, tenant acquisition, property valuation, and strategic planning to maximize returns on commercial properties.",
    },
    {
      question: "What are tenant representation services in Dubai?",
      answer:
        "Tenant services include office relocation, expansion planning, lease negotiations, interior design consultation, and market analysis to help businesses secure the right space.",
    },
    {
      question: "Is investing in commercial properties in Dubai profitable?",
      answer:
        "Yes, commercial properties in Dubai offer strong rental yields, long-term lease agreements, and high demand from businesses, making them a profitable investment option.",
    },
  ];

  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/services/commercial-agency.webp')",
          }}
          role="img"
          aria-label="Commercial Agency"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Commercial Agency
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div>
          <div className="p-6">
            <h3 className="tracking-widest font-medium text-[24px]">
              Commercial Agency
            </h3>
            <div className="space-y-4">
              <p className="tracking-wider text-gray-700 ">
                The Dubai Buildings Commercial Agency team works in partnership
                with our clients to understand the challenges and opportunities
                they face. We take the time to get to know the brands we work
                with to ensure we provide the best solution in a seamless
                process.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>Our Land and Development Agency Services include:</p>
                <ul className="list-disc pl-4">
                  <li>
                    <li>Landlord Services</li>
                    <ul className="list-disc pl-4">
                      <li>Market Research and Analysis</li>
                      <li>Lease Renewal/Restructuring</li>
                      <li>Rent Negotiations</li>
                      <li>Strategic Planning and Consultation</li>
                      <li>Commercial Property Valuation</li>
                      <li>Local and International Marketing</li>
                      <li>Property Management</li>
                    </ul>
                  </li>
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
