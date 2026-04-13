"use client";

import React from "react";

import { FAQ } from "@/components/ui/faq";
import ContactModal from "@/components/ui/contact-modal";

export default function InvestSalesClient() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const faqsQuestions = [
    {
      question: "How can I buy a building in Dubai as an investor?",
      answer:
        "To buy a building in Dubai, investors need to identify suitable properties, conduct due diligence, negotiate terms, and complete the transaction through the Dubai Land Department. Working with experienced real estate advisors ensures a smooth and secure acquisition process.",
    },
    {
      question: "Is Dubai a profitable market for building investments?",
      answer:
        "Dubai is one of the most profitable real estate markets globally, offering high rental yields, tax-free income, and strong capital appreciation, making it highly attractive for building investors.",
    },
    {
      question:
        "What types of buildings generate the highest returns in Dubai?",
      answer:
        "Commercial buildings, fully leased residential buildings, and mixed-use developments typically generate the highest returns due to consistent rental income and high occupancy rates.",
    },
    {
      question:
        "What should investors check before buying a building in Dubai?",
      answer:
        "Investors should evaluate the building’s legal status, ownership, occupancy rate, rental income, location demand, and overall market value to ensure a safe and profitable investment.",
    },
    {
      question:
        "Why should I use a real estate expert for building acquisition in Dubai?",
      answer:
        "A real estate expert provides access to off-market opportunities, accurate market insights, professional negotiation, and complete due diligence support, helping investors maximize returns and minimize risks.",
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
              "url('/services/Investment Sales and Acquisition services .webp')",
          }}
          role="img"
          aria-label="Buy Buildings In Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Investment Sales and Acquisition services
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div>
          <div className="p-6">
            <h3 className="tracking-widest font-medium text-[24px]">
              Investment Sales and Acquisition services
            </h3>
            <div className="space-y-4">
              <p className="tracking-wider text-gray-700 ">
                Dubai Buildings has established itself as a partner of one of
                the UAE’s most dominant real estate agencies. Our successful
                track record has earned us an expansive network of property
                owners, real estate developers, occupiers, operators, and
                institutional investors.
              </p>

              <p className="tracking-wider text-gray-700 ">
                The Investment Sales and Acquisitions team at
                Dubai-Buildings.com is a market leader. We provide our clients
                with a full spectrum of services to source the best investment
                opportunities in the market. We leverage our partnership with
                one of the leading real estate agencies in the UAE to provide
                our clients with accurate and up to date information for
                data-backed decision making.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>Our Investment Sales and Acquisitions services include:</p>
                <ul className="list-disc pl-4">
                  {[
                    "Acquisitions and Disposals",
                    "Strategic Consulting",
                    "Tailored Market Research & Analysis",
                    "Competitor Analysis",
                    "Feasibility Studies",
                    "Portfolio Planning",
                    "Deal Structuring and Due Diligence",
                    "Contract Negotiation",
                    "Pricing Strategy",
                    "Bespoke Marketing Campaigns",
                    "Sourcing of Investment Opportunities",
                    "Sourcing of Corporate Occupiers",
                    "Liaison Services",
                  ].map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>

              <div className="text-gray-700 space-y-1">
                <p>
                  Our Investment Sales and Acquisitions team operate in the
                  following sectors:
                </p>
                <ul className="list-disc pl-4 ">
                  <li>Residential</li>
                  <li>Industrial & Logistics</li>
                  <li>Education</li>
                  <li>Healthcare</li>
                  <li>Office</li>
                  <li>Hospitality</li>
                  <li>Retail</li>
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
              Explore verified building investment opportunities in Dubai with
              expert acquisition, advisory, and market analysis services.
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
