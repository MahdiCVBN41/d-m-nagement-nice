<script setup lang="ts">
import { getCity, SITE, CITIES } from '~/composables/cities'

const route = useRoute()
const citySlug = route.params.city as string
const city = getCity(citySlug)

if (!city) {
  throw createError({ statusCode: 404, statusMessage: 'Ville non desservie', fatal: true })
}

const { getLocalBusinessSchema, getWebPageSchema, getServiceSchema, getFaqSchema, getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()

useSeo({
  title: city.title,
  description: city.metaDescription,
  path: `/ville/${city.slug}`,
  keywords: [`déménagement ${city.name}`, `déménageur ${city.name}`, `devis déménagement ${city.name}`, `entreprise déménagement ${city.name}`],
  type: 'website'
})

const breadcrumbItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Villes', url: '/villes' },
  { name: city.name, url: `/ville/${city.slug}` }
]

injectSchemas([
  getLocalBusinessSchema(city.name, city.geo),
  getWebPageSchema(city.title, city.metaDescription, breadcrumbItems),
  getServiceSchema(`Déménagement à ${city.name}`, [city.name], `/ville/${city.slug}`),
  getFaqSchema(city.faq),
  getFullBreadcrumbSchema(breadcrumbItems)
])

const breadcrumb = breadcrumbItems

// Internal linking contextuel : villes voisines pertinentes par proximité géographique
const nearbyCitiesMap: Record<string, string[]> = {
  nice:       ['cannes', 'antibes', 'monaco', 'grasse'],
  cannes:     ['antibes', 'grasse', 'monaco', 'nice'],
  antibes:    ['cannes', 'nice', 'grasse', 'monaco'],
  grasse:     ['cannes', 'antibes', 'nice', 'monaco'],
  monaco:     ['nice', 'cannes', 'antibes', 'grasse'],
  marseille:  ['nice', 'toulouse', 'montpellier', 'lyon'],
  lyon:       ['marseille', 'grenoble', 'paris', 'bordeaux'],
  grenoble:   ['lyon', 'marseille', 'montpellier', 'toulouse'],
  montpellier:['marseille', 'toulouse', 'lyon', 'bordeaux'],
  toulouse:   ['bordeaux', 'montpellier', 'marseille', 'grenoble'],
  bordeaux:   ['toulouse', 'nantes', 'montpellier', 'paris'],
  nantes:     ['bordeaux', 'paris', 'lille', 'strasbourg'],
  lille:      ['paris', 'strasbourg', 'nantes', 'bordeaux'],
  strasbourg: ['paris', 'lille', 'lyon', 'grenoble'],
  paris:      ['lille', 'strasbourg', 'lyon', 'nantes']
}

const nearbyCities = (nearbyCitiesMap[city.slug] || [])
  .map(slug => CITIES.find(c => c.slug === slug))
  .filter(Boolean)
  .slice(0, 4)

// Services internes à mettre en avant depuis chaque page ville
const relatedServices = [
  { slug: 'particuliers', icon: '🏠', label: 'Déménagement particulier' },
  { slug: 'entreprises', icon: '🏢', label: 'Déménagement entreprise' },
  { slug: 'monte-meubles', icon: '🪜', label: 'Monte-meubles électrique' },
  { slug: 'emballage', icon: '📦', label: 'Emballage professionnel' },
  { slug: 'piano', icon: '🎹', label: 'Transport de piano' }
]
</script>

