<script setup lang="ts">
interface Props {
  content: string
}

const props = defineProps<Props>()
</script>

<template>
  <div data-testid="logo">
    {{ props.content }}
  </div>
</template>
