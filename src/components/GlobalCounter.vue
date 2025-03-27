<template>
  <div>
    <h1>GlobalCount: {{ count }}</h1>
    <button @click="handleClick">{{ $t('increment') }}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['count']),
  },
  methods: {
    ...mapActions(['increment']),
    handleClick() {
      this.increment()
    },
  },
}
</script>
