export const SITE_URL = "https://www.dubai-buildings.com";
export const SITE_NAME = "Dubai Buildings";

/** Prefilled text that opens in WhatsApp when a visitor taps a WhatsApp link. */
const WHATSAPP_MESSAGE =
  "Hello Dubai Buildings, I found you on www.dubai-buildings.com and would like to discuss a building in Dubai.";

export const NAP = {
  name: SITE_NAME,
  streetAddress: "Office 1102, Al Saqr Business Tower, Sheikh Zayed Road",
  addressLocality: "Dubai",
  addressCountry: "AE",
  telephone: "+97143807533",
  telephoneDisplay: "+971 4 380 7533",
  email: "info@dubai-buildings.com",
  mobile: "+971581514623",
  mobileDisplay: "+971 58 151 4623",
  whatsappMessage: WHATSAPP_MESSAGE,
  whatsappUrl: `https://wa.me/971581514623?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  geo: {
    latitude: 25.2176,
    longitude: 55.2769,
  },
};

/**
 * Official social / directory profiles for the brand. Each URL is emitted as
 * `sameAs` in the Organization schema and linked from the footer, so only add
 * a profile once it is live and uses the exact name "Dubai Buildings".
 */
export const SOCIAL_PROFILES: { name: string; url: string }[] = [
  // { name: "LinkedIn", url: "https://www.linkedin.com/company/dubai-buildings" },
  // { name: "Instagram", url: "https://www.instagram.com/dubaibuildings" },
  // { name: "Google Business Profile", url: "https://g.page/dubai-buildings" },
];

export const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "Organization", "LocalBusiness"],
  "@id": `${SITE_URL}/#organization`,
  name: NAP.name,
  legalName: "Dubai Buildings",
  alternateName: "Dubai Buildings Real Estate",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/home/og-home.webp`,
  description:
    "Dubai Buildings is a B2B real estate brokerage and advisory firm in Dubai specializing in whole-building buy, sell, lease, and develop mandates for institutional investors, developers, landlords, and corporate occupiers.",
  slogan:
    "B2B partner for buying, selling, leasing, and developing buildings in Dubai",
  telephone: [NAP.telephone, NAP.mobile],
  email: NAP.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    addressRegion: "Dubai",
    addressCountry: NAP.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: NAP.geo.latitude,
    longitude: NAP.geo.longitude,
  },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  knowsAbout: [
    "Buy buildings in Dubai",
    "Sell buildings in Dubai",
    "Lease buildings in Dubai",
    "Building development consultancy Dubai",
    "Investment sales and acquisitions UAE",
    "Institutional real estate Dubai",
    "Commercial building brokerage Dubai",
    "Off-market building acquisitions",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Buy Buildings in Dubai",
        url: `${SITE_URL}/buy-buildings-dubai/`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Sell Buildings in Dubai",
        url: `${SITE_URL}/sell-building-dubai/`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Lease Buildings in Dubai",
        url: `${SITE_URL}/lease-buildings-dubai/`,
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Develop Buildings in Dubai",
        url: `${SITE_URL}/build/`,
      },
    },
  ],
  sameAs: SOCIAL_PROFILES.map((profile) => profile.url),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: NAP.telephone,
      email: NAP.email,
      contactType: "sales",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
    {
      "@type": "ContactPoint",
      telephone: NAP.mobile,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
  ],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-AE",
};

export function faqPageSchema(
  questions: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      "@type": "RealEstateAgent",
      name: SITE_NAME,
      url: SITE_URL,
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  };
}

/** Speakable cues help Google AI / voice surfaces pick citation-ready copy */
export function speakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SITE_NAME,
    url: SITE_URL,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    about: { "@id": `${SITE_URL}/#organization` },
    mainEntity: { "@id": `${SITE_URL}/#organization` },
  };
}
