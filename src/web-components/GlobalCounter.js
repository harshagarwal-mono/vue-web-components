import { defineCustomElement } from 'vue'
import GlobalCounter from '~/components/GlobalCounter.vue'
import { configureApp } from './helper'

const WebGlobalCounter = defineCustomElement(GlobalCounter, {
  configureApp,
})

customElements.define('wc-global-counter', WebGlobalCounter)

export default WebGlobalCounter
