"use client";
import Link from "next/link";
import ExpandableCopy from "@/components/ui/expandable-copy";

import BuySellForm from "@/components/form/contact-form";
import { FAQ } from "@/components/ui/faq";
import { buyFaqs } from "./faqs";

export default function BuyClient() {
  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/buy/buy.webp')" }}
          role="img"
          aria-label="Buy Buildings In Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Buy Buildings In Dubai
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Text Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Find the building that best meets your investment goals.
          </h2>

          <ExpandableCopy
            intro={
              <p className="text-justify">
                Dubai has become one of the most attractive destinations for
                real estate investors worldwide, and many investors are actively
                looking to buy buildings in Dubai as part of their long-term
                investment strategy. The city offers a strong economy, a
                business-friendly environment, and a rapidly growing real estate
                market that continues to attract both local and international
                investors. Dubai Buildings works only on whole buildings, so
                every opportunity we present is an entire asset rather than a
                single unit.
              </p>
            }
            more={
              <>
                <p className="text-justify">
                  One of the biggest advantages for investors who want to buy
                  buildings in Dubai is the tax-efficient investment
                  environment. Dubai does not impose annual property taxes or
                  capital gains taxes, which makes property ownership highly
                  profitable compared to many other global cities. In addition,
                  Dubai&apos;s population continues to grow as professionals,
                  entrepreneurs, and multinational companies relocate to the
                  city. This consistent growth increases the demand for
                  residential and commercial properties, making it an ideal time
                  to buy buildings in Dubai for investors seeking strong rental
                  yields and long-term capital appreciation.
                </p>

                <p className="text-justify">
                  Investors who choose to buy buildings in Dubai gain access to
                  a wide variety of property types across different budgets,
                  communities, and investment structures. Opportunities include
                  residential apartment buildings, commercial office buildings,
                  mixed-use developments, and fully leased income-generating
                  properties. Residential buildings are particularly attractive
                  because the city&apos;s growing population creates consistent
                  demand for rental housing. Many investors prefer to buy
                  residential buildings in Dubai because they provide steady
                  rental income and strong occupancy rates. Our{" "}
                  <Link
                    href="/services/residential-investment/"
                    className="underline"
                  >
                    residential investment
                  </Link>{" "}
                  team tracks these assets building by building.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  How Dubai Buildings sources buildings for sale
                </h3>

                <p className="text-justify">
                  Most whole buildings in Dubai never appear on consumer
                  property portals. Owners of income-producing towers prefer a
                  quiet sale to a pre-qualified buyer, and that is where our{" "}
                  <Link
                    href="/services/investment-sales-acquisition-services/"
                    className="underline"
                  >
                    investment sales and acquisition
                  </Link>{" "}
                  team adds the most value. Every acquisition mandate starts
                  with a written brief covering location, asset class, lot size,
                  target yield, and holding period. We then source matching
                  buildings from landlords, developers, banks, and family
                  offices in our network, including off-market assets that are
                  not publicly advertised.
                </p>

                <p className="text-justify">
                  Each shortlisted building is reviewed before it reaches you.
                  We collect the title deed, the Ejari-registered tenancy
                  schedule, service charge history, and recent operating
                  accounts, and we verify occupancy and rent roll against the
                  actual contracts. This means investors who buy buildings in
                  Dubai through us are comparing verified numbers rather than
                  marketing figures, and the time between first viewing and
                  signed memorandum of understanding is far shorter.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  What to check before you buy a building in Dubai
                </h3>

                <p className="text-justify">
                  Buying a whole building is different from buying an
                  apartment. Beyond the purchase price, investors should
                  examine the building&apos;s net operating income, the quality
                  and length of the leases in place, outstanding service charge
                  or utility liabilities, the age of the mechanical and
                  electrical systems, and any Dubai Municipality or civil
                  defence compliance items. Freehold and leasehold status,
                  plot usage, and whether the building sits in a designated
                  freehold area for foreign ownership all affect what a given
                  buyer can acquire. We walk through each of these points with
                  you and bring in legal, technical, and valuation specialists
                  where needed.
                </p>

                <p className="text-justify">
                  For investors buying with a view to repositioning or
                  redeveloping an asset, our{" "}
                  <Link
                    href="/services/land-development-consultancy/"
                    className="underline"
                  >
                    land and development consultancy
                  </Link>{" "}
                  team models the alternative uses, while our{" "}
                  <Link href="/services/asset-management/" className="underline">
                    asset management
                  </Link>{" "}
                  team can take over leasing, rent collection, and reporting
                  from the day of transfer so the building performs from the
                  start.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  The acquisition process, from mandate to transfer
                </h3>

                <p className="text-justify">
                  Once a building is selected, we support the negotiation of
                  price and terms, the memorandum of understanding, and the
                  deposit. During due diligence we coordinate the technical
                  inspection, the legal review of tenancy contracts, and any
                  lender requirements. Transfer takes place at the Dubai Land
                  Department, where the 4 percent transfer fee and registration
                  are settled and the title deed is issued in the buyer&apos;s
                  name or that of the buyer&apos;s holding company. We remain
                  involved through handover of tenants, deposits, and building
                  documentation.
                </p>

                <p className="text-justify">
                  If you are ready to buy a building in Dubai, share your
                  requirement below. Investors looking at other strategies can
                  also explore how we{" "}
                  <Link href="/sell-building-dubai/" className="underline">
                    sell buildings
                  </Link>
                  ,{" "}
                  <Link href="/lease-buildings-dubai/" className="underline">
                    lease buildings
                  </Link>{" "}
                  and{" "}
                  <Link href="/build/" className="underline">
                    develop buildings
                  </Link>{" "}
                  for institutional clients across Dubai.
                </p>
              </>
            }
          />
        </div>
      </section>

      <section id="contact-form" className="bg-black py-20">
        <div className="text-center text-white">
          <h2 className="md:text-5xl sm:text-xl text-xl">
            Share your basic information
          </h2>
          <p>
            Share your requirement with our Professional, Reliable and Efficient
            team
          </p>
        </div>
        <BuySellForm mode="buy" />
      </section>

      <section className="relative h-[50vh] sm:h-[60vh] w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/buy/buy1.webp')" }}
          role="img"
          aria-label="Investment building for sale in Dubai"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
              Buy Buildings in Dubai – Exclusive Building Investment
              Opportunities
            </h2>
          </div>
        </div>
      </section>

      <FAQ questions={buyFaqs} />
    </main>
  );
}
