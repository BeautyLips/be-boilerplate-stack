<script setup lang="ts">
import { watchEffect } from "vue"

const viewport = useViewport()

watchEffect(() => {
  console.log("Mq: current", viewport)
})
</script>

<template>
  <div>
    <div class="mb-4">Breakpoints Utils</div>

    <div class="mb-2">
      <div>from js: content</div>
      <div>{{ viewport.breakpoint }}</div>
      <div>is sm: {{ viewport.match("sm") }}</div>
    </div>

    <div class="example">from styles: content</div>
  </div>
</template>

<style lang="scss" scoped>
.example {
  font-size: 14px;

  @include min-lg {
    font-size: 26px;
  }
}
</style>
