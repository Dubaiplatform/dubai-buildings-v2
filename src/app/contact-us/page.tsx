import ContactFormInContact from "@/components/ui/contact-form-contact";

export default function ContactUs() {
  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden bg-black">
        {/* Background Image */}

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[52px] font-light text-center">
            Contact Us
          </h1>
        </div>
      </section>
      <section className="my-12 md:my-24 px-6 sm:px-8 md:px-20">
        {/* TOP GRID */}
        <div className="flex justify-center items-center">
          {/* CONTACT FORM */}
          <div>
            <ContactFormInContact />
          </div>
        </div>
      </section>
    </main>
  );
}
