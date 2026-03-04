import Form from "@/components/form";
import Image from "next/image";

export default function About() {
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
            About Us
          </h1>
        </div>
      </section>

      <section className="section-padding">
        {/* Text Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="tracking-wide text-gray-700 space-y-4">
            <p>
              Dubai-Buildings.com is the premier Business to Business real
              estate service provider in Dubai. We understand the challenges
              institutional investors, developers, and corporate occupiers face
              when searching for a reliable partner to assist with their real
              estate requirements. We simplify the process of sourcing
              properties and tailor solutions to ensure the best match for our
              clients. Rather than going through hundreds of inaccurate property
              listings online or dealing with one of the many unreliable agents
              that plague the Dubai real estate market, Dubai-Buildings.com
              offers a professional, customer-oriented process to provide a
              smooth transaction from start to finish.
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

      <Form />
    </main>
  );
}
