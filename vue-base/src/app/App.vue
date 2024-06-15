<script setup lang="ts">
import { ProviderErrorBoundary } from "@/shared/tools/ErrorBoundary"
import { ProviderErrorGlobal } from "@/shared/tools/plugins/ErrorGlobal"
</script>

<template>
  <ProviderErrorGlobal>
    <ProviderErrorBoundary>
      <div data-testid="page-home">Page Home</div>
    </ProviderErrorBoundary>
  </ProviderErrorGlobal>
</template>
