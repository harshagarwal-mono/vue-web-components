import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  locale: 'en',
  messages: {
    de: {
      increment: 'Erhöhen',
    },
    en: {
      increment: 'Increment',
    },
    es: {
      increment: 'Incrementar',
    },
  },
})

export default i18n
