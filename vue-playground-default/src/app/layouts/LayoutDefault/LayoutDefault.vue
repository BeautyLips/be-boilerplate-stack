<script setup lang="ts">
import UILogo from "@/shared/components/ui/UILogo/UILogo.vue"
import { ContainerMenuList } from "@/features/MenuList"
</script>

<template>
  <div>
    <div class="mb-4">Layout Default</div>

    <UILogo class="mb-2" content="Logo" />
    <ContainerMenuList class="mb-4" />

    <RouterView />
  </div>
</template>
