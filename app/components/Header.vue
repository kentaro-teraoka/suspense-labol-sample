<template>
  <header class="fixed grid place-items-center w-full pt-4">
    <div class="flex justify-between items-center max-w-(--ui-container) w-full border-1 border-stone-950 rounded-full bg-white px-6 py-2">
      <nuxt-link to="/" class="font-bold text-2xl">Labol</nuxt-link>
      <UNavigationMenu :items="navigationItems" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const navigationItems = ref<NavigationMenuItem[]>([
  {
    label: "マイページ",
    to: "/mypage",
  },
])
</script>