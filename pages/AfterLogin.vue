<template>
  <div v-if="isLoggedIn" class="after-login">
    <p><span class="text">Firebase authentication </span>でのログインに成功したようじゃな</p>
    <p>Email: {{ user.email }}</p>
    <button @click="$store.dispatch('user/logout')">ログアウト</button>
  </div>
</template>


<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
    user() {
      return this.$store.state.user.user
    },
  },
}
</script>

<style scoped>

.after-login {
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
}

.text {
  font-size: 3rem;
  font-family: 'Courier New', Courier, monospace;
}
</style>
