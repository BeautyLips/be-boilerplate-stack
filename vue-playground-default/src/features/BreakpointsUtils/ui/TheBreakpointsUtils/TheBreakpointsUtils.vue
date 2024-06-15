<script setup lang="ts">
import { watchEffect } from "vue"
import { useContextMq } from "@/shared/tools/plugins/pluginBreakpoints"

const mq = useContextMq()
console.log("Mq:", mq)

watchEffect(() => {
  console.log("Mq: current", mq?.current().value)
})
</script>

<template>
  <div>
    <div class="mb-4">Breakpoints Utils</div>

    <div class="mb-2">
      <div>from js: content</div>
      <div>{{ $mq }}</div>
      <div>is sm: {{ $mq.sm.value }}</div>
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
