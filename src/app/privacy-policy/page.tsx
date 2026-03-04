"use client";

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 bg-black text-white overflow-hidden">
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
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-white mx-auto mt-8"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          {/* Introduction */}
          <motion.div {...fadeIn} className="mb-16">
            <p className="text-black/70 leading-relaxed mb-6">
              Condo Dubai (which term includes all subsidiaries of Condo Dubai)
              (&quot;Company&quot;, &quot;we&quot; or &quot;us&quot;) respect
              your privacy and are committed to protecting it through our
              compliance with this policy.
            </p>
            <p className="text-black/70 leading-relaxed mb-6">
              This policy describes the types of information we may collect from
              you or that you may provide when you visit the website{" "}
              <a
                href="https://condodubai.com"
                className="text-black underline underline-offset-4 hover:text-black/60 transition-colors"
              >
                https://condodubai.com
              </a>{" "}
              (our &quot;Website&quot;) and our practices for collecting, using,
              maintaining, protecting and disclosing that information.
            </p>
            <p className="text-black/70 leading-relaxed mb-4">
              This policy applies to information we collect:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "On this Website.",
                "Careers portal.",
                "In e-mail, text and other electronic messages between you and this Website.",
                "Through mobile and desktop applications you may download from this Website, which provides dedicated non-browser-based interaction between you and this Website.",
                "When you interact with our advertising and applications on third-party websites and services if those applications or advertising include links to this policy.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-black/70">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 leading-relaxed mb-4">
              It does not apply to information collected by:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "us offline or through any other means, including any other website operated by any third party; or",
                "any third party, including through any application or content (including advertising) that may link to the Website.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-black/70">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 leading-relaxed">
              Please read this policy carefully to understand our policies and
              practices regarding your information and how we will treat it. If
              you do not agree with our policies and practices, your choice is
              not to use our Website. By accessing or using this Website, you
              agree to this privacy policy. This policy may change from time to
              time. Your continued use of this Website after we make changes is
              deemed to be acceptance of those changes, so please check the
              policy periodically for updates.
            </p>
          </motion.div>

          {/* Section: Information We Collect */}
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-xl md:text-2xl font-light tracking-wide mb-6 uppercase">
              Information We Collect About You and How We Collect It
            </h2>
            <div className="w-12 h-px bg-black mb-6" />
            <p className="text-black/70 leading-relaxed mb-4">
              The information we collect on or through our Website may include:
            </p>
            <ul className="space-y-2">
              {[
                "Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website, subscribing to our service, registering for the newsletter, using the 'contact us' form. We may also ask you for information when you enter a contest or promotion sponsored by us, and when you report a problem with our Website.",
                "Records and copies of your correspondence (including e-mail addresses), if you contact us.",
                "Your responses to surveys that we might ask you to complete for research purposes.",
                "Your search queries on the Website.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-black/70">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section: Usage Details */}
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-xl md:text-2xl font-light tracking-wide mb-6 uppercase">
              Usage Details, IP Addresses, Cookies and Other Technologies
            </h2>
            <div className="w-12 h-px bg-black mb-6" />
            <p className="text-black/70 leading-relaxed mb-4">
              As you navigate through and interact with our Website, we may
              automatically collect certain information about your equipment,
              browsing actions and patterns, including:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Details of your visits to our Website, including traffic data, location data, logs and other communication data and the resources that you access and use on the Website.",
                "Information about your computer and internet connection, including your IP address, operating system and browser type.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-black/70">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 leading-relaxed mb-4">
              The information we collect automatically is statistical data. It
              helps us to improve our Website and to deliver a better and more
              personalized service by enabling us to:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Estimate our audience size and usage patterns.",
                "Store information about your preferences, allowing us to customize our Website according to your individual interests.",
                "Speed up your searches.",
                "Recognize you when you return to our Website.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-black/70">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 leading-relaxed mb-4">
              The technologies we use for this automatic data collection may
              include:
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "Cookies (or browser cookies).",
                  description:
                    "A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser Cookies by activating the appropriate setting on your browser. However, if you select this setting, you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.",
                },
                {
                  title: "Flash Cookies.",
                  description:
                    "Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies.",
                },
                {
                  title: "Web Beacons.",
                  description:
                    "Pages of our Website and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an e-mail and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).",
                },
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-black/70">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                  <span>
                    <strong className="text-black">{item.title}</strong>{" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section: How We Use Your Information */}
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-xl md:text-2xl font-light tracking-wide mb-6 uppercase">
              How We Use Your Information
            </h2>
            <div className="w-12 h-px bg-black mb-6" />
            <p className="text-black/70 leading-relaxed mb-4">
              We use information that we collect about you or that you provide
              to us, including any personal information:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "To present our Website and its contents to you.",
                "To provide you with information or services that you request from us.",
                "To fulfil any other purpose for which you provide it.",
                "To notify you about changes to our Website or any project or services we offer or provide.",
                "To allow you to participate in interactive features on our Website.",
                "In any other way, we may describe when you provide the information.",
                "For any other purpose with your consent.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-black/70">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 leading-relaxed">
              We may also use your information to contact you about our own and
              third-parties&apos; projects and services that may be of interest
              to you. If you do not want us to use your information in this way,
              please contact us.
            </p>
          </motion.div>

          {/* Section: Disclosure of Your Information */}
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-xl md:text-2xl font-light tracking-wide mb-6 uppercase">
              Disclosure of Your Information
            </h2>
            <div className="w-12 h-px bg-black mb-6" />
            <p className="text-black/70 leading-relaxed mb-4">
              We may disclose aggregated information about our users, and
              information that does not identify any individual, without
              restriction.
            </p>
            <p className="text-black/70 leading-relaxed mb-4">
              We may disclose personal information that we collect, or you
              provide as described in this privacy policy:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "To our subsidiaries and affiliates.",
                "To contractors, service providers and other third parties we use to support our business.",
                "To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of the Company's assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal information held by the Company about our Website users is among the assets transferred.",
                "To fulfil the purpose for which you provide it.",
                "For any other purpose disclosed by us when you provide the information.",
                "With your consent.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-black/70">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-black/70 leading-relaxed mb-4">
              We may also disclose your personal information:
            </p>
            <ul className="space-y-2">
              {[
                "To comply with any court order, law or legal process, including to respond to any government or regulatory request.",
                "To enforce or apply our terms of use or terms of sale and other agreements, including for billing and collection purposes.",
                "If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-black/70">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section: Choices About How We Use */}
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-xl md:text-2xl font-light tracking-wide mb-6 uppercase">
              Choices About How We Use and Disclose Your Information
            </h2>
            <div className="w-12 h-px bg-black mb-6" />
            <p className="text-black/70 leading-relaxed mb-4">
              We strive to provide you with choices regarding the personal
              information you provide to us. We have created mechanisms to
              provide you with the following control over your information:
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: "Tracking Technologies and Advertising.",
                  description:
                    "You can set your browser to refuse all or some browser cookies or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of this site may then be inaccessible or not function properly.",
                },
                {
                  title:
                    "Disclosure of Your Information for Third-Party Advertising.",
                  description:
                    "If you do not want us to share your personal information with unaffiliated or non-agent third parties for promotional purposes, you can opt-out by sending us an e-mail stating your request to Contact us.",
                },
                {
                  title: "Promotional Offers from the Company.",
                  description:
                    "If you do not wish to have your e-mail address or contact information used by the Company to promote our own or third parties' projects or services, you can opt-out by sending us an e-mail stating your request to Contact us",
                },
              ].map((item, index) => (
                <li key={index} className="flex gap-3 text-black/70">
                  <span className="w-1.5 h-1.5 bg-black mt-2 shrink-0" />
                  <span>
                    <strong className="text-black">{item.title}</strong>{" "}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section: Data Security */}
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-xl md:text-2xl font-light tracking-wide mb-6 uppercase">
              Data Security
            </h2>
            <div className="w-12 h-px bg-black mb-6" />
            <p className="text-black/70 leading-relaxed mb-6">
              We have implemented measures designed to secure your personal
              information from accidental loss and from unauthorized access,
              use, alteration and disclosure. All information you provide to us
              is stored on our secure servers behind firewalls. Any payment
              transactions will be encrypted using SSL technology.
            </p>
            <p className="text-black/70 leading-relaxed mb-6">
              The safety and security of your information also depend on you.
              Where we have given you (or where you have chosen) a password for
              access to certain parts of our Website, you are responsible for
              keeping this password confidential. We ask you not to share your
              password with anyone.
            </p>
            <p className="text-black/70 leading-relaxed">
              Unfortunately, the transmission of information via the internet is
              not completely secure. Although we do our best to protect your
              personal information, we cannot guarantee the security of your
              personal information transmitted to our Website. Any transmission
              of personal information is at your own risk. We are not
              responsible for circumvention of any privacy settings or security
              measures contained on the Website.
            </p>
          </motion.div>

          {/* Section: Changes to Our Privacy Policy */}
          <motion.div {...fadeIn}>
            <h2 className="text-xl md:text-2xl font-light tracking-wide mb-6 uppercase">
              Changes to Our Privacy Policy
            </h2>
            <div className="w-12 h-px bg-black mb-6" />
            <p className="text-black/70 leading-relaxed">
              It is our policy to post any changes we make to our privacy policy
              on this page. The date the privacy policy was last revised is
              identified at the top of the page. You are responsible for
              periodically visiting our Website and this privacy policy to check
              for any changes.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
