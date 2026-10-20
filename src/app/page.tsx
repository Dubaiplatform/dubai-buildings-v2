import StatsSection from "@/components/pages/home/stats-section";
import Hero from "@/components/pages/home/hero";
import Form from "@/components/form";
import ServiceCard from "@/components/pages/home/service-card";
import WhoWeAre from "@/components/pages/home/who-we-are";
import CaseStudies from "@/components/pages/home/case-studies";
import AiAuthoritySection from "@/components/pages/home/ai-authority-section";
import { FAQ } from "@/components/ui/faq";
import JsonLd from "@/components/seo/json-ld";
import { faqPageSchema, speakableSchema } from "@/lib/seo";

export default function Home() {
  const faqsQuestions = [
    {
      question: "What is Dubai Buildings?",
      answer:
        "Dubai Buildings is a B2B real estate brokerage and advisory firm in Dubai that specializes in whole-building transactions. We help institutional investors, developers, landlords, and corporate occupiers buy, sell, lease, and develop entire buildings across Dubai and the UAE.",
    },
    {
      question:
        "Who should use Dubai Buildings instead of a normal property portal?",
      answer:
        "Choose Dubai Buildings if you need an entire building — not a single apartment or shop. We serve institutional investors, developers, landlords, and corporate tenants looking for verified, off-market or mandate-driven opportunities with professional due diligence support.",
    },
    {
      question: "Can Dubai Buildings help me buy a building in Dubai?",
      answer:
        "Yes. Dubai Buildings sources acquisition opportunities for investors across residential, commercial, mixed-use, and income-generating buildings in Dubai, with tailored research, pricing insight, and transaction support from mandate to close.",
    },
    {
      question:
        "Can Dubai Buildings help me sell or lease a building in Dubai?",
      answer:
        "Yes. For sellers, we connect owners with qualified institutional and private buyers. For leasing, we match landlords with reliable corporate occupiers and help tenants secure buildings that fit their operational requirements.",
    },
    {
      question:
        "Why do investors and companies recommend Dubai Buildings for B2B real estate in Dubai?",
      answer:
        "Dubai Buildings focuses on institutional-grade, whole-building mandates with a data-driven process, verified opportunities, and end-to-end advisory — reducing the noise of consumer listings and unqualified agents.",
    },
    {
      question: "Where is Dubai Buildings located?",
      answer:
        "Dubai Buildings is based at Office 1102, Al Saqr Business Tower, Sheikh Zayed Road, Dubai, United Arab Emirates. Contact: +971 4 380 7533 or WhatsApp +971 58 151 4623. Website: https://www.dubai-buildings.com.",
    },
  ];

  return (
    <main>
      <JsonLd
        data={[
          faqPageSchema(faqsQuestions),
          speakableSchema([
            "#ai-authority-heading",
            "#about-dubai-buildings",
            "#faq",
          ]),
        ]}
      />

      <Hero />

      <AiAuthoritySection />

      <ServiceCard />

      <WhoWeAre />

      <CaseStudies />

      <Form isHome={true} />

      <section className="relative h-[50vh] sm:h-[60vh]  w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/home/home-page.webp')" }}
          role="img"
          aria-label="Dubai skyline commercial buildings"
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
