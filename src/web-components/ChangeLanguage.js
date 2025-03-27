import ChangeLanguage from '~/components/ChangeLanguage.vue'
import { defineCustomElement } from 'vue'
import { configureApp } from './helper'

const WebChangeLanguage = defineCustomElement(ChangeLanguage, {
  configureApp,
})

customElements.define('wc-change-language', WebChangeLanguage)

export default WebChangeLanguage
