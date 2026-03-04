"use client";

import { motion } from "framer-motion";

const sections = [
  {
    title: "Conditions of Use",
    content: [
      "By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to stop using the website accordingly. Condo Dubai only grants use and access of this website, its products, and its services to those who have accepted its terms.",
    ],
  },
  {
    title: "Privacy Policy",
    content: [
      "Before you continue using our website, we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.",
    ],
  },
  {
    title: "Intellectual Property",
    content: [
      "You agree that all materials, products, and services provided on this website are the property of Condo Dubai, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute the Condo Dubai intellectual property in any way, including electronic, digital, or new trademark registrations.",
      "You grant Condo Dubai a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.",
    ],
  },
  {
    title: "User Accounts",
    content: [
      "As a user of this website, you may be asked to register with us and provide private information. You are responsible for ensuring the accuracy of this information, and you are responsible for maintaining the safety and security of your identifying information. You are also responsible for all activities that occur under your account or password.",
      "If you think there are any possible issues regarding the security of your account on the website, inform us immediately so we may address them accordingly.",
      "We reserve all rights to terminate accounts, edit or remove content and cancel orders at our sole discretion.",
    ],
  },
  {
    title: "Applicable Law",
    content: [
      "By using this website, you agree that the laws of the Office 1102, Al Saqr Business Tower Sheikh Zayed Road Dubai, United Arab Emirates, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between Condo Dubai and you, or its business partners and associates.",
    ],
  },
  {
    title: "Disputes",
    content: [
      "Any dispute related in any way to your use of this website or to products you purchase from us shall be arbitrated by state or federal court Office 1102, Al Saqr Business Tower Sheikh Zayed Road Dubai, United Arab Emirates and you consent to exclusive jurisdiction and venue of such courts.",
    ],
  },
  {
    title: "Indemnification",
    content: [
      "You agree to indemnify Condo Dubai and its affiliates and hold Condo Dubai harmless against legal claims and demands that may arise from your use or misuse of our services. We reserve the right to select our own legal counsel.",
    ],
  },
  {
    title: "Limitation on Liability",
    content: [
      "Condo Dubai is not liable for any damages that may occur to you as a result of your misuse of our website.",
      "Condo Dubai reserves the right to edit, modify, and change this Agreement at any time. We shall let our users know of these changes through electronic mail. This Agreement is an understanding between Condo Dubai and the user, and this supersedes and replaces all prior agreements regarding the use of this website.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-32 md:py-40 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-white/60 border border-white/20 mb-8"
          >
            Legal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wide mb-6"
          >
            Terms & Conditions
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-white mx-auto mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-white/50 font-light max-w-2xl mx-auto"
          >
            Please read these terms and conditions carefully before using our
            website and services.
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 border-b border-black/10">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-black/70 leading-relaxed"
          >
            Please read these terms and conditions (&quot;terms and
            conditions&quot;, &quot;terms&quot;) carefully before using{" "}
            <a
              href="https://condodubai.com"
              className="underline hover:text-black transition-colors"
            >
              https://condodubai.com
            </a>{" "}
            (&quot;website&quot;, &quot;service&quot;) operated by Condo Dubai
            (&quot;us&quot;, &quot;we&quot;, &quot;our&quot;).
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              {/* Section Number & Title */}
              <div className="flex items-start gap-4 mb-6">
                <span className="text-xs tracking-[0.15em] text-black/30 mt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-lg md:text-xl font-medium tracking-wide uppercase">
                    {section.title}
                  </h2>
                  <div className="w-12 h-px bg-black mt-3" />
                </div>
              </div>

              {/* Content */}
              <div className="pl-10 space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-black/60 leading-relaxed text-sm md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
