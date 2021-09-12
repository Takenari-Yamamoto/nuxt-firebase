<template>
  <div class="edit-travel">
    <h1>編集ページ</h1>
    <p class="id">Post id {{ post.postId }}</p>
    <p class="uid">User id: {{ post.uid }}</p>
    <input v-model="post.title" type="text" name="title" />
    <textarea v-model="post.content" class="mb-2" type="text" name="content" />
    <button
      class="btn -blue"
      @click="
        $store.dispatch('travel/editTravelDetail', {
          title: post.title,
          content: post.content,
          postId: post.postId,
        })
      "
    >
      更新
    </button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase';

export default {
  data() {
    return {
      post: [],
    };
  },
  computed: {
    uid() {
      return this.$store.state.user.id;
    },
  },
  created() {
    this.getTravelDetail();
  },
  methods: {
    getTravelDetail() {
      firebase
        .database()
        .ref('posts/' + this.$route.params.id)
        .once('value')
        .then((result) => {
          if (result.val()) {
            this.post = result.val();
          }
        });
    },
  },
};
</script>
