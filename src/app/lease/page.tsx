import Image from "next/image";

export default function Build() {
  return (
    <main>
      <section className="relative w-full h-[35vh]">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px]  font-light text-center">
            Build Buildings
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Centered Image */}
        <div className="flex justify-center items-center mb-16">
          <div className="relative w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px]">
            <Image
              src="/home/home.webp"
              alt="Building Investment"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Find the building that best fits your requirements.
            </h2>

            <div className="tracking-wide text-gray-700 space-y-2">
              <p>
                We understand the unique requirements each tenant faces. Our
                team has successfully housed thousands of tenants for world
                class hotel and hospitality brands.
              </p>

              <p>
                We have exclusive access to a number of suitable buildings
                throughout Dubai.
              </p>
            </div>
          </div>

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Source the best tenant for your building.
            </h2>

            <div className="tracking-wide text-gray-700 space-y-2">
              <p>
                Landlords benefit from access to our extensive network of
                corporate tenants. Our track record of successful transactions
                for Long Term Leases is proven.
              </p>

              <p>
                We understand the costs and benefits of complex lease
                transactions for our landlords.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
