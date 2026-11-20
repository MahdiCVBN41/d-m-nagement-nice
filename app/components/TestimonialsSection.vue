<script setup lang="ts">
import { SITE } from '~/composables/cities'

const testimonials = [
  {
    name: 'Sophie Martin',
    avatar: '👩',
    rating: 5,
    text: `Un déménagement de Nice à Paris impeccable. Équipe très professionnelle, devis gratuit et négociable. Ils ont pris soin de tous mes meubles, même les plus fragiles. Je recommande vivement Nice Déménagement pour tout déménagement national ou international.`,
    route: 'Nice → Paris',
    date: '15 mars 2025'
  },
  {
    name: 'Thomas Dubois',
    avatar: '👨',
    rating: 5,
    text: `Service exceptionnel pour mon déménagement vers l'Italie (Rome). Formalités douanières gérées sans souci, assurance incluse, prix très compétitif. Les déménageurs sont polis, rapides et soigneux. Un grand merci à toute l'équipe.`,
    route: 'Nice → Italie',
    date: '2 février 2025'
  },
  {
    name: 'Laura Chevalier',
    avatar: '👩‍🦰',
    rating: 5,
    text: `Déménagement local à Cannes réalisé en moins de 4 heures. Devis en ligne reçu rapidement, tarif négocié à la baisse. Les cartons étaient étiquetés, le camion propre. Très bonne expérience avec cette entreprise de déménagement niçoise.`,
    route: 'Cannes',
    date: '20 janvier 2025'
  },
  {
    name: 'Marc Weber',
    avatar: '👨‍💼',
    rating: 5,
    text: `Nous avons fait appel à Nice Déménagement pour un transfert de notre appartement à Monaco vers la Suisse. Tout a été parfait : le matériel d'emballage, le suivi GPS, la ponctualité. Des déménageurs assurés et à l'écoute. À recommander sans hésiter.`,
    route: 'Monaco → Suisse',
    date: '5 décembre 2024'
  },
  {
    name: 'Camillia De Luca',
    avatar: '👩‍🦱',
    rating: 5,
    text: `Superbe prestation pour un déménagement international vers l'Espagne (Barcelone). Le devis était clair, sans mauvaises surprises. L'équipe a même démonté/remonté ma cuisine équipée. Un service 5 étoiles.`,
    route: 'Nice → Espagne',
    date: '10 novembre 2024'
  },
  {
    name: 'Nicolas Leroy',
    avatar: '👨‍🔧',
    rating: 5,
    text: `Je cherchais un déménageur pour reloger mes bureaux de Nice à Lyon. Nice Déménagement a su être réactif, discret et efficace. Le rapport qualité-prix est imbattable. Je les recommande pour les pros comme pour les particuliers.`,
    route: 'Nice → Lyon',
    date: '18 octobre 2024'
  }
]

const track = ref(0)
const interval = ref<ReturnType<typeof setInterval> | null>(null)

function nextSlide() {
  track.value = (track.value + 1) % Math.ceil(testimonials.length / 3)
}

onMounted(() => {
  interval.value = setInterval(nextSlide, 5000)
})
onUnmounted(() => {
  if (interval.value) clearInterval(interval.value)
})
</script>

<template>
  <section class="section section--alt testimonials" id="avis">
    <div class="container">
      <h2 class="text-center">Ce que nos clients pensent de notre service</h2>
      <p class="text-center subtitle">Plus de {{ SITE.satisfactionRate }}% de clients satisfaits — Déménagements réussis à Nice, en France et à l'international</p>

      <div class="rating-summary">
        <div class="big-rating">4.9<span>/5</span></div>
        <div class="stars" aria-label="Note 4.9 sur 5">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p>Basé sur 247 avis vérifiés</p>
      </div>

      <div class="testimonials-track" :style="{ transform: `translateX(-${track * 100}%)` }">
        <div v-for="i in Math.ceil(testimonials.length / 3)" :key="i" class="testimonials-page">
          <div
            v-for="(t, j) in testimonials.slice((i - 1) * 3, i * 3)"
            :key="j"
            class="testimonial-card card"
          >
            <div class="testimonial-header">
              <div class="testimonial-avatar">{{ t.avatar }}</div>
              <div>
                <div class="testimonial-name">{{ t.name }}</div>
                <div class="testimonial-route">
                  <span>📍 {{ t.route }}</span>
                  <span>· {{ t.date }}</span>
                </div>
              </div>
            </div>
            <div class="testimonial-stars" :aria-label="`${t.rating} étoiles`">
              <span v-for="n in 5" :key="n" :class="{ active: n <= t.rating }">★</span>
            </div>
            <p class="testimonial-text">"{{ t.text }}"</p>
          </div>
        </div>
      </div>

      <div class="slider-dots">
        <button
          v-for="i in Math.ceil(testimonials.length / 3)"
          :key="i"
          :class="{ active: track === i - 1 }"
          @click="track = i - 1"
          :aria-label="`Avis page ${i}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials .subtitle { color: var(--c-text-light); margin-bottom: 2rem; }

.rating-summary {
  text-align: center;
  margin-bottom: 2.5rem;
}
.big-rating {
  font-size: 3rem;
  font-weight: 700;
  color: var(--c-accent);
}
.big-rating span { font-size: 1.5rem; color: var(--c-text-light); }
.stars { font-size: 1.5rem; color: #fbbf24; letter-spacing: 2px; }
.rating-summary p { color: var(--c-text-light); font-size: .9rem; margin-top: .25rem; }

.testimonials-track {
  display: flex;
  transition: transform .6s ease;
}
.testimonials-page {
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 1.5rem;
  padding: 0 .5rem;
}

.testimonial-card {
  position: relative;
  transition: transform .3s, box-shadow .3s;
  animation: cardIn .5s ease;
}
.testimonial-card:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
.testimonial-card::before {
  content: '"';
  position: absolute;
  top: -.5rem;
  left: 1rem;
  font-size: 4rem;
  color: var(--c-primary-light);
  opacity: .15;
  font-family: Georgia, serif;
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: .75rem;
  margin-bottom: 1rem;
}
.testimonial-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--c-primary), var(--c-primary-light));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
}
.testimonial-name { font-weight: 700; }
.testimonial-route { font-size: .85rem; color: var(--c-text-light); display: flex; gap: .5rem; flex-wrap: wrap; }
.testimonial-stars span { font-size: 1.15rem; color: #e5e7eb; }
.testimonial-stars span.active { color: #fbbf24; }
.testimonial-text { color: var(--c-text-light); font-style: italic; }

.slider-dots {
  display: flex;
  justify-content: center;
  gap: .5rem;
  margin-top: 2rem;
}
.slider-dots button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: var(--c-border);
  cursor: pointer;
  transition: all .3s;
}
.slider-dots button.active {
  background: var(--c-primary);
  transform: scale(1.25);
}

@keyframes cardIn {
  from { opacity: 0; transform: scale(.95); }
  to { opacity: 1; transform: scale(1); }
}

.text-center { text-align: center; }
</style>
