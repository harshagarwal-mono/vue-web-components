<template>
  <main class="post">
    <h1>Post Id: {{ id }}</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <div v-else>
      <p>Id: {{ post.id }}</p>
      <h2>Title: {{ post.title }}</h2>
      <p>Body: {{ post.body }}</p>
    </div>
  </main>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import GetPostById from '~/graphql/queries/GetPostById.gql'

export default {
  props: {
    id: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  setup({ id }) {
    const { result, loading, error } = useQuery(GetPostById, {
      id,
    })

    return {
      result,
      loading,
      error,
    }
  },
  computed: {
    post() {
      return this.result?.post || {}
    },
  },
}
</script>

<style scoped>
.post {
  min-width: 500px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0);
  padding: 10px;
  margin: 20px 0px;
  min-height: 220px;
}
</style>

<style>
@import '../assets/post.css';
</style>
