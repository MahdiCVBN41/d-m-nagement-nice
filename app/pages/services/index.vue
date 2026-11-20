<script setup lang="ts">
const breadcrumb = [
  { name: 'Accueil', url: '/' },
  { name: 'Services', url: '/services' }
]

const { getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()

useSeo({
  title: 'Nos services de déménagement | Nice Déménagement',
  description: 'Découvrez tous nos services : déménagement particulier, entreprise, monte-meubles, garde-meubles, emballage, transport de piano, déménagement international.',
  path: '/services',
  keywords: ['services déménagement', 'prestations déménagement']
})

injectSchemas([getFullBreadcrumbSchema(breadcrumb)])

const services = [
  { icon: '🏠', title: 'Déménagement de particuliers', desc: 'Maison, appartement, studio. Devis personnalisé et service complet ou économique selon votre budget.' },
  { icon: '🏢', title: 'Déménagement d\'entreprises', desc: 'Transfert de bureaux, archives, matériel informatique. Travail horaires décalés pour limiter l\'impact sur votre activité.' },
  { icon: '🛗', title: 'Monte-meubles', desc: 'Monte-meubles électrique pour les immeubles sans ascenseur. Atteint le 8e étage. Idéal Vieux-Nice, haussmanniens parisiens.' },
  { icon: '📦', title: 'Garde-meubles', desc: 'Stockage sécurisé et surveillé 24h/24. Pour quelques jours ou plusieurs mois, à Nice et dans toute la France.' },
  { icon: '✨', title: 'Emballage professionnel', desc: 'Cartons renforcés, papier bulle, housses matelassées. Emballage et déballage par nos équipes.' },
  { icon: '🎹', title: 'Transport de piano', desc: 'Piano droit, piano queue, coffre-fort, œuvres d\'art, antiquités. Emballage spécifique et assurance sur mesure.' },
  { icon: '🌍', title: 'Déménagement international', desc: 'Italie, Suisse, Belgique, Luxembourg, Espagne, Allemagne. Gestion formalités douanières.' },
  { icon: '⚡', title: 'Déménagement express', desc: 'Service d\'urgence en moins de 48h sous réserve de disponibilité. Pour les mutations et départs imprévus.' }
]
</script>

<template>
  <div>
    <BreadcrumbBar :items="breadcrumb" />
    <HeroSection
      title="Nos services de déménagement"
      subtitle="Une offre complète pour tous vos besoins, du studio à la maison, du particulier à l'entreprise"
    />
    <section class="section">
      <div class="container">
        <div class="grid grid--3">
          <div v-for="srv in services" :key="srv.title" class="card">
            <div class="service-icon">{{ srv.icon }}</div>
            <h3>{{ srv.title }}</h3>
            <p>{{ srv.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    <CtaBanner />

  </div>
</template>

<style scoped>
.service-icon { font-size: 2.5rem; margin-bottom: .75rem; }
</style>
