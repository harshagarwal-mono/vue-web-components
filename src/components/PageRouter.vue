<script setup>
import { provide, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const user = ref({
  name: 'John Doe',
  email: 'johndoe@gmail.com',
})

const updateUserInfo = (info) => {
  user.value = {
    ...user.value,
    ...info,
  }
}

provide('user', user)
provide('updateUserInfo', updateUserInfo)
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '../assets/main.css';
</style>
