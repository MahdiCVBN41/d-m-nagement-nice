<script setup lang="ts">
const breadcrumb = [{ name: 'Accueil', url: '/' }, { name: 'CGV', url: '/cgv' }]
const { getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()
useSeo({
  title: 'CGV | Nice Déménagement',
  description: 'Conditions générales de vente de Nice Déménagement. Devis, paiement, annulation, assurance, responsabilité.',
  path: '/cgv'
})
injectSchemas([getFullBreadcrumbSchema(breadcrumb)])
</script>

<template>
  <div>
    <BreadcrumbBar :items="breadcrumb" />
    <section class="section">
      <div class="container narrow">
        <h1>Conditions générales de vente</h1>
        <h2>Article 1 — Devis</h2>
        <p>Tout devis est gratuit, sans engagement et valable 30 jours. La signature du devis vaut acceptation des CGV.</p>
        <h2>Article 2 — Réservation</h2>
        <p>Une réservation est confirmée après versement d'un acompte de 30% du montant du devis.</p>
        <h2>Article 3 — Paiement</h2>
        <p>Le solde est exigible à la livraison. Paiement par virement, chèque ou espèces.</p>
        <h2>Article 4 — Annulation</h2>
        <p>Annulation gratuite jusqu'à 15 jours avant la date. Au-delà, l'acompte est conservé.</p>
        <h2>Article 5 — Assurance</h2>
        <p>Tous nos déménagements sont couverts par une assurance dommages tous risques jusqu'à 75 000 €.</p>
        <h2>Article 6 — Responsabilité</h2>
        <p>Notre responsabilité est engagée de la prise en charge jusqu'à la livraison finale.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.narrow { max-width: 800px; }
</style>
