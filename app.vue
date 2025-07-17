<template>
  <UApp>
    <div class="grid min-h-screen grid-rows-[1fr_auto]">
      <Header />
      <UContainer class="py-30">
        <NuxtPage />
      </UContainer>
      <Footer />
    </div>
  </UApp>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>
