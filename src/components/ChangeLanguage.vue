<template>
  <div>
    <h1>Change Language</h1>
    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('de')">German</button>
    <button @click="changeLanguage('es')">Spanish</button>
  </div>
</template>

<script>
export default {
  name: 'ChangeLanguage',
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
    },
  },
}
</script>
