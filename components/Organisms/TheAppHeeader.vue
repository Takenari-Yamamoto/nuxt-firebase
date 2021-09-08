<template>
  <header class="the-app-header">
    <p class="item logo">Travel List</p>
    <template v-if="$store.state.user.isLoggedIn">
      <p class="item"><NuxtLink to="/">Top</NuxtLink></p>
      <p class="item"><NuxtLink to="/travel/new">Post</NuxtLink></p>
      <p class="item"><NuxtLink to="/user/mypage">MyPage</NuxtLink></p>
      <button class="item" @click="$store.dispatch('user/logout')">
        Logout
      </button>
    </template>
  </header>
</template>

<script>
export default {
  computed: {},
}
</script>
