<script setup lang="ts"></script>

<template>
  <div>
    <div class="mb-4">Layout About</div>

    <div class="mb-4">
      <RouterLink :to="{ name: 'PageHome' }">Home</RouterLink>
    </div>

    <RouterView />
  </div>
</template>
