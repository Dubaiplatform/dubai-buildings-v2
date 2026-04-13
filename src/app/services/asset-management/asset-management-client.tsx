"use client";

import React from "react";

import { FAQ } from "@/components/ui/faq";
import ContactModal from "@/components/ui/contact-modal";

export default function AssetManagementClient() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const faqsQuestions = [
    {
      question: "What is real estate asset management in Dubai?",
      answer:
        "Real estate asset management in Dubai involves managing properties to maximize their value, income, and long-term performance through strategic planning, leasing, and financial oversight.",
    },
    {
      question: "What services are included in property asset management?",
      answer:
        "Services include rent collection, lease management, financial reporting, service charge management, maintenance coordination, and strategic asset planning.",
    },
    {
      question: "Why is asset management important for property owners?",
      answer:
        "Asset management ensures efficient operations, maximizes rental income, maintains property value, ensures legal compliance, and improves long-term investment returns.",
    },
    {
      question:
        "What types of properties can be managed under asset management?",
      answer:
        "Asset management services cover residential buildings, villa compounds, commercial towers, mixed-use developments, hotel apartments, and individual properties.",
    },
    {
      question: "How does asset management improve property returns in Dubai?",
      answer:
        "Asset management improves returns by optimizing occupancy rates, managing expenses, enhancing tenant retention, and implementing data-driven strategies for long-term growth.",
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
          aria-label="Asset Management"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Asset Management
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div>
          <div className="p-6">
            <h3 className="tracking-widest font-medium text-[24px]">
              Asset Management
            </h3>
            <div className="space-y-4">
              <p className="tracking-wider text-gray-700 ">
                Dubai Buildings provides property owners, developers, and
                occupiers with comprehensive asset management services. To
                ensure efficient operations, we provide objective advice and
                accurate reporting, while ensuring that all property regulations
                are enforced to protect our clients.
              </p>

              <p className="tracking-wider text-gray-700 ">
                By investing in our team and continuously developing innovative
                processes to maximize returns for our clients, we have grown to
                become one of the premier asset management companies in the UAE.
              </p>

              <p>
                Our portfolio of property under management includes residential
                apartment buildings in prestigious developments such as City
                Walk, Meydan, and Dubai Marina. Dubai-Buildings.com currently
                manages more than 4,000 units throughout the UAE.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>
                  Our Asset Management services cover the following sectors:
                </p>
                <ul className="list-disc pl-4">
                  {[
                    "Residential Buildings and Villa Compounds",
                    "Grade A Commercial Towers",
                    "Mixed-Use Developments",
                    "Hotel Apartments",
                    "Individual Property Management",
                  ].map((list, index) => (
                    <li key={index}>{list}</li>
                  ))}
                </ul>
              </div>

              <div className="text-gray-700 space-y-1">
                <p>Our Asset Management services include:</p>
                <ul className="list-disc pl-4">
                  {[
                    "Rent Collection",
                    "Service Charge Collection",
                    "Lease Management",
                    "Third Party Service Provider Management",
                    "Strategic Asset Management",
                    "Financial Management",
                    "Facilities Management Procurement",
                    "Health & Safety Compliance",
                    "Planned Preventative Maintenance Consultancy",
                    "Lease Documentation Review",
                    "Service Charge Consultancy",
                    "Operational Documentation Production",
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
              Expert real estate asset management in Dubai focused on maximizing
              property value, rental income, and long-term returns.
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
