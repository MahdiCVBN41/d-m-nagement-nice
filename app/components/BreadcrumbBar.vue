<script setup lang="ts">
const props = withDefaults(defineProps<{
  items?: { name: string; url: string }[]
}>(), {
  items: () => []
})

const schemaJson = computed(() => JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: props.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://nice-demenagement.fr${item.url}`
  }))
}))

useHead(() => ({
  script: [{ type: 'application/ld+json', innerHTML: schemaJson.value }]
}))
</script>

<template>
  <nav v-if="items.length" class="breadcrumb-wrap" aria-label="Fil d'Ariane">
    <div class="container">
      <ol class="breadcrumb">
        <li v-for="(item, i) in items" :key="i">
          <NuxtLink v-if="i < items.length - 1" :to="item.url">{{ item.name }}</NuxtLink>
          <span v-else aria-current="page">{{ item.name }}</span>
        </li>
      </ol>
    </div>
  </nav>
</template>
