<script setup lang="ts">
import { useStoreCounter } from "~~/src/entities/counter"
import { useStoreIncrementer } from "~~/src/shared/stores/useStoreIncrementer"

const counter = useStoreCounter()
const incrementer = useStoreIncrementer()
</script>

<template>
  <div>
    <div class="mb-4">Store Counter: from entities</div>

    <div>Counter: {{ counter.count }}</div>
    <div><button @click="counter.increment">up</button></div>

    <div class="mb-4">Store Counter: from shared stores</div>

    <div>Counter: {{ incrementer.count }}</div>
    <div><button @click="incrementer.increment">up</button></div>
  </div>
</template>
