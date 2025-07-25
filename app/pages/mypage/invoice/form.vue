<template>
  <div v-if="invoiceFormPending || purposeOptionsPending" class="space-y-6">
    <div v-for="i in 5" class="space-y-4">
      <USkeleton class="w-40 h-5 rounded-md bg-stone-200" />
      <USkeleton class="w-120 h-10 rounded-md bg-stone-200" />
    </div>
  </div>

  <div v-else>
    <UForm
      :state="invoiceForm"
      class="space-y-6">
      <UFormField v-if="isJuridicPerson" label="利用区分" name="usage" size="xl">
        <URadioGroup
          v-model="invoiceForm.usage"
          :items="usageOptions" />
      </UFormField>
  
      <UFormField label="請求書" name="invoice" size="xl">
        <UInput
          type="file"
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
        <UInput
          type="file"
          v-model="invoiceForm.evidence" />
      </UFormField>
    </UForm>
  </div>
</template>

<script lang="ts" setup>
import { useInvoice } from '~/composables/useInvoice';

const route = useRoute();
const invoiceId = ref<string | null>(route.query.invoiceId as string | null);

const {
  invoiceForm,
  invoiceFormPending,
  purposeOptions,
  purposeOptionsPending,
} = useInvoice(invoiceId.value ?? "");

const isJuridicPerson = ref<boolean>(false)
const usageOptions = ref<string[]>(["個人", "法人"])
</script>