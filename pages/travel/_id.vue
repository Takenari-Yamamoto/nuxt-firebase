<template>
  <div>
    <NuxtChild />
    <div v-if="!$route.path.match(/edit/)">
      <div class="travel-detail">
        <p class="id">Post id {{ post.postId }}</p>
        <p class="uid">User id: {{ post.uid }}</p>
        <nuxt-link :to="post.postId + '/edit'" class="btn -white"
          >編集</nuxt-link
        >
        <p class="title">{{ post.title }}</p>
        <p class="content">{{ post.content }}</p>
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
