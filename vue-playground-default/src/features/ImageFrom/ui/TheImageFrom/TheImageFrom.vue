<script setup lang="ts">
import { imageUrl } from "@/shared/tools/ImageUrl"
import IconWrench from "@/shared/assets/icons/wrench.svg"
import IconWrenchComponent from "@/shared/components/icon/IconWrench.vue"
</script>

<template>
  <div>
    <div class="mb-4">
      <div>Image from: assets</div>
      <img :src="imageUrl.getUrl('example.png')" alt="alt" />
    </div>

    <div class="mb-4">
      <div>Image from: public</div>
      <img :src="imageUrl.getPub('example.png')" alt="alt" />
    </div>

    <div class="mb-4">
      <div>Image from: remote</div>
      <img :src="imageUrl.getRem('https://place-hold.it/300x150')" alt="alt" />
    </div>

    <div class="mb-4">
      <div>Image from: cdn</div>
      <img :src="imageUrl.getCdn('/300x150')" alt="alt" />
    </div>

    <div class="mb-4">
      <div>Image from: assets & icons</div>
      <img :src="imageUrl.getUrlIcon('wrench.svg')" alt="alt" width="40" />
    </div>

    <div class="mb-4">
      <div class="mb-2">Icon from: icon plugin as component</div>
      <IconWrench stroke="var(--brand)" width="40" />

      <div class="mb-2">Icon from: components</div>
      <IconWrenchComponent stroke="var(--brand)" width="40" />
    </div>
  </div>
</template>
