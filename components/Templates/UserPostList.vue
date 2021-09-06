<template>
  <div>
    <h2>あなたの投稿一覧</h2>
    <p>{{ posts }}</p>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

export default {
  data() {
    return {
      posts: null,
    }
  },
  created() {
    firebase
      .database()
      .ref(this.$store.state.user.id + '/post')
      .once('value')
      .then((result) => {
        if (result.val()) {
          this.posts = result.val()
          console.log(this.posts)
        }
      })
  },
}
</script>
