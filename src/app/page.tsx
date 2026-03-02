import Image from "next/image";
import { Briefcase, Zap, Users } from "lucide-react";

import StatsSection from "@/components/pages/home/stats-section";
import Hero from "@/components/pages/home/hero";

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

      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {card?.map((item, index: number) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-10 border border-gray-200 hover:shadow-xl transition duration-300 text-center group"
              >
                <div className="flex justify-center mb-6">
                  <Icon
                    size={40}
                    className="text-black group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <h2 className="text-xl font-semibold mb-4">{item?.title}</h2>

                <p className="text-gray-600">{item?.subtitle}</p>
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

      <StatsSection />
    </main>
  );
}
