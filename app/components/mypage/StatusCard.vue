<template>
  <div class="rounded-3xl p-10 space-y-4 bg-gradient-to-br from-orange-300 to-yellow-500 text-white font-bold shadow-lg">
    <p class="text-lg">あなたは{{ memberStatus?.isMember ? "本会員" : "仮会員" }}です</p>

    <div class="flex justify-start items-center gap-6">
      <div class="space-y-1">
        <p class="text-lg text-gray-200">申請可能額:</p>
        <p class="text-4xl">¥{{ addComma(memberInfo?.availableCredit ?? 0) }}</p>
      </div>
      <USeparator orientation="vertical" class="h-20" />
      <div class="space-y-1">
        <p class="text-lg text-gray-200">買取上限額:</p>
        <p class="text-4xl">¥{{ addComma(memberInfo?.creditLimit ?? 0) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { addComma } from '~/utils/addComma';
import { useMember } from '~/composables/useMember';

const { memberStatus, memberInfo } = useMember()
</script>