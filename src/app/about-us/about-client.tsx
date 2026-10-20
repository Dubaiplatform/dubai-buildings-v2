"use client";

import Link from "next/link";
import Image from "next/image";

import { FAQ } from "@/components/ui/faq";
import StatsSection from "@/components/pages/home/stats-section";
import { NAP } from "@/lib/seo";
import { aboutFaqs } from "./faqs";

const sectors = [
  "Residential apartment buildings and villa compounds",
  "Grade A and Grade B office buildings",
  "Hotels, hotel apartments and serviced residences",
  "Hospitals, clinics and medical centres",
  "Schools, nurseries and university campuses",
  "Retail, showrooms and mixed-use developments",
  "Warehouses, industrial and logistics facilities",
  "Development land and plots",
];

export default function About() {
  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/about.webp')" }}
          role="img"
          aria-label="Dubai Buildings office on Sheikh Zayed Road, Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            About Dubai Buildings
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <article className="max-w-3xl mx-auto space-y-10 tracking-wide text-gray-700">
          {/* Who we are */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Who we are
            </h2>
            <p className="text-justify">
              Dubai Buildings is a business-to-business real estate brokerage
              and advisory firm based in Dubai, United Arab Emirates. We work
              exclusively on whole buildings. Where a conventional agency
              markets individual apartments, offices and shops, Dubai Buildings
              acts for the owners, investors, developers and corporate occupiers
              who need to buy, sell, lease or develop an entire asset. Our
              office is at {NAP.streetAddress}, Dubai, and our team serves
              clients across Dubai and the wider UAE.
            </p>
            <p className="text-justify">
              We understand the challenges businesses face when searching for a
              reliable partner to support their real estate requirements in
              Dubai&apos;s fast-moving market. Instead of spending time browsing
              hundreds of inaccurate property listings or dealing with
              unreliable agents, our clients receive verified opportunities,
              market insight and strategic guidance from a team that has
              reviewed, evaluated and vetted more than 100 buildings and has
              been involved in real estate transactions worth over AED 5
              billion.
            </p>
          </div>

          {/* What we do */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              What we do
            </h2>
            <p className="text-justify">
              Our work falls into four mandates. Investors engage us to{" "}
              <Link href="/buy-buildings-dubai/" className="underline">
                buy buildings in Dubai
              </Link>
              , from fully leased income-producing towers to value-add and
              redevelopment opportunities, many of which are sourced off
              market. Owners ask us to{" "}
              <Link href="/sell-building-dubai/" className="underline">
                sell their building
              </Link>{" "}
              through targeted, often confidential, disposals to a
              pre-qualified pool of institutional and private buyers.
              Corporate tenants and landlords use us to{" "}
              <Link href="/lease-buildings-dubai/" className="underline">
                lease whole buildings
              </Link>
              , and developers and landowners work with our consultancy team to{" "}
              <Link href="/build/" className="underline">
                develop buildings
              </Link>{" "}
              that match market demand.
            </p>
            <p className="text-justify">
              Supporting these mandates is a full set of{" "}
              <Link href="/services/" className="underline">
                advisory services
              </Link>
              : investment sales and acquisitions, commercial agency,
              residential investment, land and development consultancy,
              hospitality, healthcare and education development consultancy,
              industrial and logistics investments, and asset management for
              buildings once they are owned or let. Our asset management team
              currently looks after more than 4,000 units across the UAE.
            </p>
          </div>

          {/* Sectors */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Building types we work with
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-left">
              {sectors.map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
          </div>

          {/* How we work */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              How we work
            </h2>
            <p className="text-justify">
              Every engagement starts with a written brief: the asset class,
              location, size, budget or target yield, and the timeline. From
              there our team sources matching buildings or counterparties from
              a network built over years of working alongside one of the
              UAE&apos;s largest licensed real estate agencies, with more than
              100 agents active in the residential and commercial markets every
              day. That network gives us a live view of pricing, demand and
              upcoming availability that is not visible on public portals.
            </p>
            <p className="text-justify">
              Before any opportunity is presented, we verify it. Title deeds,
              Ejari-registered tenancy schedules, service charge statements,
              completion certificates and operating accounts are collected and
              checked so that clients make decisions on real numbers. We then
              support negotiation, due diligence and the transfer or lease
              registration at the Dubai Land Department, and we stay involved
              through handover. Clients who prefer a single point of contact
              for the life of the asset can move straight into our asset
              management service after completion.
            </p>
          </div>

          {/* Office */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Our office
            </h2>
            <div className="relative w-full h-[260px] md:h-[420px] overflow-hidden">
              <Image
                src="/about.webp"
                alt="Dubai Buildings office, Al Saqr Business Tower, Sheikh Zayed Road"
                fill
                className="object-cover"
              />
            </div>
            <address className="not-italic space-y-1">
              <p className="font-medium text-gray-900">Dubai Buildings</p>
              <p>{NAP.streetAddress}</p>
              <p>{NAP.addressLocality}, United Arab Emirates</p>
              <p>
                Phone:{" "}
                <a href={`tel:${NAP.telephone}`} className="underline">
                  {NAP.telephoneDisplay}
                </a>{" "}
                | Mobile and WhatsApp:{" "}
                <a href={NAP.whatsappUrl} className="underline">
                  {NAP.mobileDisplay}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${NAP.email}`} className="underline">
                  {NAP.email}
                </a>
              </p>
            </address>
            <p className="text-justify">
              To discuss a building you own, an acquisition you are planning or
              a space you need to occupy,{" "}
              <Link href="/contact-us/" className="underline">
                contact the Dubai Buildings team
              </Link>
              .
            </p>
          </div>
        </article>
      </section>

      <StatsSection />

      <section className="relative h-[50vh] sm:h-[60vh]  w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/lease/lease2.webp')" }}
          role="img"
          aria-label="Commercial buildings in Dubai"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
              Dubai Buildings is a premier business-to-business real estate
              service provider in Dubai
            </h2>
          </div>
        </div>
      </section>

      <FAQ questions={aboutFaqs} />
    </main>
  );
}
