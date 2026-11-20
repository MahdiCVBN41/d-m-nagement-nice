<script setup lang="ts">
import { SITE } from '~/composables/cities'
</script>

<template>
  <header class="site-header">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo" aria-label="Nice Déménagement - Accueil">
        <span class="logo-icon">🚚</span>
        <span class="logo-text">Nice <strong>Déménagement</strong></span>
      </NuxtLink>

      <input type="checkbox" id="nav-toggle" class="nav-toggle" hidden>
      <nav class="main-nav" aria-label="Navigation principale">
        <ul>
          <li><NuxtLink to="/">Accueil</NuxtLink></li>
          <li><NuxtLink to="/services">Services</NuxtLink></li>
          <li><NuxtLink to="/villes">Villes</NuxtLink></li>
          <li><NuxtLink to="/pays">Pays</NuxtLink></li>
          <li><NuxtLink to="/garde-meubles">Garde-meubles</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><a :href="SITE.devisUrl" class="btn btn--accent">Devis gratuit</a></li>
        </ul>
      </nav>

      <div class="header-phone">
        <a :href="`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Bonjour, je souhaite un devis pour mon déménagement.')}`" target="_blank" rel="noopener" class="header-whatsapp" aria-label="Discuter sur WhatsApp">
          <span class="wa-icon">💬</span>
        </a>
        <a :href="`tel:${SITE.phone}`" aria-label="Appeler Nice Déménagement">
          <span class="phone-icon">📞</span>
          <span>{{ SITE.phoneDisplay }}</span>
        </a>
      </div>

      <label for="nav-toggle" class="nav-toggle-label" aria-label="Menu">
        <span></span><span></span><span></span>
      </label>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background: #fff;
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-size: 1.25rem;
  color: var(--c-primary);
  font-weight: 600;
}
.logo-icon { font-size: 1.75rem; }
.logo-text strong { color: var(--c-text); }
.main-nav ul {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
}
.main-nav a {
  color: var(--c-text);
  font-weight: 500;
  padding: .5rem 0;
}
.main-nav a:hover, .main-nav a.router-link-active { color: var(--c-primary); }
.main-nav .btn { color: #fff; }
.header-phone {
  display: flex;
  align-items: center;
  gap: .75rem;
}
.header-phone a {
  display: flex;
  align-items: center;
  gap: .5rem;
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--c-primary);
}
.header-whatsapp {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #25D366;
  border-radius: 999px;
  color: #fff !important;
  font-size: 1.15rem;
  transition: transform .25s, box-shadow .25s;
}
.header-whatsapp:hover {
  transform: scale(1.08);
  box-shadow: 0 4px 14px rgba(37, 211, 102, .5);
}
.nav-toggle-label { display: none; flex-direction: column; gap: 4px; cursor: pointer; }
.nav-toggle-label span { width: 24px; height: 3px; background: var(--c-text); border-radius: 2px; transition: .3s; }

@media (max-width: 1024px) {
  .header-phone { display: none; }
}
@media (max-width: 900px) {
  .nav-toggle-label { display: flex; }
  .main-nav {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: #fff;
    box-shadow: var(--shadow-md);
    max-height: 0;
    overflow: hidden;
    transition: max-height .3s ease;
  }
  .nav-toggle:checked ~ .main-nav {
    max-height: 400px;
  }
  .main-nav ul { flex-direction: column; align-items: flex-start; padding: 1rem; gap: .75rem; }
  .main-nav li { width: 100%; }
  .main-nav .btn { display: block; text-align: center; margin-top: .5rem; }
}
</style>
