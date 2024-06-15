<script setup lang="ts">
import { RouterView } from "vue-router"
import { VueQueryDevtools } from "@tanstack/vue-query-devtools"
import { ProviderErrorBoundary } from "@/shared/tools/ErrorBoundary"
import { ProviderErrorGlobal } from "@/shared/tools/plugins/ErrorGlobal"
</script>

<template>
  <ProviderErrorGlobal>
    <ProviderErrorBoundary>
      <RouterView />
    </ProviderErrorBoundary>
  </ProviderErrorGlobal>
  <VueQueryDevtools :initial-open="false" />
</template>
