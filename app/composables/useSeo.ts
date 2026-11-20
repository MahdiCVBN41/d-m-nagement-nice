interface SeoOptions {
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  keywords?: string[]
  publishedTime?: string
  modifiedTime?: string
}

/**
 * Composable SEO centralisé pour Nice Déménagement
 * Gère : Title, Meta Description, Canonical, OpenGraph, Twitter Cards, Robots, Author, Publisher
 */
export function useSeo(opts: SeoOptions) {
  const siteUrl = 'https://www.nice-demenagement.fr'
  const path = opts.path || ''
  const baseUrl = siteUrl.replace(/\/$/, '')
  const fullUrl = path ? `${baseUrl}${path}` : `${baseUrl}`
  const image = opts.image || '/images/og-default.png'

  // Nettoyer le titre : retirer les occurrences du nom du site
  // (les pages l'incluent parfois ; @nuxtjs/seo l'ajoute via site.name à la fin)
  const cleanTitle = opts.title
    .replace(/\s*\|\s*Nice Déménagement\s*[-–]?\s*/gi, ' | ')
    .replace(/\s*\|\s*Nice Déménagement\s*/gi, ' | ')
    .replace(/\s*Nice Déménagement\s*[-–]\s*/gi, ' ')
    .replace(/\s*\|\s*\|\s*/g, ' | ')
    .replace(/^\s*\|?\s*/, '')
    .replace(/\s*\|\s*$/, '')
    .trim()

  useSeoMeta({
    title: cleanTitle,
    description: opts.description,
    ogTitle: cleanTitle,
    ogDescription: opts.description,
    ogType: opts.type || 'website',
    ogUrl: fullUrl,
    ogImage: `${baseUrl}${image}`,
    ogSiteName: 'Nice Déménagement',
    ogLocale: 'fr_FR',
    twitterCard: 'summary_large_image',
    twitterTitle: cleanTitle,
    twitterDescription: opts.description,
    twitterImage: `${baseUrl}${image}`,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    author: 'Nice Déménagement',
    publisher: 'Nice Déménagement'
  })

  useHead({
    link: [
      { rel: 'canonical', href: fullUrl },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    meta: opts.keywords?.length ? [
      { name: 'keywords', content: opts.keywords.join(', ') }
    ] : undefined
  })
}
