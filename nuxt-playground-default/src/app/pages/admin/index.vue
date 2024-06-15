<script setup lang="ts">
import { definePageMeta } from "#imports"

definePageMeta({
  middleware: "auth",
})
</script>

<template>
  <div class="mb-4">Page Admin</div>
</template>
