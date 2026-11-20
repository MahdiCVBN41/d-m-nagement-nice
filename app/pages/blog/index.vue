<script setup lang="ts">
import { POSTS } from '~/composables/blog'

const breadcrumb = [
  { name: 'Accueil', url: '/' },
  { name: 'Blog', url: '/blog' }
]

const { getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()

useSeo({
  title: 'Blog & conseils déménagement | Nice Déménagement',
  description: 'Conseils d\'experts pour réussir votre déménagement : checklist, ZFE 2026, estimation du volume, emballage professionnel, garde-meubles, formalités internationales.',
  path: '/blog',
  keywords: ['conseils déménagement', 'guide déménagement', 'blog déménagement', 'checklist déménagement']
})

injectSchemas([getFullBreadcrumbSchema(breadcrumb)])

const posts = [...POSTS].sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
</script>

<template>
  <div>
    <BreadcrumbBar :items="breadcrumb" />
    <section class="section">
      <div class="container">
        <h1>Blog & conseils déménagement</h1>
        <p class="subtitle-blog">Guides pratiques, checklist et actualités pour réussir votre déménagement à Nice, en France et à l'international.</p>

        <div class="blog-grid">
          <NuxtLink v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`" class="blog-card">
            <img :src="post.image" :alt="post.imageAlt" class="blog-thumb" loading="lazy" decoding="async" width="1200" height="630" />
            <div class="blog-card-body">
              <p class="blog-card-meta">
                <time :datetime="post.datePublished">{{ post.datePublished }}</time>
                · {{ post.readingTime }}
              </p>
              <h2>{{ post.title }}</h2>
              <p class="blog-card-desc">{{ post.metaDescription }}</p>
              <span class="blog-card-link">Lire l'article →</span>
            </div>
          </NuxtLink>
        </div>

        <section class="blog-cta-note">
          <p>Un projet de déménagement ? Obtenez votre <a href="https://www.nice-demenagement.fr/devis" rel="noopener" class="inline-link">devis gratuit sous 24h</a> ou découvrez nos <NuxtLink to="/services" class="inline-link">services de déménagement</NuxtLink>.</p>
        </section>
      </div>
    </section>
    <CtaBanner />
  </div>
</template>

<style scoped>
.subtitle-blog { color: #475569; max-width: 720px; line-height: 1.7; margin-bottom: 2rem; }
.blog-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
.blog-card { display: flex; flex-direction: column; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; text-decoration: none; color: inherit; transition: box-shadow .2s, transform .2s; }
.blog-card:hover { box-shadow: 0 8px 24px rgba(30, 64, 175, .14); transform: translateY(-2px); }
.blog-thumb { width: 100%; aspect-ratio: 16/10; object-fit: cover; }
.blog-card-body { padding: 1.1rem 1.2rem 1.3rem; }
.blog-card-meta { color: #94a3b8; font-size: .82rem; margin: 0 0 .5rem; }
.blog-card h2 { margin: 0 0 .5rem; font-size: 1.08rem; line-height: 1.4; color: #1e293b; }
.blog-card-desc { color: #64748b; font-size: .9rem; line-height: 1.6; margin: 0 0 .8rem; }
.blog-card-link { color: #1e40af; font-weight: 700; font-size: .92rem; }
.blog-cta-note { margin-top: 2.5rem; padding: 1.2rem 1.4rem; background: #eef2ff; border-radius: 10px; color: #334155; line-height: 1.7; }
.inline-link { color: #1e40af; font-weight: 600; }
</style>