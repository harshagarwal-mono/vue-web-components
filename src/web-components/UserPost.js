import { defineCustomElement } from 'vue'
import UserPost from '~/components/UserPost.vue'
import { configureApp } from './helper'

const WebUserPost = defineCustomElement(UserPost, {
  configureApp,
})

customElements.define('wc-user-post', WebUserPost)

export default WebUserPost