<template>
  <div v-if="city">
    <BreadcrumbBar :items="breadcrumb" />

    <section class="section city-hero">
      <div class="container">
        <h1>{{ city.h1 }}</h1>
        <p class="city-intro">{{ city.intro }}</p>
        <div class="hero-cta">
          <a :href="SITE.devisUrl" class="btn btn--accent" rel="noopener">Devis gratuit</a>
          <a :href="`tel:${SITE.phone}`" class="btn btn--outline">📞 {{ SITE.phoneDisplay }}</a>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <h2>Pourquoi choisir Nice Déménagement à {{ city.name }}</h2>
        <div class="grid grid--2">
          <ul class="check-list">
            <li v-for="(item, i) in city.whyChoose" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Nos prestations à {{ city.name }}</h2>
        <div class="grid grid--3">
          <div v-for="(srv, i) in city.services" :key="i" class="service-item">
            <span class="check">✓</span> {{ srv }}
          </div>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <h2>Notre méthode de déménagement</h2>
        <div class="grid grid--3">
          <div v-for="(step, i) in city.method" :key="i" class="card">
            <div class="step-number">{{ i + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Nos garanties</h2>
        <div class="grid grid--2">
          <ul class="check-list">
            <li v-for="(g, i) in city.guarantees" :key="i">{{ g }}</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <h2>Assurance et matériel</h2>
        <div class="grid grid--2">
          <div>
            <h3>Assurance</h3>
            <p>{{ city.assurance }}</p>
            <h3>Nos camions</h3>
            <p>{{ city.trucks }}</p>
          </div>
          <div>
            <h3>Équipement</h3>
            <ul class="check-list">
              <li v-for="(eq, i) in city.equipment" :key="i">{{ eq }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2>Zones desservies à {{ city.name }}</h2>
        <div class="zones-grid">
          <span v-for="(zone, i) in city.zonesServed" :key="i" class="zone-tag">{{ zone }}</span>
        </div>
        <div class="city-info">
          <p><strong>Région :</strong> {{ city.region }}</p>
          <p><strong>Code postal :</strong> {{ city.postalCode }}</p>
          <p v-if="city.population"><strong>Population :</strong> {{ city.population }}</p>
          <p v-if="city.distanceFromNice"><strong>Distance depuis Nice :</strong> {{ city.distanceFromNice }}</p>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <h2>Conseils pour votre déménagement à {{ city.name }}</h2>
        <div class="grid grid--2">
          <div v-for="(tip, i) in city.tips" :key="i" class="card">
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <FaqSection :faq="city.faq" :title="`FAQ : Déménagement à ${city.name}`" />

    <section class="section">
      <div class="container">
        <h2>Conclusion</h2>
        <p>{{ city.conclusion }}</p>
      </div>
    </section>

    <!-- Internal linking : services dédiés à cette ville -->
    <section v-if="relatedServices.length" class="section section--alt">
      <div class="container">
        <h2>Nos services dédiés à {{ city.name }}</h2>
        <p class="subtitle-internal">
          Que vous déménagiez un appartement, un bureau ou un objet fragile,
          notre équipe met à votre disposition des prestations sur mesure à {{ city.name }} :
        </p>
        <div class="grid grid--3">
          <NuxtLink v-for="srv in relatedServices" :key="srv.slug" :to="`/services/${srv.slug}`" class="internal-link-card">
            <span class="internal-link-icon">{{ srv.icon }}</span>
            <div>
              <h3>{{ srv.label }}</h3>
              <p>En savoir plus sur {{ srv.label.toLowerCase() }} à {{ city.name }}</p>
            </div>
            <span class="internal-link-arrow">→</span>
          </NuxtLink>
        </div>
        <p class="subtitle-internal">
          Besoin de stocker vos meubles ? Découvrez notre
          <NuxtLink to="/garde-meubles" class="internal-inline-link">garde-meubles sécurisé</NuxtLink>.
        </p>
      </div>
    </section>

    <!-- Internal linking : villes voisines desservies -->
    <section v-if="nearbyCities.length" class="section">
      <div class="container">
        <h2>Villes voisines que nous desservons</h2>
        <p class="subtitle-internal">
          Nice Déménagement intervient également dans les villes proches de {{ city.name }}.
          Découvrez nos pages dédiées pour des informations locales détaillées :
        </p>
        <div class="grid grid--4">
          <NuxtLink v-for="nc in nearbyCities" :key="nc!.slug" :to="`/ville/${nc!.slug}`" class="internal-link-card">
            <span class="internal-link-icon">📍</span>
            <div>
              <h3>Déménagement {{ nc!.name }}</h3>
              <p>{{ nc!.region }}</p>
            </div>
            <span class="internal-link-arrow">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Internal linking : déménagement international -->
    <section class="section section--alt">
      <div class="container">
        <h2>Déménagement international depuis {{ city.name }}</h2>
        <p class="subtitle-internal">
          Vous quittez {{ city.name }} pour un pays frontalier ? Nos équipes maîtrisent
          les formalités douanières et le transport européen :
        </p>
        <div class="grid grid--3">
          <NuxtLink to="/pays/italie" class="internal-link-card">
            <span class="internal-link-icon">🇮🇹</span>
            <div><h3>Déménagement vers l'Italie</h3><p>Milan, Rome, Turin, Gênes</p></div>
          </NuxtLink>
          <NuxtLink to="/pays/suisse" class="internal-link-card">
            <span class="internal-link-icon">🇨🇭</span>
            <div><h3>Déménagement vers la Suisse</h3><p>Genève, Lausanne, Zurich</p></div>
          </NuxtLink>
          <NuxtLink to="/pays" class="internal-link-card">
            <span class="internal-link-icon">🌍</span>
            <div><h3>Toutes destinations</h3><p>Allemagne, Belgique, Espagne, Luxembourg</p></div>
          </NuxtLink>
        </div>
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
.zones-grid { display: flex; flex-wrap: wrap; gap: .5rem; margin-bottom: 1.5rem; }
.zone-tag { background: var(--c-bg-alt); border: 1px solid var(--c-border); padding: .35rem .75rem; border-radius: 999px; font-size: .875rem; }
.city-info { background: var(--c-bg-alt); padding: 1.5rem; border-radius: var(--radius-md); }
.city-info p { margin-bottom: .35rem; }

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
.internal-link-arrow {
  margin-left: auto;
  color: var(--c-primary);
  font-weight: 700;
  transition: transform .25s;
}
.internal-link-card:hover .internal-link-arrow { transform: translateX(4px); }

@keyframes cardSlideUp {
  from { opacity: 0; transform: translateY(15px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
