const caseStudies = [
  {
    sector: "Residential",
    headline: "AED 120M residential building, Al Barsha",
    outcome:
      "Sourced off-market, closed in 6 weeks for an institutional buyer.",
  },
  {
    sector: "Office",
    headline: "AED 85M leased office asset, Business Bay",
    outcome:
      "Full due diligence and deal structuring for a regional family office.",
  },
  {
    sector: "Hospitality",
    headline: "AED 210M hotel asset, Jumeirah Beach Road",
    outcome:
      "Operator liaison and pricing strategy for a discreet disposal mandate.",
  },
  {
    sector: "Industrial & Logistics",
    headline: "AED 65M logistics facility, Dubai South",
    outcome:
      "Matched a corporate occupier with a long-lease income-generating warehouse.",
  },
  {
    sector: "Healthcare",
    headline: "AED 95M medical building, Al Quoz",
    outcome:
      "Feasibility support and acquisition advisory for a healthcare investor.",
  },
];

export default function CaseStudies() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900">
            Selected mandates
          </h2>
          <p className="text-gray-600 tracking-wide">
            Anonymized examples of whole-building transactions we have advised
            on across Dubai. Details are limited to protect client
            confidentiality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <article
              key={study.headline}
              className="border-t border-gray-300 pt-6 space-y-3"
            >
              <p className="text-xs tracking-[0.2em] uppercase text-gray-500">
                {study.sector}
              </p>
              <h3 className="text-xl font-medium text-gray-900 leading-snug">
                {study.headline}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {study.outcome}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
