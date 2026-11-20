<script setup lang="ts">
import { getCountry } from '~/composables/countries'
import { SITE } from '~/composables/cities'

const route = useRoute()
const countrySlug = route.params.country as string
const country = getCountry(countrySlug)

if (!country) {
  throw createError({ statusCode: 404, statusMessage: 'Pays non desservi', fatal: true })
}

const { getLocalBusinessSchema, getWebPageSchema, getServiceSchema, getFaqSchema, getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()

useSeo({
  title: country.title,
  description: country.metaDescription,
  path: `/pays/${country.slug}`,
  keywords: [`déménagement ${country.name}`, `déménagement international ${country.name}`, `transport ${country.name}`],
  type: 'website'
})

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Pays', url: '/pays' },
  { name: country.name, url: `/pays/${country.slug}` }
]

injectSchemas([
  getLocalBusinessSchema(country.name),
  getWebPageSchema(country.title, country.metaDescription, breadcrumbItems),
  getServiceSchema(`Déménagement vers ${country.name}`, [country.name], `/pays/${country.slug}`),
  getFaqSchema(country.faq),
  getFullBreadcrumbSchema(breadcrumbItems)
])

const breadcrumb = breadcrumbItems
</script>

<template>
  <div v-if="country">
    <BreadcrumbBar :items="breadcrumb" />

    <section class="section city-hero">
      <div class="container">
        <h1>{{ country.h1 }}</h1>
        <p class="city-intro">{{ country.intro }}</p>
        <div class="hero-cta">
          <a :href="SITE.devisUrl" class="btn btn--accent" rel="noopener">Devis gratuit</a>
          <a :href="`tel:${SITE.phone}`" class="btn btn--outline">📞 {{ SITE.phoneDisplay }}</a>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <h2>Pourquoi nous choisir pour votre déménagement en {{ country.name }}</h2>
        <div class="grid grid--2">
          <ul class="check-list">
            <li v-for="(item, i) in country.whyChoose" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Nos prestations pour la {{ country.name }}</h2>
        <div class="grid grid--3">
          <div v-for="(srv, i) in country.services" :key="i" class="service-item">
            <span class="check">✓</span> {{ srv }}
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <h2>Notre méthode de déménagement international</h2>
        <div class="grid grid--3">
          <div v-for="(step, i) in country.method" :key="i" class="card">
            <div class="step-number">{{ i + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Formalités douanières pour la {{ country.name }}</h2>
        <p>{{ country.customs }}</p>
        <h2>Assurance et matériel</h2>
        <div class="grid grid--2">
          <div>
            <h3>Assurance</h3>
            <p>{{ country.assurance }}</p>
            <h3>Nos camions</h3>
            <p>{{ country.trucks }}</p>
          </div>
          <div>
            <h3>Équipement</h3>
            <ul class="check-list">
              <li v-for="(eq, i) in country.equipment" :key="i">{{ eq }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <h2>Villes desservies en {{ country.name }}</h2>
        <div class="zones-grid">
          <span v-for="(zone, i) in country.zonesServed" :key="i" class="zone-tag">{{ zone }}</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Conseils pour votre déménagement en {{ country.name }}</h2>
        <div class="grid grid--2">
          <div v-for="(tip, i) in country.tips" :key="i" class="card">
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <FaqSection :faq="country.faq" :title="`FAQ : Déménagement en ${country.name}`" />

    <section class="section">
      <div class="container">
        <h2>Conclusion</h2>
        <p>{{ country.conclusion }}</p>
      </div>
    </section>

    <!-- Internal linking : villes de départ fréquentes vers ce pays -->
    <section class="section section--alt">
      <div class="container">
        <h2>Nos départs vers {{ country.name }} depuis toute la France</h2>
        <p class="subtitle-internal">
          Nous organisons des déménagements réguliers depuis les principales villes françaises
          vers {{ country.name }}. Découvrez nos pages dédiées par ville de départ :
        </p>
        <div class="grid grid--4">
          <NuxtLink to="/ville/nice" class="internal-link-card">
            <span class="internal-link-icon">📍</span>
            <div><h3>Déménagement depuis Nice</h3><p>Proximité frontalière</p></div>
          </NuxtLink>
          <NuxtLink to="/ville/paris" class="internal-link-card">
            <span class="internal-link-icon">📍</span>
            <div><h3>Déménagement depuis Paris</h3><p>Départs hebdomadaires</p></div>
          </NuxtLink>
          <NuxtLink to="/ville/lyon" class="internal-link-card">
            <span class="internal-link-icon">📍</span>
            <div><h3>Déménagement depuis Lyon</h3><p>Hub Rhône-Alpes</p></div>
          </NuxtLink>
          <NuxtLink to="/ville/marseille" class="internal-link-card">
            <span class="internal-link-icon">📍</span>
            <div><h3>Déménagement depuis Marseille</h3><p>Port méditerranéen</p></div>
          </NuxtLink>
        </div>
        <p class="subtitle-internal">
          Consultez aussi la <NuxtLink to="/villes" class="internal-inline-link">liste complète de nos villes desservies</NuxtLink>
          et nos <NuxtLink to="/pays" class="internal-inline-link">autres destinations internationales</NuxtLink>.
        </p>
      </div>
    </section>

    <CtaBanner />

  </div>
</template>

<style scoped>
.city-hero { background: linear-gradient(135deg, var(--c-primary-dark), var(--c-primary)); color: #fff; }
.city-hero h1 { color: #fff; }
.city-intro { color: #e2e8f0; font-size: 1.1rem; max-width: 900px; }
.hero-cta { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem; }
.hero-cta .btn--outline { background: transparent; color: #fff; border-color: #fff; }
.check-list { list-style: none; }
.check-list li { padding: .5rem 0 .5rem 2rem; position: relative; }
.check-list li::before { content: '✓'; position: absolute; left: .25rem; color: var(--c-success); font-weight: 700; }
.service-item { padding: .75rem 0; border-bottom: 1px solid var(--c-border); }
.service-item .check { color: var(--c-primary); font-weight: 700; margin-right: .5rem; }
.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--c-primary);
  color: #fff;
  border-radius: 50%;
  font-weight: 700;
  margin-bottom: .75rem;
}
.zones-grid { display: flex; flex-wrap: wrap; gap: .5rem; }
.zone-tag { background: var(--c-bg-alt); border: 1px solid var(--c-border); padding: .35rem .75rem; border-radius: 999px; font-size: .875rem; }

/* Internal linking contextuel */
.subtitle-internal { color: var(--c-text-light); margin-bottom: 1.5rem; max-width: 800px; }
.internal-inline-link { color: var(--c-primary); font-weight: 600; text-decoration: underline; text-underline-offset: 3px; }
.internal-inline-link:hover { color: var(--c-primary-dark); }
.internal-link-card {
  display: flex;
  align-items: center;
  gap: .85rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  color: var(--c-text);
  transition: transform .25s, box-shadow .25s, color .25s;
  animation: cardSlideUp .5s ease backwards;
}
.internal-link-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  color: var(--c-primary);
}
.internal-link-icon { font-size: 1.85rem; flex-shrink: 0; }
.internal-link-card h3 { font-size: 1rem; margin-bottom: .15rem; }
.internal-link-card p { font-size: .82rem; color: var(--c-text-light); margin: 0; }

@keyframes cardSlideUp {
  from { opacity: 0; transform: translateY(15px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
