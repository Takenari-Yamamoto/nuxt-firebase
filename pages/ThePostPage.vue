<template>
  <div class="post-page">
    <TheAppHeader></TheAppHeader>
    <div class="main">
      <h1>post page desu</h1>
      <label for="title">Title</label>
      <input v-model="title" type="text" name="title" />
      <label for="title">Content</label>
      <textarea v-model="content" class="mb-2" type="text" name="content" />
      <button @click="post(title, content)" class="btn -blue">投稿</button>
    </div>
  </div>
</template>

<script>
import TheAppHeader from '../components/Organisms/TheAppHeeader'
import firebase from '~/plugins/firebase'

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
  methods: {
    post(title, content) {
      firebase.database().ref('post').set({
        travel_title: this.title,
        travel_content: this.content,
      })
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
