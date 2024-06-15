<script setup lang="ts">
import { useContextErrorBoundary } from "~~/src/shared/tools/ErrorBoundary"
import { useModelTodoDetail } from "~~/src/entities/todo"

const contextErrorBoundary = useContextErrorBoundary()

const { isPending, todo, error } = useModelTodoDetail("1abc")

function trowErrorRandom() {
  if (Math.random() > 0.5) {
    throw Error("Error random")
  }
}

function setErrorWithNuxt() {
  showError("Unknown error manual")
}

function setErrorManual() {
  contextErrorBoundary?.setError(Error("Manual Error"))
}

trowErrorRandom()
</script>

<template>
  <div>
    <div class="mb-4">Fetch Todo with error</div>

    <div class="mb-2">
      <div>Pending: {{ isPending }}</div>
      <div>Error: {{ error?.message }}</div>
      <div>Todo: {{ todo }}</div>
    </div>

    <div class="mb-2">For trow error random refresh the page</div>

    <div class="mb-2">
      For manual trow to ErrorBoundary:
      <button @click="setErrorManual">click</button>
    </div>

    <div class="mb-2">
      For manual trow Error and show Nuxt Error Page:
      <button @click="setErrorWithNuxt">click</button>
    </div>

    <div>
      push to unknown route
      <button @click="$router.push('/unknown')">click</button>
    </div>
  </div>
</template>
