import { ApolloClients } from '@vue/apollo-composable'
import { store } from '~/store'
import { i18n } from '~/i18n'
import { router } from '~/router'
import { apolloClient } from '~/client'
import { ref } from 'vue'

const appInfo = ref({
  version: '1.0.0',
  author: 'John Doe',
})
const updateAppInfo = (info) => {
  appInfo.value = {
    ...appInfo.value,
    ...info,
  }
}

export const configureApp = (app) => {
  app.use(store)
  app.use(i18n)
  app.use(router)
  app.provide('app', appInfo)
  app.provide('updateAppInfo', updateAppInfo)
  app.provide(ApolloClients, {
    default: apolloClient,
  })
}

export default {
  configureApp,
}
