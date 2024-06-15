<script setup lang="ts">
import { computed } from "vue"

const sections = [
  "index",
  "about",
  "image",
  "styles",
  "todo",
  "store",
  "error",
  "admin",
]

const menu = computed(() => {
  return sections.map((section) => {
    return {
      id: section,
      label: section,
      to: { name: section },
    }
  })
})
</script>

<template>
  <div>
    <div v-for="page of menu" :key="page.id">
      <NuxtLink :to="page.to">{{ page.label }}</NuxtLink>
    </div>
  </div>
</template>
