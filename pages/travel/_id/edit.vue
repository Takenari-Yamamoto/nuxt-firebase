<template>
  <div class="main">
    <h1>Edit page desu</h1>
    {{ uid }}
    <label for="title">Title</label>
    <input v-model="post.title" type="text" name="title" />
    <label for="title">Content</label>
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
      編集
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
