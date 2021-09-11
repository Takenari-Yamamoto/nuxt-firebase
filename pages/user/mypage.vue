<template>
  <div>
    <div class="mypage">
      <h1>MY PAGE です</h1>
      <button @click="status = true">User information</button>
      <button @click="status = false">Post List</button>
      <template v-if="status">
        <TheUserInfomation />
      </template>
      <template v-else>
        <UserPostList />
      </template>
    </div>
  </div>
</template>

<script>
import TheUserInfomation from '@/components/Templates/TheUserInfomation'
import UserPostList from '@/components/Templates/UserPostList'

export default {
  components: {
    TheUserInfomation,
    UserPostList,
  },
  data() {
    return {
      status: true,
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
.mypage {
  padding: 0 1.6rem;
}
</style>
