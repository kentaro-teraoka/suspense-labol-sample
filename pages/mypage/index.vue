<template>
  <h1>{{ memberName }}さんのマイページ</h1>
</template>

<script lang="ts" setup>
import { getMemberApi } from '~/api/member';

const memberName = ref<string | null>(null)
try {
  const res = await getMemberApi()
  memberName.value = res.data
} catch(err) {
  console.error(err)
}
</script>