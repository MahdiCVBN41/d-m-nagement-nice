<script setup lang="ts">
import { SITE } from '~/composables/cities'
import { CITIES } from '~/composables/cities'
import { COUNTRIES } from '~/composables/countries'

const { getOrganizationSchema, getLocalBusinessSchema, getWebsiteSchema, getServiceSchema, getFaqSchema, injectSchemas } = useSeoSchema()

const seoKeywords = [
  'déménagement Nice',
  'déménageur Nice',
  'déménageur Nice pas cher',
  'Nice déménagement',
  'entreprise déménagement Nice',
  'devis déménagement Nice',
  'déménagement Monaco',
  'déménagement Cannes',
  'déménagement Paris',
  'déménagement Lyon',
  'déménagement Marseille',
  'déménagement Nantes',
  'déménagement Lille',
  'déménagement Strasbourg',
  'déménagement France',
  'déménagement Italie',
  'déménagement Suisse',
  'déménagement Allemagne',
  'déménagement Belgique',
  'déménagement Luxembourg',
  'déménagement Espagne',
  'monte-meubles Nice',
  'garde-meubles Nice',
  'déménagement international',
  'déménagement pas cher',
  'déménagement clé en main'
]

const faqsForSchema = [
  { q: `Comment obtenir un devis gratuit pour mon déménagement depuis Nice ?`, a: `Remplissez notre formulaire en ligne sur la page Devis Gratuit. Notre équipe vous recontacte sous 24h avec une proposition détaillée, négociable et adaptée à votre budget.` },
  { q: `Proposez-vous une assurance pour les déménagements locaux et internationaux ?`, a: `Oui, tous nos déménagements sont couverts par une assurance responsabilité civile professionnelle. Pour les biens de valeur, nous proposons une extension "tous risques".` },
  { q: `Quels types de déménagements réalisez-vous à Nice ?`, a: `Nous intervenons pour les particuliers et entreprises : appartements, villas, studios, bureaux, commerces. Déménagement local, national et international.` },
  { q: `Vos tarifs sont-ils négociables ?`, a: `Absolument. Nos devis sont indicatifs et toujours négociables. Nous proposons des forfaits clé en main ou des formules économiques.` },
  { q: `Quels sont vos délais pour un déménagement ?`, a: `Local : 48h à 72h. National : 5 à 10 jours ouvrés. International : 10 à 21 jours selon le pays et les formalités.` },
  { q: `Proposez-vous le démontage et remontage des meubles ?`, a: `Oui, nos déménageurs sont outillés pour démonter et remonter armoires, lits, bibliothèques, cuisines équipées et bureaux.` }
]

useSeo({
  title: `Déménageur professionnel à Nice & en France | Nice Déménagement`,
  description: `Déménageur professionnel assuré à Nice. Déménagement local, national et international (Italie, Suisse, Allemagne, Belgique, Espagne). Devis gratuit et négociable sous 24h ☎ ${SITE.phoneDisplay}`,
  path: '/',
  keywords: seoKeywords,
  type: 'website'
})

injectSchemas([
  getOrganizationSchema(),
  getWebsiteSchema(),
  getLocalBusinessSchema(),
  getServiceSchema('Déménagement', ['Nice','Paris','Marseille','Lyon','Nantes','Lille','Bordeaux','Toulouse','Montpellier','Strasbourg','Cannes','Antibes','Grasse','Monaco'], '/'),
  getFaqSchema(faqsForSchema)
])

const heroStats = [
  { value: `${SITE.yearsExperience}+`, label: `années d'expérience` },
  { value: `${SITE.satisfactionRate}%`, label: `clients satisfaits` },
  { value: SITE.support, label: `support client` }
]

const allCities = computed(() =>
  CITIES.map(c => ({ slug: c.slug, name: c.name, region: c.region, icon: c.icon }))
)

function thumbPath(slug: string) {
  return `/assets/thumb/${slug}.webp`
}
</script>

