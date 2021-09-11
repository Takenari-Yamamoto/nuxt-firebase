<template>
  <div class="index">
    <h1>Travel List</h1>
    <TravelPost class="post" />
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
</template>

<script>
import firebase from '~/plugins/firebase'
import TravelPost from '@/components/Atoms/TravelPost'

export default {
  components: {
    TravelPost,
  },
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
