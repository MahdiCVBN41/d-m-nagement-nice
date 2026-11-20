<script setup lang="ts">
const route = useRoute()
const { getOrganizationSchema, getLocalBusinessSchema, getWebsiteSchema, injectSchemas } = useSeoSchema()

const siteName = 'Nice Déménagement'

if (route.path === '/' || !route.path.includes('/ville/') && !route.path.includes('/pays/')) {
  injectSchemas([
    getOrganizationSchema(),
    getWebsiteSchema(),
    getLocalBusinessSchema()
  ])
}
</script>

<template>
  <div class="app-wrapper">
    <a href="#main-content" class="skip-link">Aller au contenu principal</a>
    <SiteHeader />
    <main id="main-content">
      <slot />
    </main>
    <SiteFooter />
    <WhatsAppButton />
  </div>
</template>
