<template>
  <div class="travel-post" @click="moveToDetail(postId)">
    <img class="image" src="@/assets/image/test.jpeg" alt="travel" />
    <p class="title">{{ title }}</p>
    <p class="text">{{ content }}</p>
    <p class="uid">{{ uid }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
  },
  methods: {
    moveToDetail(id) {
      this.$router.push('/travel/' + id)
    },
  },
}
</script>
