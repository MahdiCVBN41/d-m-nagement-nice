<script setup lang="ts">
import { SITE } from '~/composables/cities'

const serviceCards = [
  {
    icon: '🏠',
    title: 'Déménagement local',
    desc: `Spécialiste du déménagement à Nice, Monaco, Cannes, Antibes, Grasse, Cagnes-sur-Mer et toute la Côte d'Azur. Intervention rapide, camions adaptés aux centres-villes, et équipe expérimentée.`,
    features: ['Devis gratuit sous 24h', 'Assuré responsabilité civile', 'Forfaits négociables'],
    illu: 'local'
  },
  {
    icon: '🇫🇷',
    title: 'Déménagement national',
    desc: `De Nice vers Paris, Lyon, Marseille, Bordeaux, Lille, Strasbourg ou toute autre ville de France. Nous organisons le transport, la logistique et la livraison en toute sécurité.`,
    features: ['Suivi GPS en temps réel', 'Garantie des délais', 'Devis ferme et négociable'],
    illu: 'national'
  },
  {
    icon: '🌍',
    title: 'Déménagement international',
    desc: `Départ de Nice vers l'Italie, la Suisse, le Luxembourg, l'Allemagne, la Belgique, l'Espagne et toute l'Europe. Gestion des formalités douanières, assurance tous risques.`,
    features: ['Accompagnement administratif', 'Conteneurs ou camions complets', 'Devis multidevis comparatif'],
    illu: 'international'
  }
]

const advantages = [
  { icon: '🛡️', title: 'Déménageurs assurés', desc: 'RC Pro, garantie dommages, protection des biens fragiles' },
  { icon: '💰', title: 'Devis négociable', desc: 'Prix adaptés à votre budget, sans mauvaises surprises' },
  { icon: '👷', title: 'Équipe expérimentée', desc: `Plus de ${SITE.yearsExperience} ans d'expertise, matériel professionnel` },
  { icon: '📞', title: 'Support 24/7', desc: 'Une équipe à votre écoute, 7j/7 pour vos questions' }
]
</script>

<template>
  <section class="section services-section" id="services">
    <div class="container">
      <h2 class="text-center">Des services de déménagement sur mesure</h2>
      <p class="text-center subtitle">Que vous déménagiez dans un appartement niçois, une villa à Cannes, ou que vous partiez à l'international, nous vous offrons une solution clé en main, assurée et négociable.</p>

      <div class="grid grid--3 service-grid">
        <div v-for="(srv, i) in serviceCards" :key="i" class="service-card card" :style="{ animationDelay: `${i * 0.15}s` }">
          <div class="service-icon-wrap">
            <span class="service-icon">{{ srv.icon }}</span>
            <div class="service-pulse"></div>
          </div>
          <h3>{{ srv.title }}</h3>
          <p class="service-desc">{{ srv.desc }}</p>
          <ul class="service-features">
            <li v-for="(f, j) in srv.features" :key="j"><span>✓</span> {{ f }}</li>
          </ul>
        </div>
      </div>

      <div class="advantages-row">
        <div v-for="(adv, i) in advantages" :key="i" class="advantage-card" :style="{ animationDelay: `${i * 0.1}s` }">
          <span class="advantage-icon">{{ adv.icon }}</span>
          <h4>{{ adv.title }}</h4>
          <p>{{ adv.desc }}</p>
        </div>
      </div>

      <div class="services-illustrations">
        <div class="illu-card">
          <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g class="home-roof"><path d="M40 70 L100 30 L160 70" stroke="#1e40af" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
            <g class="home-body">
              <rect x="55" y="65" width="90" height="65" fill="#dbeafe" stroke="#1e40af" stroke-width="3" rx="4"/>
              <rect x="70" y="85" width="25" height="25" fill="#1e40af" opacity=".3"/>
              <rect x="110" y="85" width="25" height="45" fill="#1e40af" opacity=".3"/>
            </g>
            <g class="home-garden">
              <circle cx="35" cy="120" r="8" fill="#34d399"/>
              <circle cx="165" cy="120" r="8" fill="#34d399"/>
            </g>
          </svg>
          <span>Particulier</span>
        </div>

        <div class="illu-card">
          <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g class="office-windows">
              <rect x="45" y="30" width="110" height="100" fill="#e0e7ff" stroke="#1e40af" stroke-width="3" rx="4"/>
              <rect x="55" y="40" width="18" height="18" fill="#1e40af" opacity=".4" class="win win--1"/>
              <rect x="85" y="40" width="18" height="18" fill="#1e40af" opacity=".4" class="win win--2"/>
              <rect x="115" y="40" width="18" height="18" fill="#1e40af" opacity=".4" class="win win--3"/>
              <rect x="55" y="75" width="18" height="18" fill="#1e40af" opacity=".4" class="win win--4"/>
              <rect x="85" y="75" width="18" height="18" fill="#fbbf24" class="win win--5"/>
              <rect x="115" y="75" width="18" height="18" fill="#1e40af" opacity=".4" class="win win--6"/>
              <rect x="80" y="110" width="40" height="20" fill="#1e40af" opacity=".6"/>
            </g>
          </svg>
          <span>Entreprise / Bureau</span>
        </div>

        <div class="illu-card">
          <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g class="truck-illu">
              <rect x="30" y="55" width="100" height="55" fill="#1e40af" rx="6"/>
              <rect x="130" y="40" width="45" height="70" fill="#3b82f6" rx="6"/>
              <rect x="140" y="50" width="28" height="22" fill="#dbeafe" rx="3"/>
              <g class="truck-illu-wheels">
                <circle cx="65" cy="115" r="12" fill="#1f2937"/>
                <circle cx="65" cy="115" r="5" fill="#9ca3af"/>
                <circle cx="155" cy="115" r="12" fill="#1f2937"/>
                <circle cx="155" cy="115" r="5" fill="#9ca3af"/>
              </g>
              <g class="illu-boxes">
                <rect x="45" y="65" width="22" height="20" fill="#fbbf24" rx="2"/>
                <rect x="75" y="65" width="22" height="20" fill="#f97316" rx="2"/>
                <rect x="105" y="65" width="22" height="20" fill="#fbbf24" rx="2"/>
              </g>
            </g>
          </svg>
          <span>Transport & Logistique</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section .subtitle { color: var(--c-text-light); margin-bottom: 2.5rem; }

