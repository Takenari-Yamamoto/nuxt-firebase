<template>
  <div class="post-page">
    <TheAppHeader></TheAppHeader>
    <div class="main">
      <h1>post page desu</h1>
      {{ uid }}
      <label for="title">Title</label>
      <input v-model="title" type="text" name="title" />
      <label for="title">Content</label>
      <textarea v-model="content" class="mb-2" type="text" name="content" />
      <button
        class="btn -blue"
        @click="
          $store.dispatch('travel/post', {
            title: title,
            content: content,
            uid: uid,
          })
        "
      >
        投稿
      </button>
    </div>
  </div>
</template>

<script>
import TheAppHeader from '@/components/Organisms/TheAppHeeader'

export default {
  components: {
    TheAppHeader,
  },
  data() {
    return {
      title: '',
      content: '',
    }
  },
  computed: {
    uid() {
      return this.$store.state.user.id
    },
  },
}
</script>

<style scoped>
.main {
  padding: 0 1.6rem;
  display: flex;
  flex-direction: column;
}

.mb-2 {
  margin-bottom: 2rem;
}

.btn {
  width: 20%;
}
</style>
