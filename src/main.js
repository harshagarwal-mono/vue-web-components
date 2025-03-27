import './assets/main.css'
// import './assets/post.css'

import { ApolloClients } from '@vue/apollo-composable'
import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import { apolloClient } from './client'
import { store } from './store'

const app = createApp(App)
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

app.provide(ApolloClients, {
  default: apolloClient,
})
app.use(i18n)
app.use(router)
app.use(store)
app.provide('app', appInfo)
app.provide('updateAppInfo', updateAppInfo)
app.mount('#app')
