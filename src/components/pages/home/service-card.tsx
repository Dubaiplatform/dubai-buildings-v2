"use client";

import { useEffect, useRef, useState } from "react";
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
  const outerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animDir, setAnimDir] = useState<"up" | "down">("up");
  const [displayed, setDisplayed] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const lastIndex = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const outer = outerRef.current;
      if (!outer) return;

      const { top, height } = outer.getBoundingClientRect();
      const vh = window.innerHeight;

      const scrollableDistance = height - vh;
      if (scrollableDistance <= 0) return;

      const scrolled = -top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      const newIndex = Math.min(
        cards.length - 1,
        Math.floor(progress * cards.length),
      );

      if (newIndex !== lastIndex.current) {
        const dir = newIndex > lastIndex.current ? "down" : "up";
        lastIndex.current = newIndex;
        setAnimDir(dir);
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (activeIndex === displayed) return;
    setTransitioning(true);
    const timeout = setTimeout(() => {
      setDisplayed(activeIndex);
      setTransitioning(false);
    }, 350);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const Icon = cards[displayed].icon;

  return (
    <>
      {/* ================= MOBILE ================= */}
      <section className="md:hidden section-padding bg-black text-white space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-thin leading-tight">
            Expert Commercial Real Estate Services in Dubai
          </h2>

          <p className="text-lg">
            Helping investors and businesses find the right property
            opportunities.
          </p>

          <p className="text-gray-400">
            Dubai Buildings connects investors, developers, and corporate
            tenants with premium commercial properties across Dubai.
          </p>
        </div>

        <div className="space-y-6">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                <div className="relative z-10 space-y-4">
                  <h3 className="text-4xl">{card.number}</h3>

                  <h2 className="text-2xl">{card.title}</h2>

                  <p className="text-gray-400">{card.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= DESKTOP ================= */}
      <div
        ref={outerRef}
        style={{ height: `${cards.length * 100}vh` }}
        className="relative hidden md:block"
      >
        <div className="sticky top-5 h-screen -mt-20 md:rounded-t-[60px] sm:rounded-t-[30px] rounded-t-[30px] bg-black overflow-hidden">
          <div className="section-padding h-full flex flex-col md:flex-row gap-8 md:gap-6">
            {/* Left */}
            <div className="flex flex-col justify-between text-white w-full md:w-1/2">
              <div className="space-y-3">
                <h2 className="text-6xl font-thin leading-tight">
                  Expert Commercial Real Estate Services in Dubai
                </h2>

                <p className="text-3xl leading-snug">
                  Helping investors and businesses find the right property
                  opportunities.
                </p>
              </div>

              <p className="text-2xl leading-snug">
                Dubai Buildings connects investors, developers, and corporate
                tenants with premium commercial properties across Dubai.
              </p>
            </div>

            {/* Right */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              {/* Progress */}
              <div className="flex flex-col gap-2 mr-4 shrink-0">
                {cards.map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 rounded-full transition-all duration-500"
                    style={{
                      height: i === activeIndex ? "32px" : "8px",
                      background:
                        i === activeIndex ? "white" : "rgba(255,255,255,0.25)",
                    }}
                  />
                ))}
              </div>

              {/* Card */}
              <div
                style={{
                  opacity: transitioning ? 0 : 1,
                  transform: transitioning
                    ? animDir === "down"
                      ? "translateY(40px) scale(0.96)"
                      : "translateY(-40px) scale(0.96)"
                    : "translateY(0px) scale(1)",
                  transition:
                    "opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)",
                }}
                className="relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded w-full h-[40vh]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

                <div className="relative z-10 space-y-5 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-white text-5xl">
                      {cards[displayed].number}
                    </h3>
                  </div>

                  <div>
                    <h2 className="text-6xl text-white tracking-wide">
                      {cards[displayed].title}
                    </h2>

                    <p className="text-gray-400 text-xl">
                      {cards[displayed].subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
