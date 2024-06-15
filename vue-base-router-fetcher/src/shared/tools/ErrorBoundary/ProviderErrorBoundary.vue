<script setup lang="ts">
import { useProviderErrorBoundary } from "@/shared/tools/ErrorBoundary/useProviderErrorBoundary"

const { error, errorMessage, reset } = useProviderErrorBoundary()
</script>

<template>
  <div v-if="error">
    <div>Error: {{ errorMessage }}</div>
    <div><button @click="reset">try again</button></div>
  </div>
  <div v-else><slot /></div>
</template>
