<template>
  <div class="user">
    <h1>User Info</h1>
    <p>Name: {{ userInfo.name }}</p>
    <p>Email: {{ userInfo.email }}</p>
    <button @click="handleBtnClick">Update Info</button>
  </div>
</template>

<script>
export default {
  inject: ['user', 'updateUserInfo'],
  computed: {
    userInfo() {
      return (
        this.user || {
          name: 'Not Provided',
          email: 'Not Provided',
        }
      )
    },
  },
  methods: {
    handleBtnClick() {
      const name = prompt('Enter your name')
      const email = prompt('Enter your email')
      this.updateUserInfo({ name, email })
    },
  },
}
</script>

<style scoped>
.user {
  margin: 20px 0px;
  padding: 20px;
  background-color: bisque;
  box-shadow: 5px 5px 8px rgba(110, 61, 2, 0.8);
  min-width: 200px;
  min-height: 150px;
}

.user button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
}

.user button:hover {
  background-color: #e0e0e0;
}
</style>
