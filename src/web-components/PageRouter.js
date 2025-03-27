import PageRouter from '~/components/PageRouter.vue'
import { defineCustomElement } from 'vue'
import { configureApp } from './helper'

const WebPageRouter = defineCustomElement(PageRouter, {
  configureApp,
})

customElements.define('wc-page-router', WebPageRouter)

export default WebPageRouter
