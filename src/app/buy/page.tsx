import BuySellForm from "@/components/form/buy-form";

export default function Buy() {
  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[45vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/hero/1.webp')" }} // change image path if needed
          role="img"
          aria-label="Buy Buildings Dubai"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Buy Buildings
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Text Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Find the building that best meets your investment goals.
          </h2>

          <div className="tracking-wide text-gray-700 space-y-4">
            <p>
              We have exclusive access to a number of building acquisition
              opportunities throughout Dubai. Our buildings are thoroughly
              vetted by our team to ensure they are attractive to investors and
              aligned commercially with the market.
            </p>

            <p>
              We have a wide variety of buildings across different budgets,
              communities, and investment structures.
            </p>
          </div>
        </div>
      </section>

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

      <div className="bg-black py-20">
        <div className="text-center text-white">
          <h2 className="text-5xl">Share your basic information</h2>
          <p>
            Share your requirement with our Professional, Reliable and Efficient
            team
          </p>
        </div>
        <BuySellForm mode="buy" />
      </div>
    </main>
  );
}
