<script setup lang="ts">
import { SITE } from '~/composables/cities'

defineProps<{
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}>()
</script>

<template>
  <section class="hero">
    <div class="hero-road" aria-hidden="true">
      <svg class="truck-anim" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g class="truck-body">
          <rect x="40" y="50" width="120" height="55" rx="6" fill="#1e40af"/>
          <rect x="160" y="40" width="55" height="65" rx="6" fill="#3b82f6"/>
          <rect x="170" y="50" width="38" height="22" rx="3" fill="#dbeafe"/>
          <rect x="50" y="58" width="100" height="18" rx="2" fill="#fff" opacity=".15"/>
          <rect x="50" y="82" width="100" height="18" rx="2" fill="#fff" opacity=".15"/>
        </g>
        <g class="truck-wheels">
          <circle cx="70" cy="110" r="12" fill="#1f2937"/>
          <circle cx="70" cy="110" r="6" fill="#9ca3af"/>
          <circle cx="140" cy="110" r="12" fill="#1f2937"/>
          <circle cx="140" cy="110" r="6" fill="#9ca3af"/>
          <circle cx="195" cy="110" r="12" fill="#1f2937"/>
          <circle cx="195" cy="110" r="6" fill="#9ca3af"/>
        </g>
      </svg>
      <div class="road-line"></div>
      <div class="road-line road-line--2"></div>
    </div>
    <div class="hero-overlay">
      <div class="container hero-content">
        <span class="hero-badge">★ Nice Déménagement - Déménageur professionnel assuré · Devis Pas cher</span>
        <h1>{{ title }}</h1>
        <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
        <div class="hero-cta">
          <a :href="ctaLink || SITE.devisUrl" class="btn btn--accent btn-lg">
            <span>📦</span> {{ ctaText || 'Demander un devis gratuit' }}
          </a>
          <a :href="`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Bonjour, je souhaite un devis gratuit pour mon déménagement.')}`" target="_blank" rel="noopener" class="btn btn--whatsapp btn-lg">
            <span>💬</span> WhatsApp
          </a>
          <a :href="`tel:${SITE.phone}`" class="btn btn--outline btn-light btn-lg">
            <span>📞</span> {{ SITE.phoneDisplay }}
          </a>
        </div>
        <div class="hero-trust">
          <div class="trust-item">
            <strong>10+</strong><span>ans d'expérience</span>
          </div>
          <div class="trust-item">
            <strong>98%</strong><span>clients satisfaits</span>
          </div>
          <div class="trust-item">
            <strong>24/7</strong><span>support client</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #1e40af 100%);
  overflow: hidden;
}

.hero-road {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 160px;
  background: linear-gradient(180deg, transparent, rgba(0,0,0,.4));
  pointer-events: none;
}

.truck-anim {
  position: absolute;
  bottom: 30px;
  left: -260px;
  width: 240px;
  height: 120px;
  animation: truckMove 12s linear infinite;
}

.truck-body { animation: truckBounce .5s ease-in-out infinite alternate; }
.truck-wheels circle:last-child,
.truck-wheels circle:nth-child(3),
.truck-wheels circle:nth-child(5) {
  animation: wheelSpin 1s linear infinite;
  transform-origin: center;
}

@keyframes truckMove {
  0% { left: -260px; }
  100% { left: 100%; }
}
@keyframes truckBounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-2px); }
}
@keyframes wheelSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.road-line {
  position: absolute;
  bottom: 50px;
  left: 0;
  width: 200%;
  height: 4px;
  background: repeating-linear-gradient(90deg, #fbbf24 0 40px, transparent 40px 80px);
  animation: roadScroll 1.5s linear infinite;
}
.road-line--2 { bottom: 30px; opacity: .4; animation-duration: 2s; }
@keyframes roadScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-80px); }
}

.hero-overlay {
  position: relative;
  width: 100%;
  padding: 4rem 0 6rem;
  background: linear-gradient(180deg, rgba(15,23,42,.7), rgba(15,23,42,.2));
}
.hero-content { color: #fff; max-width: 800px; position: relative; z-index: 2; }
.hero-badge {
  display: inline-block;
  background: rgba(251, 191, 36, .15);
  color: #fbbf24;
  padding: .4rem .9rem;
  border-radius: 999px;
  font-size: .85rem;
  font-weight: 600;
  margin-bottom: 1rem;
  animation: fadeInUp .6s ease;
}
.hero-content h1 {
  color: #fff;
  font-size: clamp(2rem, 5vw, 3rem);
  animation: fadeInUp .7s ease;
}
.hero-subtitle {
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  margin: 1rem 0 2rem;
  color: #e2e8f0;
  animation: fadeInUp .8s ease;
}
.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  animation: fadeInUp .9s ease;
}
.btn-lg { padding: .9rem 1.75rem; font-size: 1.05rem; }
.hero-cta .btn-light {
  background: rgba(255,255,255,.1);
  color: #fff;
  border-color: rgba(255,255,255,.5);
}
.hero-cta .btn-light:hover { background: #fff; color: var(--c-primary); }
.hero-cta .btn span { margin-right: .35rem; }
.btn--whatsapp {
  background: #25D366;
  color: #fff;
  border: 1px solid #25D366;
}
.btn--whatsapp:hover { background: #1DA851; border-color: #1DA851; }

.hero-trust {
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  animation: fadeInUp 1s ease;
}
.trust-item {
  display: flex;
  flex-direction: column;
  gap: .15rem;
}
.trust-item strong {
  font-size: 1.75rem;
  color: #fbbf24;
  font-weight: 700;
}
.trust-item span {
  font-size: .85rem;
  color: #cbd5e0;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .hero-trust { gap: 1.25rem; }
  .truck-anim { width: 160px; height: 80px; }
}
</style>
