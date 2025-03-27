<script setup>
import Counter from '~/components/Counter.vue'
import ChangeLanguage from '~/components/ChangeLanguage.vue'
import UserPost from '~/components/UserPost.vue'
import GlobalCounter from '~/components/GlobalCounter.vue'
import UserInfo from '~/components/UserInfo.vue'
import AppInfo from '~/components/AppInfo.vue'
</script>

<template>
  <main>
    <h1>Home</h1>
    <Counter />
    <Counter />
    <ChangeLanguage />
    <GlobalCounter />
    <GlobalCounter />
    <UserPost :id="1" />
    <UserPost :id="2" />
    <UserInfo />
    <AppInfo />
  </main>
</template>
