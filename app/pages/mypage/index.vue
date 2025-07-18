<template>
  <div class="space-y-6">
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
import { getMemberApi } from '~/api/member';
import { type AnnounceType } from '~/api/data/announce';
import { getImportantAnnouncesApi } from '~/api/announce';
import StatusCard from '~/components/mypage/StatusCard.vue';
import { useMemberStatus } from '~/composables/useMemberStatus';

const { memberStatus } = useMemberStatus()

const memberName = ref<string | null>(null)
try {
  const res = await getMemberApi()
  memberName.value = res.data
} catch(err) {
  console.error(err)
}

const importantAnnounces = ref<AnnounceType[] | null>(null)
try {
  const res = await getImportantAnnouncesApi()
  importantAnnounces.value = res.data
} catch(err) {
  console.error(err)
}
</script>