<template>
  <UForm :state="formData" :schema="formSchema">
    <UFormField label="First Name" name="firstName">
      <UInput v-model="formData.firstName" />
    </UFormField>
    <UFormField label="Last Name" name="lastName">
      <UInput v-model="formData.lastName" />
    </UFormField>
    <UFormField label="Age" name="age">
      <UInput v-model="formData.age" type="number" />
    </UFormField>
    <UFormField label="Email" name="email">
      <UInput v-model="formData.email" type="email" />
    </UFormField>
    <UFormField label="Password" name="password">
      <UInput v-model="formData.password" :type="isPasswordVisible ? 'text' : 'password'">
        <template #trailing>
          <UButton
            :icon="isPasswordVisible ? 'i-lucide-eye-off' : 'i-lucide-eye'"
            variant="link"
            color="neutral"
            @click="isPasswordVisible = !isPasswordVisible"
          />
        </template>
      </UInput>
    </UFormField>
    <UFormField label="Newsletter" name="newsletter">
      <UCheckbox v-model="formData.newsletter" />
    </UFormField>
  </UForm>
</template>

<script lang="ts" setup>
import * as v from 'valibot'

const formData = ref({
  firstName: '',
  lastName: '',
  age: 0,
  email: '',
  password: '',
  newsletter: false,
})

const formSchema = v.object({
  firstName: v.pipe(
    v.string(),
    v.nonEmpty('入力してください。'),
  ),
  lastName: v.pipe(
    v.string(),
    v.nonEmpty('入力してください。'),
  ),
  age: v.pipe(
    v.number(),
    v.custom((value: any) => value > 6, "6歳以下は登録できません。"),
    v.custom((value: any) => value < 120, "120歳以上は登録できません。"),
  ),
  email: v.pipe(
    v.string(),
    v.nonEmpty('入力してください。'),
    v.email('正しいメールアドレスを入力してください。'),
  ),
  password: v.pipe(
    v.string(),
    v.nonEmpty('入力してください。'),
    v.minLength(8, '8文字以上で入力してください。'),
    v.custom((value: any) => /[A-Z]/.test(value), '大文字アルファベットを1文字以上含めてください。')
  ),
  newsletter: v.boolean(),
})

const isPasswordVisible = ref(false)
</script>