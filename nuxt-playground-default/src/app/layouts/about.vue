<script setup lang="ts"></script>

<template>
  <div>
    <div class="mb-4">Layout About</div>

    <div class="mb-4">
      <NuxtLink :to="{ path: '/' }">Home</NuxtLink>
    </div>

    <slot />
  </div>
</template>
