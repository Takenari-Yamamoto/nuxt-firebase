<template>
  <div class="index">
    <TheAppHeader></TheAppHeader>
    <div class="toppage">
      <h1>Travel List</h1>
      <h2>みんなの投稿一覧</h2>
      <div class="item">
        <p class="title">Title</p>
        <p class="content">Content content content</p>
      </div>
      <NuxtLink to="/UserLoginPage">投稿するにはログインしてください</NuxtLink>
    </div>
  </div>
</template>

<script>
import TheAppHeader from '../components/Organisms/TheAppHeeader'

export default {
  components: {
    TheAppHeader,
  },
}
</script>

<style scoped>
.toppage {
  padding: 0 1.6rem;
}

.item {
  background-color: aliceblue;
  padding: 2rem;
  font-weight: bold;
  width: 70%;
  border: thin solid gray;
  margin-bottom: 1rem;
}
</style>
