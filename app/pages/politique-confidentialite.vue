<script setup lang="ts">
const breadcrumb = [{ name: 'Accueil', url: '/' }, { name: 'Politique de confidentialité', url: '/politique-confidentialite' }]
const { getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()
useSeo({
  title: 'Politique de confidentialité | Nice Déménagement',
  description: 'Politique de confidentialité et traitement des données personnelles chez Nice Déménagement. RGPD.',
  path: '/politique-confidentialite'
})
injectSchemas([getFullBreadcrumbSchema(breadcrumb)])
</script>

<template>
  <div>
    <BreadcrumbBar :items="breadcrumb" />
    <section class="section">
      <div class="container narrow">
        <h1>Politique de confidentialité</h1>
        <p>Nice Déménagement s'engage à protéger vos données personnelles conformément au RGPD.</p>
        <h2>Données collectées</h2>
        <p>Nom, email, téléphone, adresses. Uniquement via le formulaire de devis et contact.</p>
        <h2>Finalités</h2>
        <p>Les données servent à établir un devis et à vous recontacter. Aucune revente à des tiers.</p>
        <h2>Durée de conservation</h2>
        <p>Vos données sont conservées 3 ans après le dernier contact, puis supprimées.</p>
        <h2>Vos droits</h2>
        <p>Accès, rectification, suppression. Contactez-nous à secretariat@nice-demenagement.fr.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.narrow { max-width: 800px; }
</style>
