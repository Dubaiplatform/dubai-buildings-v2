"use client";

import { Briefcase, Zap, Users } from "lucide-react";

const cards = [
  {
    icon: Briefcase,
    number: "01",
    title: "Professional",
    subtitle:
      "We are committed to providing professional real estate services.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Efficient",
    subtitle:
      "We work diligently to provide a turnkey solution from start to finish.",
  },
  {
    icon: Users,
    number: "03",
    title: "Client Focused",
    subtitle: "Our client's interests are our top priority.",
  },
];

export default function ServiceCard() {
  return (
    <section className="section-padding bg-black text-white">
      <div className="flex flex-col md:flex-row gap-8 md:gap-6">
        {/* Left */}
        <div className="flex flex-col justify-between text-white w-full md:w-1/2 space-y-6">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-6xl font-thin leading-tight">
              Expert Commercial Real Estate Services in Dubai
            </h2>
            <p className="text-xl md:text-3xl leading-snug">
              Helping investors and businesses find the right property
              opportunities.
            </p>
          </div>
          <p className="text-lg md:text-2xl leading-snug text-gray-400">
            Dubai Buildings connects investors, developers, and corporate
            tenants with premium commercial properties across Dubai.
          </p>
        </div>

        {/* Right — 3 cards */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                <div className="relative z-10 flex items-start gap-6">
                  <h3 className="text-white text-3xl font-thin shrink-0">
                    {card.number}
                  </h3>
                  <div>
                    <h2 className="text-2xl text-white tracking-wide mb-1">
                      {card.title}
                    </h2>
                    <p className="text-gray-400 text-sm">{card.subtitle}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
