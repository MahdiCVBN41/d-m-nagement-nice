<script setup lang="ts">
import { SITE } from '~/composables/cities'
</script>

<template>
  <section class="cta-banner">
    <div class="container cta-content">
      <div>
        <h2>Prêt à déménager sans stress ?</h2>
        <p>Demandez votre devis gratuit et sans engagement. Réponse sous 24h.</p>
      </div>
      <div class="cta-actions">
        <a :href="SITE.devisUrl" class="btn btn--accent">Devis gratuit</a>
        <a :href="`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Bonjour, je souhaite un devis gratuit pour mon déménagement.')}`" target="_blank" rel="noopener" class="btn btn--whatsapp-light">💬 WhatsApp</a>
        <a :href="`tel:${SITE.phone}`" class="btn btn--outline btn-light">{{ SITE.phoneDisplay }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-banner {
  background: linear-gradient(135deg, var(--c-primary), var(--c-primary-dark));
  color: #fff;
  padding: 3rem 0;
}
.cta-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}
.cta-content h2 { color: #fff; }
.cta-content p { color: #e2e8f0; margin: .5rem 0 0; }
.cta-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn-light { background: rgba(255,255,255,.1); color: #fff; border-color: #fff; }
.btn-light:hover { background: #fff; color: var(--c-primary); }
.btn--whatsapp-light {
  background: #25D366;
  color: #fff;
  border: 1px solid #25D366;
}
.btn--whatsapp-light:hover { background: #1DA851; border-color: #1DA851; color: #fff; }
</style>
