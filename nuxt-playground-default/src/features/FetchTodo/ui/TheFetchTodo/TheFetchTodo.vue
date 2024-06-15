<script setup lang="ts">
import { useModelTodoDetail } from "~~/src/entities/todo"

const { isPending, todo } = useModelTodoDetail("1")
</script>

<template>
  <div>
    <div class="mb-4">Fetch Todo</div>

    <div>Pending: {{ isPending }}</div>
    <div>Todo: {{ todo }}</div>
  </div>
</template>
