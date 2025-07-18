<template>
  <div
    v-if="memberStatusPending || memberNamePending || importantAnnouncesPending"
    class="space-y-6">
    <USkeleton class="w-40 h-10 rounded-md bg-stone-200" />
    <USkeleton class="w-120 h-20 rounded-md bg-stone-200" />
  </div>

  <div v-else class="space-y-6">
    <h1 class="text-4xl font-bold">{{ memberName }}さんのマイページ</h1>
    <ul class="space-y-2">
      <li
        v-for="announce in importantAnnounces"
        class="py-2 px-4 bg-white rounded-md">
        {{ announce.title }}
      </li>
    </ul>
    <div class="grid place-items-center gap-6 py-6">
      <StatusCard />
      <UButton
        v-if="memberStatus?.isMember"
        class="px-10 py-6 rounded-full font-bold text-xl">
        請求書買取申請
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import StatusCard from '~/components/mypage/StatusCard.vue';
import { useMember } from '~/composables/useMember';
import { useAnnounce } from '~/composables/useAnnounce';

const {
  memberStatus,
  memberStatusPending,
  memberName,
  memberNamePending,
} = useMember()
const {
  importantAnnounces,
  importantAnnouncesPending,
} = useAnnounce()
</script>