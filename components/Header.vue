<template>
  <header>
    <nuxt-link to="/">Logo</nuxt-link>
    <UNavigationMenu :items="navigationItems" />
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