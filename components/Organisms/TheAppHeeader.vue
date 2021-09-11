<template>
  <header class="the-app-header">
    <NuxtLink to="/" class="logo">✈️ Travel List ✈️</NuxtLink>
    <template v-if="$store.state.user.isLoggedIn">
      <NuxtLink to="/" class="item">Top</NuxtLink>
      <NuxtLink to="/travel/new" class="item">Post</NuxtLink>
      <NuxtLink to="/user/mypage" class="item">MyPage</NuxtLink>
    </template>
  </header>
</template>

<script>
export default {
  computed: {},
};
</script>
