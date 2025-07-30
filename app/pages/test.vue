<template>
  <div class="space-y-4">
    <div>
      <p>message: {{ message }}</p>
      <p>count: {{ count }}</p>
      <p>doubleCount: {{ doubleCount }}</p>
    </div>
  
    <TestButtons
      incrementBtnText="+"
      decrementBtnText="-"
      resetBtnText="リセット"
      @increment="increment"
      @decrement="decrement"
      @reset="reset"
    />
  </div>
</template>

<script>
import TestButtons from "~/components/TestButtons.vue";

export default {
  components: {
    TestButtons,
  },
  data() {
    return {
      message: "",
      count: 0,
    };
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    }
  },
  methods: {
    increment() {
      this.count++;
      this.message = "増えました";
    },
    decrement() {
      this.count--;
      this.message = "減りました";
    },
    reset() {
      this.count = 0;
      this.message = "リセットしました";
    }
  }
};
</script>