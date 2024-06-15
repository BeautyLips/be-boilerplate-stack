<script setup lang="ts"></script>

<template>
  <div>
    <div class="mb-4">Styles Utils</div>

    <div class="mb-4">
      <div class="mb-2">From sass: caption and color</div>
      <h2 class="h-caption-1">Caption</h2>
      <h2 class="h-caption-2">Caption</h2>
      <p :style="{ color: 'var(--brand)' }">color</p>
    </div>

    <div class="mb-4">
      <div>From tailwind: caption and color</div>
      <h2 class="text-c1">Caption</h2>
      <h2 class="text-c2">Caption</h2>
      <p class="text-brand">color</p>
    </div>
  </div>
</template>
