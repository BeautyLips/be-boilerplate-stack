<script setup lang="ts">
import { TheStylesUtils } from "~~/src/features/StylesUtils"
import { TheBreakpointsUtils } from "~~/src/features/BreakpointsUtils"
</script>

<template>
  <div>
    <div class="mb-4">Page Styles</div>

    <TheStylesUtils class="mb-4" />
    <TheBreakpointsUtils class="mb-4" />
  </div>
</template>
