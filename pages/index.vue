<template>
  <div class="index">
    <TheAppHeader></TheAppHeader>
    <div class="toppage">
      <h1>Travel List</h1>
      <h2>みんなの投稿一覧</h2>
      <div v-for="post in posts" :key="post.postId" class="item">
        <p class="uid">User id: {{ post.uid }}</p>
        <p class="title">Title: {{ post.title }}</p>
        <p class="content">Content: {{ post.content }}</p>
        <button @click="moveToDetail(post.postId)">詳細へ</button>
      </div>
      <NuxtLink to="/user/UserLoginPage"
        >投稿するにはログインしてください</NuxtLink
      >
    </div>
  </div>
</template>

<script>
import TheAppHeader from '../components/Organisms/TheAppHeeader'
import firebase from '~/plugins/firebase'

export default {
  components: {
    TheAppHeader,
  },
  data() {
    return {
      posts: [],
    }
  },
  created() {
    firebase
      .database()
      .ref('/posts')
      .once('value')
      .then((result) => {
        if (result.val()) {
          this.posts = result.val()
        }
      })
  },
  methods: {
    moveToDetail(id) {
      this.$router.push('/travel/' + id)
    },
  },
}
</script>

<style scoped>
.toppage {
  padding: 0 1.6rem;
}

.item {
  text-align: left;
  background-color: aliceblue;
  padding: 2rem;
  font-weight: bold;
  width: 70%;
  border: thin solid gray;
  margin-bottom: 1rem;
}
</style>
