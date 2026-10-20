"use client";
import Link from "next/link";
import ExpandableCopy from "@/components/ui/expandable-copy";

import { FAQ } from "@/components/ui/faq";
import { sellFaqs } from "./faqs";
import BuySellForm from "@/components/form/contact-form";

export default function SellClient() {


  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/sell/sell.webp')" }}
          role="img"
          aria-label="Sell Your Building in Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Sell Your Building in Dubai
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Text Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Source the best buyer for your building.
          </h2>

          <ExpandableCopy
            intro={
              <p className="text-justify">
                Selling a building in Dubai requires the right strategy, market
                knowledge, and access to qualified investors. Property owners
                who want to sell buildings in Dubai need a partner that
                understands the market and can connect them with serious
                buyers. Dubai Buildings specializes in sourcing the best buyer
                for each opportunity, ensuring that building owners receive
                maximum value for their assets.
              </p>
            }
            more={
              <>
                <p className="text-justify">
                  When clients decide to sell buildings in Dubai, they benefit
                  from our extensive network of investors, developers, and
                  institutional buyers actively looking for large-scale
                  property acquisitions. Over the years, we have built strong
                  relationships with qualified investors who are specifically
                  interested in acquiring residential, commercial, and
                  mixed-use buildings across Dubai. This network allows us to
                  efficiently match the right buyer with the right property,
                  making the process of selling buildings in Dubai smooth,
                  professional, and highly effective.
                </p>

                <p className="text-justify">
                  One of the key advantages of working with our team is our
                  proven track record of successfully closing high-value
                  transactions. We have facilitated numerous deals involving
                  buildings valued in excess of AED 100 million, demonstrating
                  our expertise in handling complex building acquisitions and
                  sales. Investors looking to{" "}
                  <Link href="/buy-buildings-dubai/" className="underline">
                    buy buildings in Dubai
                  </Link>{" "}
                  trust our process because we carefully present
                  well-structured opportunities that align with their
                  investment goals. This trust allows us to bring qualified
                  buyers to sellers who want to sell buildings in Dubai quickly
                  and efficiently.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  Valuing and positioning your building
                </h3>

                <p className="text-justify">
                  Our industry knowledge also helps us position each building
                  correctly within the market. Every building has unique
                  characteristics, including location, tenant profile, rental
                  income, and development potential. Before any marketing
                  begins, our{" "}
                  <Link
                    href="/services/investment-sales-acquisition-services/"
                    className="underline"
                  >
                    investment sales
                  </Link>{" "}
                  team prepares an opinion of value based on the net operating
                  income, comparable building sales, current yields for the
                  asset class, and any upside from vacant space, rent reviews,
                  or redevelopment. By understanding these factors, we can
                  target the right investors who are actively seeking
                  opportunities to buy buildings in Dubai, ensuring that
                  sellers reach the most relevant and financially capable
                  buyers.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  Preparing the building for sale
                </h3>

                <p className="text-justify">
                  Buyers of whole buildings move faster when the information is
                  ready. We assemble a sale pack containing the title deed and
                  affection plan, the full tenancy schedule with Ejari
                  registrations, service charge and utility statements, the
                  building completion certificate, and recent maintenance
                  records. Where a building is under-let or has deferred
                  maintenance, our{" "}
                  <Link href="/services/asset-management/" className="underline">
                    asset management
                  </Link>{" "}
                  team can advise on quick improvements that raise the
                  achievable price before the asset goes to market.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  Confidential and off-market disposals
                </h3>

                <p className="text-justify">
                  Many owners who sell buildings in Dubai do not want tenants,
                  staff, or competitors to know the asset is for sale. Dubai
                  Buildings runs confidential disposals where the building is
                  introduced only to a short list of pre-qualified investors
                  under a non-disclosure agreement. Interested parties receive
                  the sale pack, submit offers by a set date, and the owner
                  chooses between competing bids rather than negotiating with a
                  single buyer. This approach regularly achieves stronger
                  pricing than an open listing while protecting the
                  building&apos;s operations.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  Who buys whole buildings in Dubai
                </h3>

                <p className="text-justify">
                  The buyer pool for a whole building is narrower than for an
                  apartment but far better capitalised. Demand comes from UAE
                  and GCC family offices seeking stable rental income, real
                  estate funds and institutional investors building Dubai
                  portfolios, developers looking for redevelopment or
                  conversion sites, and owner-occupiers such as hotel groups,
                  schools and healthcare operators who want to control their
                  own premises. Dubai Buildings maintains active relationships
                  with each of these groups and knows which buyers are currently
                  funded and searching, so your building is shown to the
                  parties most likely to complete rather than to the widest
                  possible audience.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  From offer to transfer
                </h3>

                <p className="text-justify">
                  Once an offer is accepted we manage the memorandum of
                  understanding, the deposit, and the buyer&apos;s due diligence
                  period, coordinating access for technical inspections and
                  responding to legal queries on the tenancy contracts. We then
                  arrange the no-objection certificate from the developer where
                  required, settle any outstanding service charges, and attend
                  the transfer at the Dubai Land Department. Tenants, security
                  deposits, and building documentation are handed over on the
                  day of transfer so that the sale is complete for both sides.
                </p>

                <p className="text-justify">
                  Owners who are not ready to sell can also ask us to{" "}
                  <Link href="/lease-buildings-dubai/" className="underline">
                    lease the building
                  </Link>{" "}
                  to a corporate tenant or to review{" "}
                  <Link
                    href="/services/land-development-consultancy/"
                    className="underline"
                  >
                    development options
                  </Link>{" "}
                  for the plot. Share your building details below and a member
                  of the Dubai Buildings team will respond with an initial view
                  on value and the likely buyer pool.
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
        <BuySellForm mode="sell" />
      </section>

      <section className="relative h-[50vh] sm:h-[60vh]  w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/sell/sell2.webp')" }}
          role="img"
          aria-label="Building for sale in Dubai"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
              Sell Your Building in Dubai to Qualified Investors
            </h2>
          </div>
        </div>
      </section>

      <FAQ questions={sellFaqs} />
    </main>
  );
}
