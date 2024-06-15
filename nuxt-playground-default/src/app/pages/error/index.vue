<script setup lang="ts">
import { ProviderErrorBoundary } from "~~/src/shared/tools/ErrorBoundary"
import { TheErrorsDemo } from "~~/src/features/ErrorsDemo"
</script>

<template>
  <div>
    <div class="mb-4">Page Todo</div>

    <ProviderErrorBoundary>
      <TheErrorsDemo />
    </ProviderErrorBoundary>
  </div>
</template>
