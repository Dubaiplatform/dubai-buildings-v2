import Image from "next/image";

export default function Lease() {
  return (
    <main>
      <section className="relative w-full h-[35vh]">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px]  font-light text-center">
            Build
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
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Develop your building with the best in the business.
          </h2>

          <div className="tracking-wide text-gray-700 space-y-4">
            <p>
              We understand the development process from start to finish. Our
              team’s comprehensive understanding of market trends provides a
              unique perspective.
            </p>

            <p>
              We work with the best designers, engineers, and contractors in the
              market.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
