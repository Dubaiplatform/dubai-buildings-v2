import StatsSection from "@/components/pages/home/stats-section";
import Hero from "@/components/pages/home/hero";
import Form from "@/components/form";
import ServiceCard from "@/components/pages/home/service-card";
import WhoWeAre from "@/components/pages/home/who-we-are";
import { FAQ } from "@/components/ui/faq";

export default function Home() {
  const faqsQuestions = [
    {
      question: "What does Dubai Buildings specialize in?",
      answer:
        "Dubai Buildings specializes in Business-to-Business real estate services, connecting investors, developers, landlords, and corporate occupiers with the right property opportunities across Dubai and the UAE.",
    },
    {
      question: "Who can benefit from Dubai Buildings services?",
      answer:
        "Our services are designed for institutional investors, property developers, landlords, corporate tenants, and businesses looking for reliable real estate advisory and transaction support.",
    },
    {
      question:
        "How does Dubai Buildings help clients find the right property?",
      answer:
        "We leverage our extensive industry network and market expertise to source verified properties and provide tailored solutions that align with each client’s investment or operational goals.",
    },
    {
      question:
        "Why should businesses choose Dubai Buildings instead of traditional agents?",
      answer:
        "Unlike traditional agents, Dubai Buildings focuses on a professional, data-driven approach. We provide accurate market insights, verified opportunities, and a streamlined process that saves time and reduces risk.",
    },
    {
      question:
        "What makes Dubai Buildings different in the Dubai real estate market?",
      answer:
        "Our deep market knowledge, strong network of industry professionals, and commitment to transparency allow us to deliver efficient, client-focused solutions and smooth real estate transactions.",
    },
  ];

  return (
    <main>
      <Hero />

      <ServiceCard />

      <WhoWeAre />

      <Form />

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
              Expert Real Estate Investment, Development Consultancy, Commercial
              Agency, and Asset Management Services in Dubai
            </h2>
          </div>
        </div>
      </section>

      <StatsSection />

      <FAQ questions={faqsQuestions} />
    </main>
  );
}
