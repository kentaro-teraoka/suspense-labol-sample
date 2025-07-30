<template>
  <div class="flex gap-2">
    <button class="min-w-20 p-2 rounded-md bg-primary-500" @click="$emit('increment')">{{ incrementBtnText }}</button>
    <button class="min-w-20 p-2 rounded-md bg-primary-500" @click="$emit('decrement')">{{ decrementBtnText }}</button>
    <button class="min-w-20 p-2 rounded-md bg-primary-500" @click="$emit('reset')">{{ resetBtnText }}</button>
  </div>
</template>

<script>
export default {
  setup(props, context) {
    // アクセス自体はsetup内でできる
    console.log(props.incrementBtnText, props.decrementBtnText, props.resetBtnText);

    // emitへのアクセスは、context経由で行う
    context.emit('increment');

    return {
    };
  },
  props: {
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
  },
  emits: ["increment", "decrement", "reset"],
}
</script>