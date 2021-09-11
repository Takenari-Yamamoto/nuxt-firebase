<template>
  <div>
    <NuxtChild />
    <div v-if="!$route.path.match(/edit/)">
      <div class="travel-detail">
        <h2>投稿詳細です</h2>
        <nuxt-link :to="post.postId + '/edit'">編集</nuxt-link>
        <p>Post id: {{ post.postId }}</p>
        <p class="uid">User id: {{ post.uid }} さんの投稿です</p>
        <p class="title">Title: {{ post.title }}</p>
        <p class="content">Content: {{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  components: {},
  data() {
    return {
      post: [],
    }
  },
  computed: {
    uid() {
      return this.$store.state.user.id
    },
  },
  created() {
    this.getTravelDetail()
  },
  methods: {
    getTravelDetail() {
      firebase
        .database()
        .ref('posts/' + this.$route.params.id)
        .once('value')
        .then((result) => {
          if (result.val()) {
            this.post = result.val()
            console.dir(this.post)
          }
        })
    },
  },
}
</script>
