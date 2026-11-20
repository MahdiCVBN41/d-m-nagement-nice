<script setup lang="ts">
import { COUNTRIES } from '~/composables/countries'

useSeo({
  title: 'Pays desservis | Nice Déménagement International',
  description: 'Découvrez tous les pays desservis par Nice Déménagement pour vos déménagements internationaux : Italie, Espagne, Belgique, Luxembourg, Suisse, Allemagne.',
  path: '/pays',
  keywords: ['déménagement international', 'pays déménagement', 'déménagement Italie', 'déménagement Suisse']
})

const breadcrumb = [
  { name: 'Accueil', url: '/' },
  { name: 'Pays', url: '/pays' }
]

const { getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()
injectSchemas([getFullBreadcrumbSchema(breadcrumb)])
</script>

<template>
  <div>
    <BreadcrumbBar :items="breadcrumb" />
    <section class="section">
      <div class="container">
        <h1>Pays desservis par Nice Déménagement</h1>
        <p>Spécialiste du déménagement international depuis la France vers les pays frontaliers et européens.</p>
        <div class="grid grid--3">
<NuxtLink v-for="country in COUNTRIES" :key="country.slug" :to="`/pays/${country.slug}`" class="card city-card">
              <img :src="country.flag" :alt="country.name" class="city-img" loading="lazy" width="260" height="160" />
              <h3>Déménagement {{ country.name }}</h3>
              <p>Code pays : {{ country.countryCode }}</p>
              <span class="btn btn--outline">Voir la page</span>
            </NuxtLink>
        </div>
      </div>
    </section>
    <CtaBanner />
  </div>
</template>

<style scoped>
.city-card { display: block; color: inherit; }
.city-card:hover { color: inherit; }
.city-card h3 { margin-bottom: .25rem; }
.city-card p { color: var(--c-text-light); margin-bottom: 1rem; }
</style>
