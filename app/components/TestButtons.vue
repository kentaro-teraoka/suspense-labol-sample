<template>
  <div class="flex gap-2">
    <button class="min-w-20 p-2 rounded-md bg-primary-500" @click="$emit('increment')">{{ incrementBtnText }}</button>
    <button class="min-w-20 p-2 rounded-md bg-primary-500" @click="$emit('decrement')">{{ decrementBtnText }}</button>
    <button class="min-w-20 p-2 rounded-md bg-primary-500" @click="$emit('reset')">{{ resetBtnText }}</button>
  </div>
</template>

<script setup>
const props = defineProps({
  incrementBtnText: {
    type: String,
    default: "Increment"
  },
  decrementBtnText: {
    type: String,
    default: "Decrement"
  },
  resetBtnText: {
    type: String,
    default: "Reset",
  },
});

const emit = defineEmits(["increment", "decrement", "reset"]);
</script>