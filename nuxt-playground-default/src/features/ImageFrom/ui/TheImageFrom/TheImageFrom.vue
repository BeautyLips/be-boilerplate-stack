<script setup lang="ts">
import IconWrench from "~~/src/shared/assets/icons/wrench.svg"
import Example from "~~/src/shared/assets/images/example.png"
import { imageUrl } from "~~/src/shared/tools/ImageUrl"
</script>

<template>
  <div>
    <div class="mb-4">
      <div>Image from: nuxt</div>
      <img :src="Example" alt="alt" />
    </div>

    <div class="mb-4">
      <div>Image from: NuxtImage</div>
      <NuxtImg :src="imageUrl.getUrl('example.png')" />
    </div>

    <div class="mb-4">
      <div>Image from: NuxtImage (remote)</div>
      <NuxtImg :src="imageUrl.getRem('https://place-hold.it/300x150')" />
    </div>

    <div class="mb-4">
      <div>Image from: NuxtImage (cdn)</div>
      <NuxtImg :src="imageUrl.getCdn('/300x150')" />
    </div>

    <div class="mb-4">
      <div class="mb-2">Icon from: icon plugin</div>
      <IconWrench color="var(--brand)" width="40" :fontControlled="false" />
    </div>
  </div>
</template>
