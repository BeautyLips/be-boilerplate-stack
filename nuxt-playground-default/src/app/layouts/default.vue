<script setup lang="ts">
import { ContainerMenuList } from "~~/src/features/MenuList"
</script>

<template>
  <div>
    <div class="mb-4">Layout Default</div>

    <UILogo class="mb-2" content="Logo" />
    <ContainerMenuList class="mb-4" />

    <slot />
  </div>
</template>
