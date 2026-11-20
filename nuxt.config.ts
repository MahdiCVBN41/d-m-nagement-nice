// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-01-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/seo'],

  experimental: {
    viewTransition: true,
    payloadExtraction: true
  },

  site: {
    url: 'https://www.nice-demenagement.fr',
    name: 'Nice Déménagement',
    description: 'Entreprise spécialisée dans le déménagement de particuliers, entreprises, bureaux. Monte-meubles, garde-meubles, emballage professionnel, transport d\'objets fragiles, piano, coffre-fort.',
    defaultLocale: 'fr',
    indexable: true
  },

  seo: {
    canonicalQueryWhitelist: ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'author', content: 'Nice Déménagement' },
        { name: 'publisher', content: 'Nice Déménagement' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'theme-color', content: '#1e40af' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },

  sitemap: {
    // Sitemap statiques dans /public/* désactivent la génération dynamique.
    // On garde nos 4 fichiers : sitemap.xml (index), sitemap-pages.xml,
    // sitemap-villes.xml, sitemap-pays.xml, sitemap-images.xml
    enabled: false,
    autoLastmod: false,
    exclude: ['/devis/merci']
  },

  robots: {
    // robots.txt statique dans /public/robots.txt — on désactive la génération
    enabled: false,
    allow: '/',
    disallow: ['/devis/merci', '/api/', '/admin/'],
    sitemap: 'https://www.nice-demenagement.fr/sitemap.xml'
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'Nice Déménagement',
      url: 'https://www.nice-demenagement.fr',
      logo: 'https://www.nice-demenagement.fr/assets/logo-nice-demenagement.png',
      telephone: '+33650222278',
      email: 'secretariat@nice-demenagement.fr',
      image: 'https://www.nice-demenagement.fr/assets/logo-nice-demenagement.png',
      address: {
        type: 'PostalAddress',
        streetAddress: 'Nice Boulevard 6200',
        addressLocality: 'Nice',
        postalCode: '06000',
        addressRegion: 'PACA',
        addressCountry: 'FR'
      },
      geo: {
        type: 'GeoCoordinates',
        latitude: 43.7034,
        longitude: 7.2663
      },
      openingHoursSpecification: [
        {
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
          opens: '07:00',
          closes: '20:00'
        },
        {
          dayOfWeek: 'Sunday',
          opens: '08:00',
          closes: '18:00'
        }
      ],
      areaServed: ['Nice','Paris','Marseille','Lyon','Nantes','Lille','Bordeaux','Toulouse','Montpellier','Strasbourg','Grenoble','Cannes','Antibes','Grasse','Monaco']
    }
  },

  ogImage: {
    enabled: true
  },

  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: [
        // Pages principales
        '/',
        '/services',
        '/villes',
        '/pays',
        '/contact',
        '/devis',
        '/garde-meubles',
        '/mentions-legales',
        '/cgv',
        '/politique-confidentialite',
        // Sous-services
        '/services/particuliers',
        '/services/entreprises',
        '/services/monte-meubles',
        '/services/emballage',
        '/services/piano',
        // 15 villes desservies
        '/ville/nice',
        '/ville/paris',
        '/ville/marseille',
        '/ville/lyon',
        '/ville/nantes',
        '/ville/lille',
        '/ville/bordeaux',
        '/ville/toulouse',
        '/ville/montpellier',
        '/ville/strasbourg',
        '/ville/grenoble',
        '/ville/cannes',
        '/ville/antibes',
        '/ville/grasse',
        '/ville/monaco',
        // 6 pays européens
        '/pays/italie',
        '/pays/allemagne',
        '/pays/suisse',
        '/pays/belgique',
        '/pays/espagne',
        '/pays/luxembourg'
      ]
    }
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => false
    }
  },

  css: ['~/assets/css/main.css']
})
