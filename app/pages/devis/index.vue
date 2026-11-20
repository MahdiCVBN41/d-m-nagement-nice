<script setup lang="ts">
import { SITE } from '~/composables/cities'
const breadcrumb = [
  { name: 'Accueil', url: '/' },
  { name: 'Devis', url: '/devis' }
]

const { getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()

useSeo({
  title: 'Devis gratuit | Nice Déménagement',
  description: 'Demandez votre devis gratuit de déménagement en moins de 24h. Particuliers, entreprises, international. Réponse rapide et sans engagement.',
  path: '/devis',
  keywords: ['devis déménagement', 'devis gratuit déménagement', 'tarif déménagement']
})

injectSchemas([getFullBreadcrumbSchema(breadcrumb)])

const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Bonjour, je souhaite un devis gratuit pour mon déménagement.')}`
</script>

<template>
  <div>
    <BreadcrumbBar :items="breadcrumb" />
    <HeroSection
      title="Demandez votre devis gratuit"
      subtitle="Réponse en 24h — Sans engagement — Tarifs transparents"
      cta-text="Accéder au formulaire de devis"
    />
    <section class="section">
      <div class="container narrow-content text-center">
        <h2>Plusieurs façons d'obtenir votre devis</h2>
        <p class="lead">
          Choisissez le canal qui vous convient le mieux. Notre équipe vous répond
          rapidement avec une proposition détaillée et négociable.
        </p>

        <div class="devis-channels">
          <a :href="SITE.devisUrl" class="channel-card channel-form">
            <span class="channel-icon">📝</span>
            <h3>Formulaire en ligne</h3>
            <p>Remplissez notre formulaire sécurisé et recevez une réponse sous 24h.</p>
            <span class="btn btn--accent">Accéder au formulaire</span>
          </a>

          <a :href="whatsappUrl" target="_blank" rel="noopener" class="channel-card channel-whatsapp">
            <span class="channel-icon">💬</span>
            <h3>WhatsApp</h3>
            <p>Discutez directement avec notre équipe pour un devis express.</p>
            <span class="btn btn--whatsapp">Discuter sur WhatsApp</span>
          </a>

          <a :href="`tel:${SITE.phone}`" class="channel-card channel-phone">
            <span class="channel-icon">📞</span>
            <h3>Téléphone</h3>
            <p>Appelez-nous, réponse immédiate pendant les heures ouvrées.</p>
            <span class="btn btn--outline">{{ SITE.phoneDisplay }}</span>
          </a>
        </div>

        <p class="devis-note">
          ⏱️ Délai moyen de réponse : <strong>moins de 24h</strong> ·
          💯 Devis <strong>gratuit et sans engagement</strong> ·
          🔒 Données <strong>confidentielles</strong>
        </p>
      </div>
    </section>
    <CtaBanner />
  </div>
</template>

<style scoped>
.lead { color: var(--c-text-light); font-size: 1.1rem; margin-bottom: 2.5rem; }
.devis-channels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}
.channel-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  background: #fff;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: transform .3s, box-shadow .3s;
  color: var(--c-text);
}
.channel-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  color: var(--c-text);
}
.channel-icon { font-size: 3rem; margin-bottom: 1rem; }
.channel-card h3 { margin-bottom: .5rem; }
.channel-card p { color: var(--c-text-light); margin-bottom: 1.5rem; flex-grow: 1; }
.channel-card .btn { width: 100%; }

.channel-whatsapp { border-top: 4px solid #25D366; }
.channel-form { border-top: 4px solid var(--c-primary); }
.channel-phone { border-top: 4px solid var(--c-accent); }

.btn--whatsapp {
  background: #25D366;
  color: #fff;
  border-color: #25D366;
}
.btn--whatsapp:hover {
  background: #1DA851;
  border-color: #1DA851;
}

.devis-note {
  margin-top: 2rem;
  color: var(--c-text-light);
  font-size: .95rem;
}
.text-center { text-align: center; }
.narrow-content { max-width: 1000px; margin: 0 auto; }
</style>
