import { defineCustomElement } from 'vue'
import Counter from '../components/Counter.vue'
import { configureApp } from './helper'

const WebCounter = defineCustomElement(Counter, {
  configureApp,
})

customElements.define('wc-counter', WebCounter)

export default WebCounter
