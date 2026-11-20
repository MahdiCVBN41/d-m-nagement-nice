<script setup lang="ts">
import { SITE } from '~/composables/cities'

const faqs = [
  {
    q: `Comment obtenir un devis gratuit pour mon déménagement depuis Nice ?`,
    a: `Vous pouvez obtenir un devis gratuit et sans engagement en remplissant notre formulaire en ligne sur la page "Devis Gratuit". Renseignez la date, les volumes (nombre de pièces, type de meubles) et les villes de départ et d'arrivée (Nice vers Paris, Monaco, Cannes, Antibes, ou toute autre ville française ou internationale). Notre équipe vous recontacte sous 24h avec une proposition détaillée, négociable et adaptée à votre budget.`
  },
  {
    q: `Proposez-vous l'assurance pour les déménagements locaux et internationaux ?`,
    a: `Oui, tous nos déménagements sont couverts par une assurance responsabilité civile professionnelle. Pour les biens de valeur (œuvres d'art, instruments de musique, objets fragiles), nous proposons une extension de garantie "tous risques" avec une franchise réduite. Lors d'un déménagement international vers l'Italie, la Suisse, l'Allemagne, la Belgique, l'Espagne ou le Luxembourg, nous souscrivons automatiquement une assurance transport incluant les dommages et le vol.`
  },
  {
    q: `Quels types de déménagements réalisez-vous à Nice et dans les Alpes-Maritimes ?`,
    a: `Nous intervenons pour tous types de déménagements : appartements, villas, studios, bureaux, commerces. Que ce soit un déménagement local à Nice, Cannes, Antibes, Grasse, Cagnes-sur-Mer, ou un déménagement longue distance vers Paris, Lyon, Marseille, Bordeaux, Lille, Strasbourg. Nous disposons d'une flotte de camions adaptés aux centres-villes étroits (camions 20m³, 40m³, avec hayon). Nos équipes sont formées au démontage/remontage de meubles et à l'emballage professionnel.`
  },
  {
    q: `Vos tarifs sont-ils négociables ? Proposez-vous des forfaits ?`,
    a: `Absolument, nous savons que chaque budget est différent. Nos devis sont donnés à titre indicatif et sont toujours négociables en fonction de la période (hors saison, regroupement de chargements), du volume exact après visite, ou des services optionnels que vous souhaitez ajouter ou retirer. Nous proposons des forfaits "clé en main" (emballage, chargement, transport, déchargement, remontage) ou des formules "économie" où vous assurez vous-même l'emballage.`
  },
  {
    q: `Quels sont vos délais pour un déménagement depuis Nice vers une autre ville ?`,
    a: `Pour un déménagement local (Nice et sa région), nous pouvons intervenir sous 48h à 72h selon disponibilité. Pour un déménagement national (Paris, Lyon, Marseille, etc.), comptez généralement 5 à 10 jours ouvrés, selon la distance et le volume. Pour l'international (Italie, Suisse, Allemagne, Belgique, Espagne, Luxembourg), les délais varient entre 10 et 21 jours en fonction des formalités douanières et du mode de transport.`
  },
  {
    q: `Faut-il être présent le jour du déménagement ?`,
    a: `Il n'est pas obligatoire d'être présent, mais nous recommandons d'être sur place au début et à la fin des opérations pour un état des lieux et la signature des documents. Si vous ne pouvez pas être là, vous pouvez désigner une personne de confiance (voisin, famille, mandataire). Pour les déménagements internationaux, nous gérons l'intégralité des formalités avec le garde-meuble ou le destinataire final.`
  },
  {
    q: `Proposez-vous le démontage et remontage des meubles ?`,
    a: `Oui, nos déménageurs sont outillés pour démonter/remonter la plupart des meubles : armoires, lits, sommiers, bibliothèques, cuisines équipées, bureaux. Nous prenons soin de protéger chaque pièce avec du film bulle et des couvertures. Le service est inclus dans nos formules "confort" ou peut être ajouté en option.`
  }
]

const schemaJson = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a }
  }))
}))

useHead(() => ({
  script: [{ type: 'application/ld+json', innerHTML: schemaJson.value }]
}))
</script>

<template>
  <section class="section faq-home" id="faq">
    <div class="container">
      <h2 class="text-center">Tout ce que vous devez savoir sur votre déménagement à Nice</h2>
      <p class="text-center subtitle">Devis, assurance, délais, matériel — On répond à toutes vos interrogations</p>

      <div class="faq-accordion">
        <details v-for="(item, i) in faqs" :key="i" class="faq-item">
          <summary>
            <span>{{ item.q }}</span>
            <span class="faq-toggle" aria-hidden="true">+</span>
          </summary>
          <div class="faq-answer">
            <p>{{ item.a }}</p>
          </div>
        </details>
      </div>

      <div class="faq-cta">
        <p>Vous avez d'autres questions ?</p>
        <a :href="SITE.devisUrl" class="btn btn--accent">Demandez un devis gratuit</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-home .subtitle { color: var(--c-text-light); margin-bottom: 2.5rem; }

.faq-accordion {
  max-width: 800px;
  margin: 0 auto;
}
.faq-item {
  background: #fff;
  border-radius: var(--radius-md);
  margin-bottom: 1rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow .3s;
}
.faq-item:hover { box-shadow: var(--shadow-md); }
.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.05rem;
  list-style: none;
  transition: background .2s;
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item[open] summary { background: var(--c-bg-alt); color: var(--c-primary); }
.faq-toggle {
  font-size: 1.5rem;
  color: var(--c-primary);
  transition: transform .3s;
  flex-shrink: 0;
}
.faq-item[open] .faq-toggle { transform: rotate(45deg); }
.faq-answer {
  padding: 0 1.5rem 1.5rem;
  color: var(--c-text-light);
  animation: fadeIn .3s ease;
}
.faq-answer p { margin: 0; }

.faq-cta {
  text-align: center;
  margin-top: 2.5rem;
}
.faq-cta p { margin-bottom: 1rem; font-weight: 600; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

.text-center { text-align: center; }
</style>
