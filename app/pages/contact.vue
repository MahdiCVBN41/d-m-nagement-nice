<script setup lang="ts">
import { SITE } from '~/composables/cities'

const breadcrumb = [
  { name: 'Accueil', url: '/' },
  { name: 'Contact', url: '/contact' }
]

const { getFullBreadcrumbSchema, getLocalBusinessSchema, injectSchemas } = useSeoSchema()

useSeo({
  title: 'Contact | Nice Déménagement',
  description: `Contactez Nice Déménagement au ${SITE.phoneDisplay}. Adresse : ${SITE.address}. Devis gratuit, conseil et prise de rendez-vous.`,
  path: '/contact',
  keywords: ['contact déménagement', 'téléphone déménagement Nice']
})

injectSchemas([getFullBreadcrumbSchema(breadcrumb), getLocalBusinessSchema()])
</script>

<template>
  <div>
    <BreadcrumbBar :items="breadcrumb" />
    <section class="section">
      <div class="container">
        <h1>Contactez Nice Déménagement</h1>
        <div class="grid grid--2">
          <div class="contact-info">
            <h3>Coordonnées</h3>
            <p><strong>Adresse :</strong> {{ SITE.address }}</p>
            <p><strong>Téléphone :</strong> <a :href="`tel:${SITE.phone}`">{{ SITE.phoneDisplay }}</a></p>
            <p><strong>Email :</strong> <a :href="`mailto:${SITE.email}`">{{ SITE.email }}</a></p>
            <p><strong>Horaires :</strong> Lun-Ven 8h-19h, Sam 9h-17h</p>
            <p><strong>SIRET :</strong> {{ SITE.siret }}</p>
          </div>
          <div class="contact-map">
            <iframe
              src="https://maps.google.com/maps?q=Nice%20France&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style="border:0; border-radius: var(--radius-md);"
              loading="lazy"
              title="Carte de Nice Déménagement"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <CtaBanner />
  </div>
</template>

<style scoped>
.contact-info { padding: 1.5rem; background: var(--c-bg-alt); border-radius: var(--radius-md); }
.contact-info p { margin-bottom: .75rem; }
</style>
