<template>
  <div class="space-y-10 py-10 px-20 bg-white border-1 border-stone-950 rounded-2xl">
    <h1 class="text-4xl font-bold">請求書買取申請</h1>

    <div v-if="invoiceFormPending || purposeOptionsPending" class="space-y-10">
      <div class="space-y-6">
        <div v-for="i in 5" class="space-y-4">
          <USkeleton class="w-40 h-5 rounded-md bg-stone-200" />
          <USkeleton class="w-120 h-10 rounded-md bg-stone-200" />
        </div>
      </div>
      <USkeleton class="w-80 h-20 rounded-full bg-stone-200" />
    </div>
  
    <div
      v-else
      class="space-y-10">
      <UForm
        :state="invoiceForm"
        class="space-y-6">
    
        <UFormField label="請求書" name="invoice" size="xl">
          <UFileUpload
            v-model="invoiceForm.invoice" />
        </UFormField>
    
        <UFormField label="買取希望額" name="amount" size="xl">
          <UInput type="number" v-model="invoiceForm.amount" />
        </UFormField>
    
        <UFormField label="取引先会社" name="company" size="xl">
          <UInput type="text" v-model="invoiceForm.company" />
        </UFormField>
    
        <UFormField label="担当者名" name="person" size="xl">
          <UInput type="text" v-model="invoiceForm.person" />
        </UFormField>
    
        <UFormField label="電話番号" name="phone" size="xl">
          <UInput type="tel" v-model="invoiceForm.phone" />
        </UFormField>
    
        <UFormField label="ご利用目的" name="purpose" size="xl">
          <USelect
            v-model="invoiceForm.purpose"
            :items="purposeOptions"
            placeholder="選択してください" />
        </UFormField>
    
        <UFormField label="エビデンス" name="evidence" size="xl">
          <UFileUpload
            v-model="invoiceForm.evidence"
            multiple />
        </UFormField>
      </UForm>

      <UButton
        class="px-10 py-6 rounded-full font-bold text-xl"
        @click="router.push('/mypage/invoice/confirm')">
        入力内容を確認する
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useInvoice } from '~/composables/useInvoice';

const route = useRoute();
const router = useRouter();

const invoiceId = ref<string | null>(route.query.invoiceId as string | null);

const {
  invoiceForm,
  invoiceFormPending,
  purposeOptions,
  purposeOptionsPending,
} = useInvoice(invoiceId.value ?? "");
</script>