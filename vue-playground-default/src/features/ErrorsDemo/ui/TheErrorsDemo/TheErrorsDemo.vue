<script setup lang="ts">
import { useModelTodoDetail } from "@/entities/todo"
import { useContextErrorBoundary } from "@/shared/tools/ErrorBoundary"
import { useContextErrorGlobal } from "@/shared/tools/plugins/ErrorGlobal/pluginErrorGlobal"

const contextErrorBoundary = useContextErrorBoundary()
const contextErrorGlobal = useContextErrorGlobal()

const { isPending, todo, error } = useModelTodoDetail("1abc")

function trowErrorRandom() {
  if (Math.random() > 0.5) {
    throw Error("Error random")
  }
}

function setErrorManual() {
  contextErrorBoundary?.setError(Error("Manual Error"))
}

function setErrorGlobalManual() {
  contextErrorGlobal?.setError(Error("Manual Error Global"))
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

    <div class="mb-2">For trow error refresh the page</div>
    <div class="mb-2">
      For manual trow to ErrorBoundary:
      <button @click="setErrorManual">click</button>
    </div>
    <div class="mb-2">
      For manual trow GlobalError:
      <button @click="setErrorGlobalManual">click</button>
    </div>

    <div>
      push to unknown route
      <button @click="$router.push('/unknown')">click</button>
    </div>
  </div>
</template>
