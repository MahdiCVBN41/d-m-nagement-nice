<script setup lang="ts">
const breadcrumb = [{ name: 'Accueil', url: '/' }, { name: 'Garde-meubles', url: '/garde-meubles' }]
const { getFullBreadcrumbSchema, getLocalBusinessSchema, injectSchemas } = useSeoSchema()
useSeo({
  title: 'Garde-meubles sécurisé à Nice | Nice Déménagement',
  description: 'Stockage sécurisé et surveillé 24h/24 à Nice. Garde-meubles pour particuliers et entreprises. Solution de stockage flexible et assurée.',
  path: '/garde-meubles',
  keywords: ['garde meubles Nice', 'stockage Nice', 'self stockage']
})
injectSchemas([getFullBreadcrumbSchema(breadcrumb), getLocalBusinessSchema()])
</script>

<template>
  <div>
    <BreadcrumbBar :items="breadcrumb" />
    <HeroSection
      title="Garde-meubles sécurisé à Nice"
      subtitle="Stockage surveillé 24h/24, assuré, accès flexible pour vos meubles et effets personnels"
    />
    <section class="section">
      <div class="container">
        <h2>Une solution de stockage flexible</h2>
        <p>Notre garde-meubles à Nice vous offre un espace de stockage sécurisé et surveillé 24h/24 pour stocker vos meubles, affaires personnelles et archives pendant une durée libre — de quelques jours à plusieurs années.</p>
        <div class="grid grid--3">
          <div class="card">
            <h3>Sécurité 24h/24</h3>
            <p>Vidéosurveillance, contrôle d'accès par badge, alarme anti-intrusion.</p>
          </div>
          <div class="card">
            <h3>Assurance complète</h3>
            <p>Vos biens sont assurés contre le vol, l'incendie et les dégâts des eaux.</p>
          </div>
          <div class="card">
            <h3>Accès flexible</h3>
            <p>Récupérez vos affaires quand vous le souhaitez, sur rendez-vous.</p>
          </div>
        </div>
      </div>
    </section>
    <CtaBanner />
  </div>
</template>
