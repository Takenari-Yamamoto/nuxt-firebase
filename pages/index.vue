<template>
  <div class="index-page">
    <h1 class="title">Travel List</h1>
    <div class="list">
      <TravelPost
        v-for="post in allPosts"
        :key="post.postId"
        :title="post.title"
        :content="post.content"
        :uid="post.uid"
        :post-id="post.postId"
        class="post"
      />
    </div>
  </div>
</template>

<script>
import TravelPost from '@/components/Atoms/TravelPost';

export default {
  components: {
    TravelPost,
  },
  async asyncData() {
    const allPosts = await fetch(
      'https://nuxt-firebase-acb48-default-rtdb.firebaseio.com/posts.json',
    ).then((res) => res.json());
    return { allPosts };
  },
};
</script>
