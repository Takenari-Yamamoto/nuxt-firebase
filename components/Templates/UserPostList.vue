<template>
  <div>
    <h2>あなたの投稿一覧</h2>
    <div v-for="post in myPosts" :key="post.key" class="item">
      <p class="uid">User id: {{ post.uid }}</p>
      <p class="title">Title: {{ post.title }}</p>
      <p class="content">Content: {{ post.content }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      posts: [],
      myPosts: [],
    }
  },
  computed: {
    uid() {
      return this.$store.state.user.id
    },
  },
  created() {
    firebase
      .database()
      .ref('/posts')
      .once('value')
      .then((result) => {
        if (result.val()) {
          this.posts = result.val()
          console.log(this.posts)
          this.myPosts = this.posts.filter((value) => value.uid === this.uid)
          console.log(this.myPosts)
        }
      })
  },
}
</script>
