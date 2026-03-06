import ContactFormInContact from "@/components/ui/contact-form-contact";

export default function ContactUs() {
  return (
    <main>
      <section className="relative w-full h-[35vh] sm:h-[55vh] overflow-hidden">
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

        {/* MAP */}
        {/* <div className="mt-16">
        <div className="relative w-full h-[450px] overflow-hidden border border-black/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d571.1228314511359!2d55.278153750610464!3d25.21381938228486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f428c4b20d9c1%3A0xda2a93cfee3dee03!2sAl%20Saqr%20Business%20Tower!5e0!3m2!1sen!2sae!4v1769667027458!5m2!1sen!2sae"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div> */}
      </section>
    </main>
  );
}
