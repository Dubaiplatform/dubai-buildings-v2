import Image from "next/image";
import { Briefcase, Zap, Users } from "lucide-react";

import StatsSection from "@/components/pages/home/stats-section";
import Hero from "@/components/pages/home/hero";
import Form from "@/components/form";

export default function Home() {
  const card = [
    {
      icon: Briefcase,
      title: "Professional",
      subtitle:
        "We are committed to providing professional real estate services.",
    },
    {
      icon: Zap,
      title: "Efficient",
      subtitle:
        "We work diligently to provide a turnkey solution from start to finish.",
    },
    {
      icon: Users,
      title: "Client Focused",
      subtitle: "Our client’s interests are our top priority.",
    },
  ];

  return (
    <main>
      <Hero />

      <section className="section-padding bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {card?.map((item, index: number) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative group overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                {/* Gradient Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#C9A227]/20 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative z-10 text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#C9A227]/10 group-hover:bg-[#C9A227]/20 transition">
                      <Icon
                        size={32}
                        className="text-[#C9A227] group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold text-white tracking-wide">
                    {item?.title}
                  </h2>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item?.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-padding space-y-20">
        {/* Who Are We */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px]">
            <Image
              alt="Dubai Building"
              src="/home/home.webp"
              fill
              className="object-cover "
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-semibold">Who are we?</h3>

            <p className="text-gray-600 leading-relaxed">
              Dubai Buildings is the premier Business-to-Business real estate
              service provider in Dubai. We understand the challenges
              institutional investors, developers, and corporate occupiers face
              when searching for a reliable partner to assist with their real
              estate requirements and are committed to leading the market to a
              higher standard.
            </p>
          </div>
        </div>

        {/* Why Are We Best */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px]">
            <Image
              alt="Dubai Building"
              src="/home/home.webp"
              fill
              className="object-cover "
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-semibold">
              Why are we best in business?
            </h3>

            <p className="text-gray-600 leading-relaxed">
              We simplify the process of sourcing properties and clients. We
              tailor solutions to ensure the best match for our clients’
              interests. Rather than going through hundreds of inaccurate
              property listings online or dealing with unreliable agents, Dubai
              Buildings offers a professional, efficient, and client-focused
              process to ensure a smooth transaction from start to finish.
            </p>
          </div>
        </div>
      </section>

      <Form />

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2089.605073639069!2d55.27968006320636!3d25.215158870386873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f428c4b20d9c1%3A0xda2a93cfee3dee03!2sAl%20Saqr%20Business%20Tower!5e1!3m2!1sen!2sae!4v1772597748749!5m2!1sen!2sae"
          className="w-full h-[550px] border-0"
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
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
              Golden mashrabiyas encase majestic architectural dimensions to
              create blissfully shaded interiors against the azure backdrop of
              the Arabian sky
            </h2>
          </div>
        </div>
      </section>

      <StatsSection />
    </main>
  );
}
