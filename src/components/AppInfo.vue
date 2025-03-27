<template>
  <div class="app">
    <h1>App Info</h1>
    <p>Version: {{ appInfo.version }}</p>
    <p>Author: {{ appInfo.author }}</p>
    <button @click="handleBtnClick">Update Info</button>
  </div>
</template>

<script>
export default {
  inject: ['app', 'updateAppInfo'],
  computed: {
    appInfo() {
      return (
        this.app || {
          version: 'Not Provided',
          author: 'Not Provided',
        }
      )
    },
  },
  methods: {
    handleBtnClick() {
      const version = prompt('Enter the version')
      const author = prompt('Enter the author')
      this.updateAppInfo({ version, author })
    },
  },
}
</script>

<style scoped>
.app {
  margin: 20px 0px;
  padding: 20px;
  background-color: bisque;
  box-shadow: 5px 5px 8px rgba(110, 61, 2, 0.8);
  min-width: 200px;
  min-height: 150px;
}

.app button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
}

.app button:hover {
  background-color: #e0e0e0;
}
</style>
