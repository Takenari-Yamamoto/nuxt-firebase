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
export default {
  computed: {
    post() {
      return this.$store.state.travel.postDetail;
    },
  },
  created() {
    this.$store.dispatch('travel/getTravelDetail', this.$route.params.id);
  },
};
</script>
