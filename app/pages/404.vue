<script setup lang="ts">
const breadcrumb = [{ name: 'Accueil', url: '/' }, { name: '404', url: '/404' }]
useSeo({
  title: 'Page non trouvée (404) | Nice Déménagement',
  description: 'La page demandée n\'existe pas. Découvrez nos services de déménagement à Nice et dans toute la France.',
  path: '/404'
})
</script>

<template>
  <div>
    <section class="section">
      <div class="container text-center">
        <h1>404 — Page introuvable</h1>
        <p>La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <NuxtLink to="/" class="btn btn--primary">Retour à l'accueil</NuxtLink>
      </div>
    </section>
  </div>
</template>
