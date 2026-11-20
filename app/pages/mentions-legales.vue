<script setup lang="ts">
const breadcrumb = [{ name: 'Accueil', url: '/' }, { name: 'Mentions légales', url: '/mentions-legales' }]
const { getFullBreadcrumbSchema, injectSchemas } = useSeoSchema()
useSeo({
  title: 'Mentions légales | Nice Déménagement',
  description: 'Mentions légales de Nice Déménagement. Éditeur, hébergeur, propriété intellectuelle, responsabilités.',
  path: '/mentions-legales'
})
injectSchemas([getFullBreadcrumbSchema(breadcrumb)])
</script>

<template>
  <div>
    <BreadcrumbBar :items="breadcrumb" />
    <section class="section">
      <div class="container narrow">
        <h1>Mentions légales</h1>
        <h2>Éditeur du site</h2>
        <p>Nice Déménagement — SIRET 123 456 789 00012<br>Nice Boulevard 6200, 06000 Nice<br>Tél : 06 50 22 22 78</p>
        <h2>Hébergeur</h2>
        <p>Site hébergé par OVHcloud — 2 rue Kellermann, 59100 Roubaix, France.</p>
        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble des contenus de ce site (textes, images, logos) sont la propriété de Nice Déménagement et ne peuvent être reproduits sans autorisation.</p>
        <h2>Responsabilités</h2>
        <p>Nice Déménagement ne peut être tenu responsable des erreurs, omissions ou indisponibilités du site.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.narrow { max-width: 800px; }
</style>
