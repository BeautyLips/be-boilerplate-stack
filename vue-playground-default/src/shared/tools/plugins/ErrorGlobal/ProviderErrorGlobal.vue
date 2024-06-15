<script setup lang="ts">
import { useContextErrorGlobal } from "@/shared/tools/plugins/ErrorGlobal/pluginErrorGlobal"

const { error, errorMessage, reset } = useContextErrorGlobal()
</script>

<template>
  <div v-if="error">
    <div>Error: {{ errorMessage }}</div>
    <div><button @click="reset">try again</button></div>
  </div>
  <div v-else><slot /></div>
</template>