<template>
  <div>
    <HeroSection
      :title="`L'expertise du déménagement à Nice et dans toute l'Europe`"
      subtitle="Basée à Nice, notre équipe de déménageurs professionnels est assurée et expérimentée. Déménagement local, national et international. Devis transparents et négociables."
      cta-text="Demandez votre devis gratuit"
    />

    <section class="section hero-stats-section">
      <div class="container">
        <div class="stats-row">
          <div v-for="(s, i) in heroStats" :key="i" class="stat-box" :style="{ animationDelay: `${i * 0.1}s` }">
            <div class="stat-value">{{ s.value }}</div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <ServicesSection />

    <CtaBanner />

    <section class="section zone-section" id="zone">
      <div class="container">
        <h2 class="text-center">Où intervenons-nous ?</h2>
        <p class="text-center subtitle">Déménagement local, national et international. Nous desservons toute la France et l'Europe.</p>

        <div class="zone-block">
          <h3>Nos villes en France</h3>
          <div class="zone-grid">
            <NuxtLink v-for="city in allCities" :key="city.slug" :to="`/ville/${city.slug}`" class="zone-card">
              <img
                :src="thumbPath(city.slug)"
                :alt="city.name"
                class="zone-img"
                loading="lazy"
                decoding="async"
                width="56"
                height="56"
              />
              <div>
                <div class="zone-name">{{ city.name }}</div>
                <div class="zone-region">{{ city.region }}</div>
              </div>
              <span class="zone-arrow">→</span>
            </NuxtLink>
          </div>
          <NuxtLink to="/villes" class="btn btn--outline">Voir toutes les villes</NuxtLink>
        </div>

        <div class="zone-block">
          <h3>Déménagement international</h3>
          <div class="zone-grid">
            <NuxtLink v-for="country in COUNTRIES" :key="country.slug" :to="`/pays/${country.slug}`" class="zone-card">
              <img
                :src="thumbPath(country.slug)"
                :alt="country.name"
                class="zone-img"
                loading="lazy"
                decoding="async"
                width="56"
                height="56"
              />
              <div>
                <div class="zone-name">{{ country.name }}</div>
                <div class="zone-region">Code {{ country.countryCode }}</div>
              </div>
              <span class="zone-arrow">→</span>
            </NuxtLink>
          </div>
          <NuxtLink to="/pays" class="btn btn--outline">Voir tous les pays</NuxtLink>
        </div>
      </div>
    </section>

    <TestimonialsSection />

    <section class="section section--alt content-rich">
      <div class="container narrow-content">
        <h2>Pourquoi choisir Nice Déménagement ?</h2>
        <p>
          <strong>Nice Déménagement</strong> est votre partenaire de confiance pour tous vos projets de déménagement à Nice, sur la Côte d'Azur, dans toute la France et à l'international. Forts de plus de <strong>{{ SITE.yearsExperience }} ans d'expérience</strong>, nous avons accompagné des centaines de particuliers et d'entreprises dans leurs transferts vers <strong>Paris, Lyon, Marseille, Bordeaux, Lille, Strasbourg, Toulouse, Nantes, Montpellier</strong> mais aussi vers <strong>l'Italie, la Suisse, l'Allemagne, la Belgique, le Luxembourg et l'Espagne</strong>.
        </p>
        <p>
          Notre équipe de déménageurs professionnels est <strong>assurée et expérimentée</strong>. Nous organisons votre déménagement en toute sérénité, que ce soit un déménagement local à Nice, Cannes, Antibes, Monaco, Grasse ou Cagnes-sur-Mer, un déménagement longue distance vers toutes les villes de France, ou encore un déménagement international avec gestion des formalités douanières.
        </p>
        <p>
          Notre force : des <strong>devis transparents et négociables</strong>, un accompagnement personnalisé, une flotte de camions adaptés (de 20 m³ à 40 m³ avec hayon), le suivi GPS en temps réel, le démontage et la remontage de vos meubles, et une <strong>assurance tous risques</strong> qui protège vos biens les plus fragiles. Avec plus de 98% de clients satisfaits, nous sommes devenus la référence du déménagement sur la Côte d'Azur.
        </p>
        <h3>Une expertise reconnue sur la Côte d'Azur</h3>
        <p>
          Basés à Nice, nous connaissons parfaitement les contraintes de la ville : ruelles étroites du Vieux-Nice, immeubles haussmanniens sans ascenseur, accès en bord de mer, quartiers en pente. Nous disposons d'un <strong>monte-meubles électrique</strong> pour les étages élevés, de fourgons compacts pour les centres-villes, et d'un <strong>garde-meubles sécurisé</strong> pour stocker vos affaires le temps nécessaire.
        </p>
        <h3>Déménagement international : l'Europe à portée de camion</h3>
        <p>
          Spécialistes du déménagement transfrontalier, nous intervenons régulièrement vers l'<strong>Italie</strong> (Milan, Rome, Turin, Gênes), la <strong>Suisse</strong> (Genève, Lausanne, Zurich), le <strong>Luxembourg</strong>, l'<strong>Allemagne</strong> (Munich, Berlin, Francfort), la <strong>Belgique</strong> (Bruxelles, Anvers) et l'<strong>Espagne</strong> (Barcelone, Madrid). Nous prenons en charge l'intégralité des formalités douanières, l'emballage professionnel, le transport et la livraison à votre nouvelle adresse à l'étranger.
        </p>
        <h3>Des tarifs adaptés à tous les budgets</h3>
        <p>
          Nous savons que chaque budget est différent. C'est pourquoi nos devis sont <strong>négociables</strong> et adaptés à votre situation : formule "clé en main" avec emballage complet, formule "confort" avec démontage, ou formule "économie" où vous gérez l'emballage. Profitez aussi des tarifs réduits en hors-saison et du regroupement de chargements.
        </p>
      </div>
    </section>

    <FaqHome />

    <CtaBanner />
  </div>
