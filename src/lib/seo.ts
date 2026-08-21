export const SITE_URL = "https://www.dubai-buildings.com";
export const SITE_NAME = "Dubai Buildings";

export const NAP = {
  name: SITE_NAME,
  streetAddress: "Office 1102, Al Saqr Business Tower, Sheikh Zayed Road",
  addressLocality: "Dubai",
  addressCountry: "AE",
  telephone: "+97143807533",
  telephoneDisplay: "+971 4 380 7533",
  mobile: "+971581514623",
  mobileDisplay: "+971 58 151 4623",
  whatsappUrl: "https://wa.me/971581514623",
  geo: {
    latitude: 25.2176,
    longitude: 55.2769,
  },
};

export const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: NAP.name,
  url: SITE_URL,
  description:
    "B2B real estate service provider in Dubai helping investors, developers, and occupiers buy, sell, lease, and develop commercial and residential buildings.",
  telephone: [NAP.telephone, NAP.mobile],
  address: {
    "@type": "PostalAddress",
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    addressCountry: NAP.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: NAP.geo.latitude,
    longitude: NAP.geo.longitude,
  },
  areaServed: {
    "@type": "City",
    name: "Dubai",
  },
  sameAs: [SITE_URL],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
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
    },
    areaServed: {
      "@type": "City",
      name: "Dubai",
    },
  };
}