.service-grid { margin-bottom: 3rem; }
.service-card {
  text-align: center;
  transition: transform .3s, box-shadow .3s;
  animation: cardSlideUp .6s ease backwards;
}
.service-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.service-icon-wrap {
  position: relative;
  display: inline-flex;
  margin-bottom: 1rem;
}
.service-icon {
  font-size: 3rem;
  position: relative;
  z-index: 2;
  display: block;
  animation: iconBounce 2s ease-in-out infinite;
}
.service-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: var(--c-primary-light);
  opacity: .15;
  transform: translate(-50%, -50%);
  animation: pulseRing 2s ease-in-out infinite;
  z-index: 1;
}

.service-desc { color: var(--c-text-light); margin-bottom: 1.25rem; }
.service-features {
  text-align: left;
  list-style: none;
  margin-top: 1rem;
}
.service-features li {
  padding: .35rem 0 .35rem 1.75rem;
  position: relative;
  font-size: .925rem;
}
.service-features li span {
  position: absolute;
  left: 0;
  color: var(--c-success);
  font-weight: 700;
}

.advantages-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}
.advantage-card {
  text-align: center;
  padding: 1.5rem 1rem;
  border-radius: var(--radius-lg);
  background: var(--c-bg-alt);
  animation: cardSlideUp .5s ease backwards;
  transition: transform .3s;
}
.advantage-card:hover { transform: translateY(-3px); }
.advantage-icon { font-size: 2.5rem; display: block; margin-bottom: .5rem; }
.advantage-card h4 { margin-bottom: .25rem; }
.advantage-card p { font-size: .9rem; color: var(--c-text-light); margin: 0; }

.services-illustrations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}
.illu-card {
  background: var(--c-bg-alt);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  text-align: center;
  transition: transform .3s, box-shadow .3s;
}
.illu-card:hover {
  transform: scale(1.03);
  box-shadow: var(--shadow-md);
}
.illu-card svg { width: 100%; max-width: 200px; height: auto; margin: 0 auto 1rem; }
.illu-card span {
  font-weight: 600;
  color: var(--c-primary);
  display: block;
}

@keyframes iconBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes pulseRing {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: .15; }
  50% { transform: translate(-50%, -50%) scale(1.3); opacity: .05; }
}
@keyframes cardSlideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.home-roof { animation: floatSlow 4s ease-in-out infinite; transform-origin: center; }
.office-windows .win { animation: blinkWin 3s ease-in-out infinite; }
.win--2 { animation-delay: .5s; }
.win--3 { animation-delay: 1s; }
.win--5 { animation-delay: 1.5s; }
.truck-illu { animation: truckWiggle 3s ease-in-out infinite; transform-origin: center; }

@keyframes floatSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}
@keyframes blinkWin {
  0%, 100% { opacity: .4; }
  50% { opacity: .8; }
}
@keyframes truckWiggle {
  0%, 100% { transform: translateX(0) rotate(0); }
  25% { transform: translateX(-3px) rotate(-1deg); }
  75% { transform: translateX(3px) rotate(1deg); }
}

.text-center { text-align: center; }
</style>
