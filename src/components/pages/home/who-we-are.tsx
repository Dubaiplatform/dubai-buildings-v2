import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="section-padding bg-white">
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-16">
        <div className="h-px w-12 bg-black" />
        <span className="text-xs tracking-[0.25em] uppercase text-black font-medium">
          Our Story
        </span>
      </div>

      <div className="space-y-0 divide-y divide-gray-100">
        {/* Who Are We */}
        <div className="flex flex-col md:flex-row items-stretch gap-0 pb-20">
          {/* Image */}
          <div className="w-full md:w-[45%] relative h-[320px] md:h-[500px] overflow-hidden">
            <Image
              alt="Dubai Building"
              src="/home/home.webp"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle corner accent */}
            <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-black opacity-80" />
          </div>

          {/* Text */}
          <div className="w-full md:w-[55%] flex flex-col justify-center px-0 md:pl-16 lg:pl-24 pt-10 md:pt-0 space-y-6">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-medium">
              01 — Identity
            </span>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight">
              Who are we?
            </h3>

            <p className="text-gray-500 leading-relaxed text-[15px] max-w-md">
              Dubai Buildings is the premier Business-to-Business real estate
              service provider in Dubai. We understand the challenges
              institutional investors, developers, and corporate occupiers face
              when searching for a reliable partner — and we are committed to
              leading the market to a higher standard.
            </p>
            <div className="pt-4">
              <span className="text-xs tracking-widest uppercase text-gray-300 border-b border-gray-200 pb-1">
                Est. Dubai, UAE
              </span>
            </div>
          </div>
        </div>

        {/* Why Are We Best */}
        <div className="flex flex-col md:flex-row-reverse items-stretch gap-0 pt-20">
          {/* Image */}
          <div className="w-full md:w-[45%] relative h-[320px] md:h-[500px] overflow-hidden">
            <Image
              alt="Dubai Building"
              src="/home/home.webp"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle corner accent — mirrored */}
            <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 black opacity-80" />
          </div>

          {/* Text */}
          <div className="w-full md:w-[55%] flex flex-col justify-center px-0 md:pr-16 lg:pr-24 pt-10 md:pt-0 space-y-6">
            <span className="text-[11px] tracking-[0.3em] uppercase text-gray-400 font-medium">
              02 — Excellence
            </span>
            <h3 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight">
              Why are we best <br />
              in business?
            </h3>

            <p className="text-gray-500 leading-relaxed text-[15px] max-w-md">
              We simplify the process of sourcing properties and clients,
              tailoring solutions that serve each client's interests. Rather
              than navigating hundreds of inaccurate listings or unreliable
              agents, Dubai Buildings delivers a professional, efficient,
              client-focused process — ensuring a smooth transaction from start
              to finish.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div className="text-center">
                <div
                  className="text-2xl font-light text-gray-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  500+
                </div>
                <div className="text-[10px] tracking-widest uppercase text-gray-400 mt-1">
                  Transactions
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div
                  className="text-2xl font-light text-gray-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  15+
                </div>
                <div className="text-[10px] tracking-widest uppercase text-gray-400 mt-1">
                  Years Experience
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <div
                  className="text-2xl font-light text-gray-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  98%
                </div>
                <div className="text-[10px] tracking-widest uppercase text-gray-400 mt-1">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
