"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type StatProps = {
  end: number;
  suffix?: string;
  label: string;
};

function Counter({ end, suffix = "+", label }: StatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center space-y-4">
      <h2 className="text-4xl md:text-6xl font-light text-white">
        {count}
        {suffix}
      </h2>
      <p className="text-lg md:text-2xl text-white/80 font-medium">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-black py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Top Description */}
        <p className="text-center text-white/70 text-lg md:text-xl">
          More than 100 buildings which have been reviewed, evaluated, and
          vetted by our team.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
          <Counter end={100} label="Buildings" />
          <Counter end={40} label="Institutional Clients" />
          <Counter end={20} label="Dedicated Professionals" />
          <Counter end={5} suffix=" Bn" label="Real Estate Transactions" />
        </div>
      </div>
    </section>
  );
}
