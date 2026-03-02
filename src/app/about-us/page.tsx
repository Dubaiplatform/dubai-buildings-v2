import Image from "next/image";

export default function About() {
  return (
    <main>
      <section className="relative w-full h-[35vh]">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px]  font-light text-center">
            About Us
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
    </main>
  );
}
