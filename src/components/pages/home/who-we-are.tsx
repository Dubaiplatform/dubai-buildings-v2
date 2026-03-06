"use client";

import React from "react";
import Image from "next/image";
import ContactModal from "@/components/ui/contact-modal";

export default function WhoWeAre() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section className="section-padding bg-white">
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
          </div>

          {/* Text */}
          <div className="w-full md:w-[55%] flex flex-col justify-center px-0 md:pl-16 lg:pl-24 pt-10 md:pt-0 space-y-6">
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

            <div className=" mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="border px-4 py-3 bg-black hover:bg-black/90 text-white"
              >
                Learn More
              </button>
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
          </div>

          {/* Text */}
          <div className="w-full md:w-[55%] flex flex-col justify-center px-0 md:pr-16 lg:pr-24 pt-10 md:pt-0 space-y-6">
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
            <div className=" mt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="border px-4 py-3 bg-black hover:bg-black/90 text-white"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
