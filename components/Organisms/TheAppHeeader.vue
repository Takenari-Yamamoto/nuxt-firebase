<template>
  <header class="the-app-header">
    <NuxtLink to="/" class="logo">✈️ Travel List ✈️</NuxtLink>
    <template v-if="$store.state.user.isLoggedIn">
      <NuxtLink to="/" class="item">Top</NuxtLink>
      <NuxtLink to="/travel/new" class="item">Post</NuxtLink>
      <NuxtLink to="/user/mypage" class="item">MyPage</NuxtLink>
      <button class="btn -blue logout" @click="$store.dispatch('user/logout')">
        Logout
      </button>
    </template>
    <template v-if="!$store.state.user.isLoggedIn">
      <NuxtLink to="/user/login" class="btn -blue logout"
        >Register / Login</NuxtLink
      >
    </template>
  </header>
</template>
