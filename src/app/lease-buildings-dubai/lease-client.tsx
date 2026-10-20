"use client";
import Link from "next/link";
import ExpandableCopy from "@/components/ui/expandable-copy";

import BuySellForm from "@/components/form/contact-form";
import { FAQ } from "@/components/ui/faq";
import { leaseFaqs } from "./faqs";

export default function LeaseClient() {


  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/lease/lease.webp')" }}
          role="img"
          aria-label="Lease Buildings in Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Lease Buildings in Dubai
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Text Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Find the building that best fits your requirements.
          </h2>

          <ExpandableCopy
            intro={
              <p className="text-justify">
                Dubai has become one of the world&apos;s leading business and
                hospitality hubs, attracting international companies, hotel
                operators, and corporate tenants looking for strategic
                locations to expand their operations. As the demand for
                commercial space continues to grow, many businesses are
                searching to lease buildings in Dubai that meet their
                operational requirements and long-term growth plans. Dubai
                Buildings acts for both tenants looking for a whole building
                and landlords looking for a reliable occupier.
              </p>
            }
            more={
              <>
                <p className="text-justify">
                  Whether a company needs a full building for hospitality,
                  corporate headquarters, or mixed-use operations, Dubai offers
                  a wide range of opportunities across prime locations. Our
                  team specializes in helping businesses lease buildings in
                  Dubai by identifying properties that align with their
                  business goals, location preferences, and budget. With
                  extensive market knowledge and industry experience, we help
                  tenants navigate the process efficiently while ensuring they
                  secure the most suitable building for their operations.
                </p>

                <p className="text-justify">
                  Finding the right property can be challenging, especially for
                  businesses with specific operational needs. Companies looking
                  to lease buildings in Dubai often require buildings that meet
                  strict criteria such as location accessibility, building
                  size, infrastructure quality, and proximity to key commercial
                  districts. Over the years, our{" "}
                  <Link href="/services/commercial-agency/" className="underline">
                    commercial agency
                  </Link>{" "}
                  team has assisted thousands of tenants, including world-class
                  hotel and hospitality brands, in securing the right buildings
                  across Dubai.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  For tenants: leasing a whole building in Dubai
                </h3>

                <p className="text-justify">
                  Through our strong industry connections and market expertise,
                  we provide tenants with access to exclusive opportunities
                  that are not always publicly listed. This gives businesses a
                  significant advantage when they are looking to lease
                  buildings in Dubai, allowing them to identify suitable
                  properties before they become widely available in the market.
                  A typical tenant mandate covers the required built-up area,
                  parking, power and cooling capacity, permitted use under the
                  plot zoning, and the preferred districts, from Sheikh Zayed
                  Road and Business Bay to Dubai South and the free zones.
                </p>

                <p className="text-justify">
                  We then shortlist buildings, arrange inspections, and
                  negotiate the heads of terms: rent, lease length, rent-free
                  and fit-out periods, renewal options, and the split of
                  maintenance responsibilities. Hotel operators work with our{" "}
                  <Link
                    href="/services/hospitality-development-consultancy/"
                    className="underline"
                  >
                    hospitality
                  </Link>{" "}
                  specialists, while schools and clinics draw on our{" "}
                  <Link
                    href="/services/education-development-consultancy/"
                    className="underline"
                  >
                    education
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/healthcare-development/"
                    className="underline"
                  >
                    healthcare
                  </Link>{" "}
                  teams to confirm that a building can be licensed for the
                  intended use before any lease is signed.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  For landlords: sourcing the best tenant for your building
                </h3>

                <p className="text-justify">
                  Landlords with a vacant or soon-to-be-vacant building want a
                  single, creditworthy occupier on a long lease rather than
                  dozens of individual tenancies. Dubai Buildings markets whole
                  buildings directly to corporate occupiers, hotel and
                  serviced-apartment operators, staff accommodation providers,
                  education and healthcare groups, and logistics companies. We
                  pre-qualify each candidate for covenant strength and trade
                  licence status so that only serious tenants reach the
                  negotiating table.
                </p>

                <p className="text-justify">
                  Once the lease is agreed we register it with Ejari, coordinate
                  handover, and can continue to look after the building through
                  our{" "}
                  <Link href="/services/asset-management/" className="underline">
                    asset management
                  </Link>{" "}
                  service, covering rent collection, service charges,
                  maintenance contractors, and periodic reporting to the owner.
                  Landlords who would rather exit the asset can also ask us to{" "}
                  <Link href="/sell-building-dubai/" className="underline">
                    sell the building
                  </Link>{" "}
                  to an investor, often with the new lease in place to support
                  the price.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  Lease structures for whole buildings in Dubai
                </h3>

                <p className="text-justify">
                  Whole-building leases in Dubai usually run from three to ten
                  years, and longer for hotel, school and hospital operators
                  who are investing heavily in fit-out. Rent is typically
                  quoted as an annual figure paid by post-dated cheques, with
                  the number of cheques, the rent-free period and the annual
                  escalation all negotiable. Landlords may lease the building
                  as a bare shell, with core and shell plus central services,
                  or fully fitted. Our team explains the implications of each
                  structure, from who maintains the chillers and lifts to how
                  service charges and municipality fees are treated, so both
                  parties sign a lease that will still work in year seven.
                </p>

                <h3 className="text-xl font-semibold text-left pt-4">
                  Why lease through Dubai Buildings
                </h3>

                <p className="text-justify">
                  Whole-building leases in Dubai are commercial agreements with
                  long terms and significant fit-out investment on both sides,
                  so the quality of the match matters more than the speed of
                  the first viewing. Our team brings verified building
                  information, a pre-qualified pool of occupiers and landlords,
                  and experience of the lease structures used by institutional
                  owners in the UAE. Share your requirement below, whether you
                  are a tenant searching for a building or an owner looking for
                  a tenant, and we will come back with a shortlist.
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
        <BuySellForm mode="lease" />
      </section>

      <section className="relative h-[50vh] sm:h-[60vh]  w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/lease/lease2.webp')" }}
          role="img"
          aria-label="Building for lease in Dubai"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h2 className="text-lg sm:text-3xl lg:text-4xl font-light text-white mb-4">
              Lease Buildings in Dubai with Access to Corporate Tenants
            </h2>
          </div>
        </div>
      </section>

      <FAQ questions={leaseFaqs} />
    </main>
  );
}
