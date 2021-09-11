<template>
  <div class="index">
    <h1 class="title">Travel List</h1>
    <div class="list">
      <TravelPost
        v-for="post in posts"
        :key="post.postId"
        :title="post.title"
        :content="post.content"
        :uid="post.uid"
        :post-id="post.postId"
        class="post"
      />
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
  },
}
</script>
