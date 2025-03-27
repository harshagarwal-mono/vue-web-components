<template>
  <div>
    <h1>LocalCount: {{ localCount }}</h1>
    <button @click="handleClick">{{ $t('increment') }}</button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    count: {
      immediate: true,
      handler(newValue) {
        this.localCount = newValue
      },
    },
  },
  data() {
    return {
      localCount: 0,
    }
  },
  methods: {
    handleClick() {
      this.localCount++
    },
  },
}
</script>
