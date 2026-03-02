import Image from "next/image";

export default function WhyInvestClient() {
  return (
    <main>
      <section className="relative w-full h-[35vh]">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px]  font-light text-center">
            Our Services
          </h1>
        </div>
      </section>

      <div className="">
        {/* IMAGE */}
        <div className="flex md:flex-row sm:flex-col flex-col justify-center items-center">
          <div className="bg-[#E8EBEA] flex justify-center items-center md:p-20 sm:p-5 p-5 md:h-[70vh]  sm:h-[50vh] h-[50vh] md:w-[50%] sm:w-full w-full">
            <div className="relative w-full h-full">
              <Image
                src="/home/home.webp"
                alt="UAE Currency"
                fill
                className="object-cover"
                // sizes="160px"
                priority
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-4 md:px-40 sm:px-20 px-5 md:mt-0 sm:mt-4 mt-4 md:w-[50%] sm:w-full w-full">
            <h3 className="tracking-widest font-medium text-[24px]">
              Investment Sales and Acquisition services
            </h3>
            <div className="space-y-4">
              <p className="tracking-wider text-gray-700 ">
                Dubai-Buildings.com has established itself as a partner of one
                of the UAE’s most dominant real estate agencies. Our successful
                track record has earned us an expansive network of property
                owners, real estate developers, occupiers, operators, and
                institutional investors.
              </p>

              <p className="tracking-wider text-gray-700 ">
                The Investment Sales and Acquisitions team at
                Dubai-Buildings.com is a market leader. We provide our clients
                with a full spectrum of services to source the best investment
                opportunities in the market. We leverage our partnership with
                one of the leading real estate agencies in the UAE to provide
                our clients with accurate and up to date information for
                data-backed decision making.
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col-reverse flex-col-reverse md:mt-0 sm:mt-8 mt-8 justify-center items-center ">
          {/* CONTENT */}
          <div className="flex flex-col gap-4 md:px-40 sm:px-20 px-5  md:w-[50%] sm:w-full w-full">
            <h3 className="tracking-widest font-medium text-[24px] md:mt-0 sm:mt-4 mt-4">
              Land and Development Consultancy
            </h3>
            <div className="space-y-4">
              <p className="tracking-wider text-gray-700 ">
                Dubai-Buildings.com leverages its position as a partner of one
                of the leading real estate agencies in the UAE to give our
                consultants an unparalleled advantage; a live feed into the
                latest activities and trends in the property market. With more
                than 100 licensed real estate agents actively leasing, selling,
                and buying properties for our clients on a daily basis, our
                consultants always have their ‘finger on the pulse’ of the
                market with accurate and up to date information.
              </p>

              <p className="tracking-wider text-gray-700 ">
                Our team provides comprehensive feasibility studies for real
                estate developers, banks, and institutional investors throughout
                the UAE. Our consultants add value to our clients by using our
                advantage as a market leader to provide insight and analysis on
                the latest trends, regulations, and competition to anticipate
                and counteract weaknesses and threats, while capitalizing on
                strengths and opportunities to reduce risk. Our approach allows
                our clients to make informed, data-backed decisions at every
                stage of the property development cycle.
              </p>
            </div>
          </div>

          <div className="bg-[#E8EBEA] flex justify-center items-center md:p-20 sm:p-5 p-5 md:h-[70vh] sm:h-[50vh] h-[50vh]  md:w-[50%] sm:w-full w-full">
            <div className="relative w-full h-full">
              <Image
                src="/home/home.webp"
                alt="UAE Currency"
                fill
                className="object-cover"
                // sizes="160px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col flex-col justify-center items-center md:mt-0 sm:mt-8 mt-8">
          <div className="bg-[#E8EBEA] flex justify-center items-center md:p-20 sm:p-5 p-5 md:h-[70vh] sm:h-[50vh] h-[50vh]  md:w-[50%] sm:w-full w-full">
            <div className="relative w-full h-full">
              <Image
                src="/home/home.webp"
                alt="UAE Currency"
                fill
                className="object-cover"
                // sizes="160px"
                priority
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-4 md:px-40 sm:px-5 px-5  md:w-[50%] sm:w-full w-full md:mt-0 sm:mt-4 mt-4">
            <h3 className="tracking-widest font-medium text-[24px]">
              Healthcare Development Consultancy
            </h3>
            <div className="space-y-4">
              <p className="tracking-wider text-gray-700">
                As the Healthcare sector continues to grow exponentially
                throughout the UAE, Dubai-Buildings.com’s Healthcare Development
                and Consultancy team has actively engaged with developers and
                operators to provide a full spectrum of professional services to
                reduce risk and maximize value.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>
                  Our Healthcare Development and Consultancy services include:
                </p>
                <ul className="list-disc pl-4 ">
                  <li>Market Research</li>
                  <li>Location Analysis</li>
                  <li>Feasibility Studies</li>
                  <li>Development Strategy</li>
                  <li>Development Management</li>
                  <li>Operator Search and Selection</li>
                  <li>Contract Negotiation</li>
                  <li>Due Diligence</li>
                  <li>Financial Reporting</li>
                  <li>Acquisition and Disposal</li>
                  <li>Sale and Leaseback</li>
                  <li>Sourcing Investment Opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col-reverse flex-col-reverse md:mt-0 sm:mt-8 mt-8 justify-center items-center">
          <div className="flex flex-col gap-4 md:px-40 sm:px-5 px-5  md:w-[50%] sm:w-full w-full">
            <h3 className="tracking-widest font-medium text-[24px] md:mt-0 sm:mt-4 mt-4">
              Education Development and Consultancy
            </h3>
            <div className="tracking-wider text-gray-700 w-[90%] space-y-3">
              <p>
                Dubai-Buildings.com’s position as a partner of one of the
                leading real estate agencies in the UAE provides a wealth of
                local market knowledge in the Education sector. Our Education
                Development and Consultancy specialists work with developers,
                operators, and institutional investors through every stage of
                the development cycle to provide objective professional advice
                and accurate, up to date information for data-backed decision
                making.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>
                  Our Healthcare Development and Consultancy services include:
                </p>
                <ul className="list-disc pl-4 ">
                  <li>Market Research</li>
                  <li>Location Analysis</li>
                  <li>Feasibility Studies</li>
                  <li>Development Strategy</li>
                  <li>Development Management</li>
                  <li>Operator Search and Selection</li>
                  <li>Contract Negotiation</li>
                  <li>Due Diligence</li>
                  <li>Financial Reporting</li>
                  <li>Acquisition and Disposal</li>
                  <li>Sale and Leaseback</li>
                  <li>Sourcing Investment Opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#E8EBEA] flex justify-center items-center md:p-20 sm:p-5 p-5 md:h-[70vh] sm:h-[50vh] h-[50vh]  md:w-[50%] sm:w-full w-full ">
            <div className="relative w-full h-full">
              <Image
                src="/home/home.webp"
                alt="UAE Currency"
                fill
                className="object-cover"
                // sizes="160px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col flex-col justify-center items-center sm:w-full w-full md:mt-0 sm:mt-8 mt-8">
          <div className="bg-[#E8EBEA] flex justify-center items-center md:p-20 sm:p-5 p-5 md:h-[70vh] sm:h-[50vh] h-[50vh]  md:w-[50%] sm:w-full w-full">
            <div className="relative w-full h-full">
              <Image
                src="/home/home.webp"
                alt="UAE Currency"
                fill
                className="object-cover"
                // sizes="160px"
                priority
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-4 md:px-40 sm:px-5 px-5  md:w-[50%] sm:w-full w-full  md:mt-0 sm:mt-4 mt-4">
            <h3 className="tracking-widest font-medium text-[24px]">
              Hospitality Development and Consultancy
            </h3>
            <div className="tracking-wider text-gray-700 w-[90%] space-y-3">
              <p>
                Our specialists provide advice on key factors including location
                analysis, market positioning, room types, key count, and
                ancillary revenue sources. Working internally with our team of
                more than 100 licensed real estate agents in the residential and
                commercial sectors, we offer a unique perspective to extract the
                maximum potential from each project through an effective
                mixed-use strategy.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>
                  Our Hospitality Development and Consultancy services include:
                </p>
                <ul className="list-disc pl-4 ">
                  <li>Market Research</li>
                  <li>Location Analysis</li>
                  <li>Feasibility Studies</li>
                  <li>Development Strategy</li>
                  <li>Development Management</li>
                  <li>Operator Search and Selection</li>
                  <li>Contract Negotiation</li>
                  <li>Due Diligence</li>
                  <li>Financial Reporting</li>
                  <li>Acquisition and Disposal</li>
                  <li>Sale and Leaseback</li>
                  <li>Sourcing Investment Opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col-reverse flex-col-reverse md:mt-0 sm:mt-8 mt-8 justify-center items-center">
          <div className="flex flex-col gap-4 md:px-40 sm:px-5 px-5  md:w-[50%] sm:w-full w-full">
            <h3 className="tracking-widest font-medium text-[24px] md:mt-0 sm:mt-4 mt-4">
              Education Development and Consultancy
            </h3>
            <div className="tracking-wider text-gray-700 space-y-3">
              <p>
                Dubai-Buildings.com’s position as a partner of one of the
                leading real estate agencies in the UAE provides a wealth of
                local market knowledge in the Education sector. Our Education
                Development and Consultancy specialists work with developers,
                operators, and institutional investors through every stage of
                the development cycle to provide objective professional advice
                and accurate, up to date information for data-backed decision
                making.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>
                  Our Healthcare Development and Consultancy services include:
                </p>
                <ul className="list-disc pl-4 ">
                  <li>Market Research</li>
                  <li>Location Analysis</li>
                  <li>Feasibility Studies</li>
                  <li>Development Strategy</li>
                  <li>Development Management</li>
                  <li>Operator Search and Selection</li>
                  <li>Contract Negotiation</li>
                  <li>Due Diligence</li>
                  <li>Financial Reporting</li>
                  <li>Acquisition and Disposal</li>
                  <li>Sale and Leaseback</li>
                  <li>Sourcing Investment Opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#E8EBEA] flex justify-center items-center md:p-20 sm:p-5 p-5 md:h-[70vh] sm:h-[50vh] h-[50vh]  md:w-[50%] sm:w-full w-full ">
            <div className="relative w-full h-full">
              <Image
                src="/home/home.webp"
                alt="UAE Currency"
                fill
                className="object-cover"
                // sizes="160px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col flex-col justify-center items-center sm:w-full w-full md:mt-0 sm:mt-8 mt-8">
          <div className="bg-[#E8EBEA] flex justify-center items-center md:p-20 sm:p-5 p-5 md:h-[70vh] sm:h-[50vh] h-[50vh]  md:w-[50%] sm:w-full w-full">
            <div className="relative w-full h-full">
              <Image
                src="/home/home.webp"
                alt="UAE Currency"
                fill
                className="object-cover"
                // sizes="160px"
                priority
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-4 md:px-40 sm:px-5 px-5  md:w-[50%] sm:w-full w-full  md:mt-0 sm:mt-4 mt-4">
            <h3 className="tracking-widest font-medium text-[24px]">
              Investments and Logistics Investments
            </h3>
            <div className="tracking-wider text-gray-700  space-y-3">
              <p>
                Dubai-Buildings.com’s Industrial & Logistics Investments team is
                comprised of specialists with the technical knowledge required
                to conduct industrial and logistics transactions. Our team
                maintains an extensive inventory of industrial and logistics
                properties throughout the UAE.
              </p>

              <p>
                Our clients benefit from our expertise in tailored marketing,
                development, leasing, and acquisition services for their
                industrial and logistics properties. Our close relationships
                with leading industrial master developers have provided us with
                a strong network of local and international landlords,
                operators, and occupiers. Our unmatched insight in the
                industrial and logistics sector allows our clients to make
                well-informed decisions based on our extensive track record of
                successful transactions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col-reverse flex-col-reverse md:mt-0 sm:mt-8 mt-8 justify-center items-center">
          <div className="flex flex-col gap-4 md:px-40 sm:px-5 px-5  md:w-[50%] sm:w-full w-full">
            <h3 className="tracking-widest font-medium text-[24px] md:mt-0 sm:mt-4 mt-4">
              Residential Investment
            </h3>
            <div className="tracking-wider text-gray-700 w-[90%] space-y-3">
              <p>
                As a partner of one of the leading real estate agencies in the
                UAE, Dubai-Buildings.com has established a platform for private
                investors, real estate investment funds, and developers to
                acquire and dispose of residential investment properties in an
                effective and efficient manner.
              </p>

              <p>
                Our unrivaled expertise in the local market provides clients
                with accurate and up to date market intelligence to maximize
                their returns. Our Residential Investment team specializes in
                income generating assets with long term leases or guaranteed
                returns.
              </p>

              <p>
                The Residential Investment team maintains an updated inventory
                of fully-vetted, investment-grade residential properties
                throughout the UAE. Our knowledge and expertise in this segment
                of the market stems from our extensive experience in handling
                previous transactions which include residential towers, villa
                compounds, and blocks of flats.
              </p>
            </div>
          </div>

          <div className="bg-[#E8EBEA] flex justify-center items-center md:p-20 sm:p-5 p-5 md:h-[70vh] sm:h-[50vh] h-[50vh]  md:w-[50%] sm:w-full w-full ">
            <div className="relative w-full h-full">
              <Image
                src="/home/home.webp"
                alt="UAE Currency"
                fill
                className="object-cover"
                // sizes="160px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col flex-col justify-center items-center sm:w-full w-full md:mt-0 sm:mt-8 mt-8">
          <div className="bg-[#E8EBEA] flex justify-center items-center md:p-20 sm:p-5 p-5 md:h-[70vh] sm:h-[50vh] h-[50vh]  md:w-[50%] sm:w-full w-full">
            <div className="relative w-full h-full">
              <Image
                src="/home/home.webp"
                alt="UAE Currency"
                fill
                className="object-cover"
                // sizes="160px"
                priority
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex flex-col gap-4 md:px-40 sm:px-5 px-5  md:w-[50%] sm:w-full w-full  md:mt-0 sm:mt-4 mt-4">
            <h3 className="tracking-widest font-medium text-[24px]">
              Commercial Agency
            </h3>
            <div className="tracking-wider text-gray-700 w-[90%] space-y-3">
              <p>
                The Dubai-Buildings.com Commercial Agency team works in
                partnership with our clients to understand the challenges and
                opportunities they face. We take the time to get to know the
                brands we work with to ensure we provide the best solution in a
                seamless process.
              </p>

              <div className="text-gray-700 space-y-1">
                <p>Our Commercial Agency Services include:</p>
                <ul className="list-disc pl-4 ">
                  <li>Market Research and Analysis</li>
                  <li>Lease Renewal/Restructuring</li>
                  <li>Rent Negotiations</li>
                  <li>Strategic Planning and Consultation</li>
                  <li>Commercial Property Valuation</li>
                  <li>Local and International Marketing</li>
                  <li>Local and International Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row sm:flex-col-reverse flex-col-reverse md:mt-0 sm:mt-8 mt-8 justify-center items-center">
          <div className="flex flex-col gap-4 md:px-40 sm:px-5 px-5  md:w-[50%] sm:w-full w-full">
            <h3 className="tracking-widest font-medium text-[24px] md:mt-0 sm:mt-4 mt-4">
              Asset Management
            </h3>
            <div className="tracking-wider text-gray-700 w-[90%] space-y-3">
              <p>
                Dubai-Buildings.com provides property owners, developers, and
                occupiers with comprehensive asset management services. To
                ensure efficient operations, we provide objective advice and
                accurate reporting, while ensuring that all property regulations
                are enforced to protect our clients.
              </p>

              <p>
                By investing in our team and continuously developing innovative
                processes to maximize returns for our clients, we have grown to
                become one of the premier asset management companies in the UAE.
              </p>

              <p>
                Our portfolio of property under management includes residential
                apartment buildings in prestigious developments such as City
                Walk, Meydan, and Dubai Marina. Dubai-Buildings.com currently
                manages more than 4,000 units throughout the UAE.
              </p>
            </div>
          </div>

          <div className="bg-[#E8EBEA] flex justify-center items-center md:p-20 sm:p-5 p-5 md:h-[70vh] sm:h-[50vh] h-[50vh]  md:w-[50%] sm:w-full w-full ">
            <div className="relative w-full h-full">
              <Image
                src="/home/home.webp"
                alt="UAE Currency"
                fill
                className="object-cover"
                // sizes="160px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
