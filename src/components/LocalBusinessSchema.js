import React from 'react';
import { SITE } from '../data/site';

const LocalBusinessSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Optician',
    name: SITE.name,
    image: 'https://www.sanoptik.com/logo192.png',
    '@id': 'https://www.sanoptik.com',
    url: 'https://www.sanoptik.com',
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Adalet, 1586/13. Sk. No:1C',
      addressLocality: 'Bayraklı',
      addressRegion: 'İzmir',
      postalCode: '35530',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.4526128,
      longitude: 27.1775051,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:30',
    },
    priceRange: '$$',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
