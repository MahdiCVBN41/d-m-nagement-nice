<script setup lang="ts">
import { SITE } from '~/composables/cities'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="grid grid--4">
        <div>
          <h4>Nice Déménagement</h4>
          <p>Votre expert déménagement sur la Côte d'Azur et dans toute la France depuis {{ SITE.yearsExperience }} ans.</p>
          <p class="footer-info">
            <span>📊 {{ SITE.yearsExperience }} ans d'expérience</span><br>
            <span>👥 {{ SITE.teamMembers }} déménageurs</span><br>
            <span>🚛 {{ SITE.trucks }} camions</span><br>
            <span>⭐ {{ SITE.satisfactionRate }}% de satisfaction</span>
          </p>
        </div>

        <div>
          <h4>Nos services</h4>
          <ul class="footer-list">
            <li><NuxtLink to="/services/particuliers">Déménagement particulier</NuxtLink></li>
            <li><NuxtLink to="/services/entreprises">Déménagement entreprise</NuxtLink></li>
            <li><NuxtLink to="/services/monte-meubles">Monte-meubles</NuxtLink></li>
            <li><NuxtLink to="/garde-meubles">Garde-meubles</NuxtLink></li>
            <li><NuxtLink to="/services/emballage">Emballage pro</NuxtLink></li>
            <li><NuxtLink to="/services/piano">Transport de piano</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4>Zones desservies</h4>
          <ul class="footer-list">
            <li><NuxtLink to="/ville/nice">Déménagement Nice</NuxtLink></li>
            <li><NuxtLink to="/ville/paris">Déménagement Paris</NuxtLink></li>
            <li><NuxtLink to="/ville/marseille">Déménagement Marseille</NuxtLink></li>
            <li><NuxtLink to="/ville/lyon">Déménagement Lyon</NuxtLink></li>
            <li><NuxtLink to="/ville/cannes">Déménagement Cannes</NuxtLink></li>
            <li><NuxtLink to="/ville/monaco">Déménagement Monaco</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p class="footer-info">
            <span>📍 {{ SITE.address }}</span><br>
            <span>📞 <a :href="`tel:${SITE.phone}`">{{ SITE.phoneDisplay }}</a></span><br>
            <span>💬 <a :href="`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Bonjour, je souhaite un devis pour mon déménagement.')}`" target="_blank" rel="noopener">WhatsApp</a></span><br>
            <span>✉️ <a :href="`mailto:${SITE.email}`">{{ SITE.email }}</a></span><br>
            <span>🕒 {{ SITE.hours }}</span>
          </p>
          <a :href="SITE.devisUrl" class="btn btn--accent">Devis gratuit</a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ year }} Nice Déménagement — Tous droits réservés.</p>
        <div class="footer-links">
          
          <NuxtLink :to="`${SITE.ML_URL}`" >Mentions légales</NuxtLink>
          <NuxtLink :to="`${SITE.PC_URL}`">Politique de Confidentialité</NuxtLink>
          <NuxtLink :to="`${SITE.GVC_URL}`">CGV</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--c-bg-dark);
  color: #cbd5e0;
  padding: 3rem 0 1.5rem;
  margin-top: 2rem;
}
.site-footer h4 {
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.05rem;
}
.site-footer a { color: #cbd5e0; }
.site-footer a:hover { color: var(--c-accent); }
.footer-list { list-style: none; }
.footer-list li { margin-bottom: .5rem; }
.footer-info span { display: inline-block; margin-bottom: .25rem; }
.btn { margin-top: 1rem; }
.footer-bottom {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #1e293b;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: .875rem;
}
.footer-links { display: flex; gap: 1.5rem; }
@media (max-width: 768px) {
  .footer-links { flex-direction: column; gap: .5rem; }
}
</style>
