<template>
  <div class="index">
    <div class="toppage">
      <h1>Travel List</h1>
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
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      posts: [],
    }
  },
  created() {
    this.getAllTravelPosts()
  },
  methods: {
    getAllTravelPosts() {
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