</template>

<style scoped>
.hero-stats-section { padding: 2.5rem 0; }
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 1.5rem;
  max-width: 750px;
  margin: 0 auto;
}
.stat-box {
  text-align: center;
  padding: 1.75rem 1rem;
  background: #fff;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  animation: cardSlideUp .6s ease backwards;
  transition: transform .3s;
}
.stat-box:hover { transform: translateY(-4px); }
.stat-value {
  font-size: 2.75rem;
  font-weight: 700;
  color: var(--c-primary);
}
.stat-label { color: var(--c-text-light); font-weight: 500; }

.zone-section .subtitle { color: var(--c-text-light); margin-bottom: 2.5rem; }
.zone-block {
  margin-bottom: 3rem;
}
.zone-block h3 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.zone-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.zone-card {
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: 1rem 1.25rem;
  background: #fff;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  color: var(--c-text);
  transition: all .3s;
  animation: cardSlideUp .5s ease backwards;
}
.zone-card:hover {
  transform: translateX(5px);
  box-shadow: var(--shadow-md);
  color: var(--c-primary);
}
.zone-icon { font-size: 1.5rem; flex-shrink: 0; }
.zone-img {
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
}
.zone-name { font-weight: 600; }
.zone-region { font-size: .8rem; color: var(--c-text-light); }
.zone-arrow {
  margin-left: auto;
  color: var(--c-primary);
  transition: transform .3s;
}
.zone-card:hover .zone-arrow { transform: translateX(4px); }
.zone-block .btn { display: block; margin: 0 auto; }

.content-rich { line-height: 1.8; }
.narrow-content { max-width: 850px; }
.content-rich h2, .content-rich h3 { margin-top: 2rem; margin-bottom: 1rem; }
.content-rich p { margin-bottom: 1.25rem; color: #374151; }

.text-center { text-align: center; }
.subtitle { margin-bottom: .5rem; }

@keyframes cardSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
