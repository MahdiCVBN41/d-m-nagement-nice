/**
 * Composable de génération des schémas JSON-LD pour Nice Déménagement
 * Gère : Organization, LocalBusiness, MovingCompany, Service, FAQPage, BreadcrumbList, WebSite, WebPage, SearchAction, ContactPoint, etc.
 */

const SITE_URL = 'https://www.nice-demenagement.fr'
const SITE_LOGO = `${SITE_URL}/assets/logo-nice-demenagement.png`

export function useSeoSchema() {
  const route = useRoute()

  function getOrganizationSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Nice Déménagement',
      url: SITE_URL,
      logo: SITE_LOGO,
      image: SITE_LOGO,
      telephone: '+33650222278',
      email: 'secretariat@nice-demenagement.fr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nice Boulevard 6200',
        addressLocality: 'Nice',
        postalCode: '06000',
        addressRegion: 'PACA',
        addressCountry: 'FR'
      },
      sameAs: [
        'https://www.facebook.com/nicedemenagement',
        'https://www.instagram.com/nicedemenagement',
        'https://www.linkedin.com/company/nicedemenagement'
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '187',
        bestRating: '5'
      }
    }
  }

  function getLocalBusinessSchema(city?: string, geo?: { lat: number; lng: number }) {
    return {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'MovingCompany'],
      '@id': `${SITE_URL}/#localbusiness${city ? '-' + city : ''}`,
      name: 'Nice Déménagement',
      url: SITE_URL,
      logo: SITE_LOGO,
      image: SITE_LOGO,
      telephone: '+33650222278',
      email: 'secretariat@nice-demenagement.fr',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Nice Boulevard 6200',
        addressLocality: city || 'Nice',
        postalCode: '06000',
        addressRegion: 'PACA',
        addressCountry: 'FR'
      },
      geo: geo ? {
        '@type': 'GeoCoordinates',
        latitude: geo.lat,
        longitude: geo.lng
      } : {
        '@type': 'GeoCoordinates',
        latitude: 43.7034,
        longitude: 7.2663
      },
      hasMap: `https://maps.google.com/?q=Nice+D%C3%A9m%C3%A9nagement`,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '187',
        bestRating: '5',
        worstRating: '1'
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Sophie Martin' },
          datePublished: '2025-09-14',
          reviewBody: `Déménagement impeccable de Nice à Paris. Équipe ponctuelle, soigneuse et professionnelle. Aucune casse, délai respecté. Je recommande vivement.`,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Thomas Dubois' },
          datePublished: '2025-08-22',
          reviewBody: `Excellent service pour mon déménagement de Lyon vers Nice. Monte-meubles utilisé pour le 5e étage, tout s'est bien passé. Très bon rapport qualité-prix.`,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Camilla De Luca' },
          datePublished: '2025-07-30',
          reviewBody: `Déménagement international Nice → Milan géré de A à Z, formalités douanières incluses. Sérieux et rassurant. Five stars !`,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Marc Weber' },
          datePublished: '2025-06-18',
          reviewBody: `Très satisfait du déménagement de mon bureau à Sophia-Antipolis. Équipe en horaires décalés pour limiter l'impact sur mon activité.`,
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }
        }
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '07:00',
          closes: '20:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Sunday',
          opens: '08:00',
          closes: '18:00'
        }
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+33650222278',
        contactType: 'customer service',
        availableLanguage: ['French', 'English', 'Italian']
      }
    }
  }

  function getWebsiteSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Nice Déménagement',
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/recherche?q={search_term_string}`
        },
        'query-input': 'required name=search_term_string'
      }
    }
  }

  function getWebPageSchema(title: string, description: string, breadcrumbItems?: { name: string; url: string }[]) {
    const schema: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${SITE_URL}${route.path}#webpage`,
      url: `${SITE_URL}${route.path}`,
      name: title,
      description: description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'fr-FR'
    }
    if (breadcrumbItems?.length) {
      schema.breadcrumb = getBreadcrumbSchema(breadcrumbItems)
    }
    return schema
  }

  function getServiceSchema(serviceType: string, areaServed: string[], url: string) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: serviceType,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: areaServed.map(a => ({ '@type': 'City', name: a })),
      url: `${SITE_URL}${url}`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services de déménagement',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Déménagement particulier' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Déménagement entreprise' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Monte-meubles' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garde-meubles' } }
        ]
      }
    }
  }

  function getFaqSchema(faq: { q: string; a: string }[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a
        }
      }))
    }
  }

  function getBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.url}`
      }))
    }
  }

  function getFullBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.url}`
      }))
    }
  }

  function injectSchemas(schemas: Record<string, any>[]) {
    useHead({
      script: schemas.map(schema => ({
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema)
      }))
    })
  }

  return {
    getOrganizationSchema,
    getLocalBusinessSchema,
    getWebsiteSchema,
    getWebPageSchema,
    getServiceSchema,
    getFaqSchema,
    getBreadcrumbSchema,
    getFullBreadcrumbSchema,
    injectSchemas
  }
}
