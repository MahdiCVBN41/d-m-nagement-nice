<script setup lang="ts">
import { CITIES } from '~/composables/cities'

useSeo({
  title: 'Villes desservies | Nice Déménagement',
  description: 'Découvrez toutes les villes desservies par Nice Déménagement en France : Nice, Paris, Marseille, Lyon, Nantes, Lille, Bordeaux, Toulouse et plus encore.',
  path: '/villes',
  keywords: ['déménagement ville', 'villes desservies déménagement']
})

const breadcrumb = [
  { name: 'Accueil', url: '/' },
  { name: 'Villes', url: '/villes' }
]

const { getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()
injectSchemas([getFullBreadcrumbSchema(breadcrumb)])
</script>

<template>
  <div>
    <BreadcrumbBar :items="breadcrumb" />
    <section class="section">
      <div class="container">
        <h1>Villes desservies par Nice Déménagement</h1>
        <p>Nous intervenons dans les principales villes françaises avec un service de déménagement professionnel et personnalisé.</p>
        <div class="grid grid--3">
<NuxtLink v-for="city in CITIES" :key="city.slug" :to="`/ville/${city.slug}`" class="card city-card">
              <img
                v-if="city.icon && !city.icon.startsWith('📍')"
                :src="city.icon"
                :alt="city.name"
                class="city-img"
                loading="lazy"
                width="260"
                height="160"
              />
              <span v-else class="city-icon-fallback">📍</span>
              <h3>Déménagement {{ city.name }}</h3>
              <p>{{ city.region }}</p>
              <span class="btn btn--outline">Voir la page</span>
            </NuxtLink>
        </div>
      </div>
    </section>
    <CtaBanner />
  </div>
</template>

<style scoped>
.city-card { display: block; color: inherit; overflow: hidden; }
.city-card:hover { color: inherit; }
.city-card h3 { margin-bottom: .25rem; padding: 0 1rem; }
.city-card p { color: var(--c-text-light); margin-bottom: 1rem; padding: 0 1rem; }
.city-card .btn { margin: 0 1rem 1rem; }
.city-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  margin: -2rem -2rem 1rem -2rem;
  width: calc(100% + 4rem);
}
.city-icon-fallback {
  font-size: 2.5rem;
  display: block;
  margin-bottom: .5rem;
}
</style>
