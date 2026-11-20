<script setup lang="ts">
defineProps<{
  faq: { q: string; a: string }[]
  title?: string
}>()
</script>

<template>
  <section v-if="faq.length" class="section section--alt">
    <div class="container">
      <h2>{{ title || 'Questions fréquentes' }}</h2>
      <div class="faq-list">
        <details v-for="(item, i) in faq" :key="i" class="faq-item">
          <summary>
            <span>{{ item.q }}</span>
            <span class="faq-icon" aria-hidden="true">+</span>
          </summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-list { max-width: 800px; margin: 0 auto; }
.faq-item {
  background: #fff;
  border-radius: var(--radius-md);
  margin-bottom: 1rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}
.faq-item summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  list-style: none;
}
.faq-item summary::-webkit-details-marker { display: none; }
.faq-item[open] summary { background: var(--c-bg-alt); }
.faq-item p {
  padding: 0 1.5rem 1.5rem;
  color: var(--c-text-light);
}
.faq-icon {
  font-size: 1.5rem;
  color: var(--c-primary);
  transition: transform .2s;
}
.faq-item[open] .faq-icon { transform: rotate(45deg); }
</style>
