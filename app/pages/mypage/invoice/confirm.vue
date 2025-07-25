<template>
  <div class="space-y-10 py-10 px-20 bg-white border-1 border-stone-950 rounded-2xl">
    <h1 class="text-4xl font-bold">請求書買取申請 確認</h1>

    <div class="space-y-4">
      <dl>
        <dt class="font-bold mb-2">請求書</dt>
        <dd class="pb-4 mb-4 border-b-1 border-stone-300">{{ invoiceForm.invoice ?? "-" }}</dd>

        <dt class="font-bold mb-2">買取希望額</dt>
        <dd class="pb-4 mb-4 border-b-1 border-stone-300">{{ invoiceForm.amount ?? "-" }}</dd>

        <dt class="font-bold mb-2">取引先会社</dt>
        <dd class="pb-4 mb-4 border-b-1 border-stone-300">{{ invoiceForm.company ?? "-" }}</dd>

        <dt class="font-bold mb-2">担当者名</dt>
        <dd class="pb-4 mb-4 border-b-1 border-stone-300">{{ invoiceForm.person ?? "-" }}</dd>

        <dt class="font-bold mb-2">電話番号</dt>
        <dd class="pb-4 mb-4 border-b-1 border-stone-300">{{ invoiceForm.phone ?? "-" }}</dd>

        <dt class="font-bold mb-2">ご利用目的</dt>
        <dd class="pb-4 mb-4 border-b-1 border-stone-300">{{ invoiceForm.purpose ?? "-" }}</dd>

        <dt class="font-bold mb-2">エビデンス</dt>
        <dd class="pb-4 mb-4 border-b-1 border-stone-300">{{ invoiceForm.evidence ?? "-" }}</dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useInvoice } from '~/composables/useInvoice';

const { invoiceForm } = useInvoice();
</script>