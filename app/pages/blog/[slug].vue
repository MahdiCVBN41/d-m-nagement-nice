<script setup lang="ts">
import { getPost, POSTS } from '~/composables/blog'

const route = useRoute()
const slug = route.params.slug as string
const post = getPost(slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Article introuvable', fatal: true })
}

const breadcrumb = [
  { name: 'Accueil', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: post.title, url: `/blog/${post.slug}` }
]

const { getFaqSchema, getWebPageSchema, getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()

useSeo({
  title: `${post.title} | Nice Déménagement`,
  description: post.metaDescription,
  path: `/blog/${post.slug}`,
  type: 'article',
  keywords: post.keywords,
  publishedTime: post.datePublished,
  modifiedTime: post.dateModified
})

const siteUrl = 'https://www.nice-demenagement.fr'

injectSchemas([
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteUrl}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.metaDescription,
    image: `${siteUrl}${post.image}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: { '@id': `${siteUrl}/#organization` },
    publisher: { '@id': `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    inLanguage: 'fr-FR',
    articleSection: 'Guide pratique'
  },
  getWebPageSchema(`${post.title} | Nice Déménagement`, post.metaDescription, breadcrumb),
  getFaqSchema(post.faq),
  getFullBreadcrumbSchema(breadcrumb)
])

const relatedPosts = post.relatedPosts
  .map(slug => getPost(slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p))

function renderParagraph(text: string): (string | { label: string; url: string })[] {
  const parts: (string | { label: string; url: string })[] = []
  const regex = /\[([^|\]]+)\|([^\]]+)\]/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push({ label: match[1], url: match[2] })
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts
}

function isLinkPart(part: string | { label: string; url: string }): part is { label: string; url: string } {
  return typeof part !== 'string'
}
</script>

<template>
  <div v-if="post">
    <BreadcrumbBar :items="breadcrumb" />

    <article class="section">
      <div class="container blog-article">
        <p class="blog-meta">
          <time :datetime="post.datePublished">{{ post.datePublished }}</time>
          <span v-if="post.dateModified !== post.datePublished"> · mis à jour le {{ post.dateModified }}</span>
          · {{ post.readingTime }} de lecture
        </p>
        <h1>{{ post.title }}</h1>
        <img :src="post.image" :alt="post.imageAlt" class="blog-cover" loading="eager" decoding="async" width="1200" height="630" />

        <section v-for="section in post.sections" :key="section.h2" class="blog-section">
          <h2>{{ section.h2 }}</h2>
          <p v-for="(para, i) in section.paras" :key="i" class="blog-para">
            <template v-for="(part, j) in renderParagraph(para)" :key="j">
              <NuxtLink v-if="isLinkPart(part)" :to="part.url" class="inline-link" :external="part.url.startsWith('http')">{{ part.label }}</NuxtLink>
              <span v-else>{{ part }}</span>
            </template>
          </p>
          <ul v-if="section.list" class="check-list">
            <li v-for="(item, k) in section.list" :key="k">{{ item }}</li>
          </ul>
        </section>

        <section class="blog-section">
          <h2>Questions fréquentes</h2>
          <details v-for="item in post.faq" :key="item.q" class="faq-item">
            <summary>{{ item.q }}</summary>
            <p>{{ item.a }}</p>
          </details>
        </section>

        <section class="blog-section">
          <h2>Pour aller plus loin</h2>
          <div class="related-links">
            <NuxtLink v-for="link in post.relatedLinks" :key="link.url" :to="link.url" class="related-link" :external="link.url.startsWith('http')">{{ link.label }}</NuxtLink>
          </div>
        </section>

        <section v-if="relatedPosts.length" class="blog-section">
          <h2>Articles complémentaires</h2>
          <div class="related-grid">
            <NuxtLink v-for="rel in relatedPosts" :key="rel.slug" :to="`/blog/${rel.slug}`" class="card related-card">
              <h3>{{ rel.title }}</h3>
              <p>{{ rel.metaDescription }}</p>
              <span class="related-date">{{ rel.datePublished }}</span>
            </NuxtLink>
          </div>
        </section>
      </div>
    </article>

    <CtaBanner />
  </div>
</template>

<style scoped>
.blog-article { max-width: 860px; margin: 0 auto; }
.blog-meta { color: #64748b; font-size: .9rem; margin-bottom: 1rem; }
.blog-cover { width: 100%; height: auto; border-radius: 12px; margin: 1.2rem 0 2rem; }
.blog-section { margin-bottom: 2.5rem; }
.blog-para { color: #334155; line-height: 1.8; font-size: 1.02rem; }
.inline-link { color: #1e40af; font-weight: 600; text-decoration: underline; }
.check-list { list-style: none; padding: 0; display: grid; gap: .5rem; }
.check-list li { position: relative; padding-left: 1.6rem; color: #1e293b; line-height: 1.6; }
.check-list li::before { content: '✓'; position: absolute; left: 0; color: #16a34a; font-weight: 700; }
.faq-item { border: 1px solid #e2e8f0; border-radius: 8px; padding: .8rem 1rem; margin-bottom: .6rem; background: #fff; }
.faq-item summary { cursor: pointer; font-weight: 600; color: #1e293b; }
.faq-item p { margin: .6rem 0 0; color: #475569; line-height: 1.6; }
.related-links { display: flex; flex-wrap: wrap; gap: .6rem; }
.related-link { background: #eef2ff; color: #1e40af; text-decoration: none; padding: .5rem 1rem; border-radius: 6px; font-weight: 600; }
.related-grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
.related-card { text-decoration: none; color: inherit; padding: 1rem; border: 1px solid #e2e8f0; border-radius: 10px; transition: box-shadow .2s; }
.related-card:hover { box-shadow: 0 4px 14px rgba(30, 64, 175, .12); }
.related-card h3 { margin: 0 0 .5rem; font-size: 1rem; color: #1e40af; }
.related-card p { margin: 0 0 .5rem; color: #64748b; font-size: .9rem; line-height: 1.5; }
.related-date { color: #94a3b8; font-size: .8rem; }
</style>
