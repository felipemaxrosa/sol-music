import { site } from "@/config/site";

// índice Date.getDay (0=Dom) -> dia schema.org
const DAY_SCHEMA = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 * JSON-LD de negócio local (MusicStore) para SEO/Google (rich results,
 * Google Maps/Business). Usa os dados reais de config/site.ts.
 */
export function StructuredData() {
  const openingHoursSpecification = site.hours.flatMap((h, i) =>
    h.open && h.close
      ? [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: `https://schema.org/${DAY_SCHEMA[i]}`,
            opens: h.open,
            closes: h.close,
          },
        ]
      : [],
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "MusicStore",
    "@id": `${site.url}/#loja`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    image: `${site.url}/logo.png`,
    logo: `${site.url}/logo.png`,
    url: site.url,
    telephone: `+${site.whatsapp.phone}`,
    priceRange: "$$",
    currenciesAccepted: "BRL",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.mapsUrl,
    openingHoursSpecification,
    sameAs: [site.instagram.url],
    areaServed: [
      "Caraguatatuba",
      "Ilhabela",
      "São Sebastião",
      "Ubatuba",
    ].map((n) => ({ "@type": "City", name: n })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
