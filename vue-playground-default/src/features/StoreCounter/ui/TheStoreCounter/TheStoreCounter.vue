<script setup lang="ts">
import { useStoreCounter } from "@/entities/counter"

const counter = useStoreCounter()
</script>

<template>
  <div>
    <div class="mb-4">Store Counter</div>

    <div>Counter: {{ counter.count }}</div>
    <div><button @click="counter.increment">up</button></div>
  </div>
</template>
