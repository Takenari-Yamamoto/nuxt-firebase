<template>
  <div>
    <div class="my-page">
      <h1 class="title">MY PAGE です</h1>
      <button class="btn -white" @click="status = true">
        User information
      </button>
      <button class="btn -white" @click="status = false">Post List</button>
      <template v-if="status">
        <UserInformation />
      </template>
      <template v-else>
        <UserPostList />
      </template>
    </div>
  </div>
</template>

<script>
import UserInformation from '@/components/Templates/UserInformation';
import UserPostList from '@/components/Templates/UserPostList';

export default {
  components: {
    UserInformation,
    UserPostList,
  },
  data() {
    return {
      status: true,
    };
  },
  computed: {
    uid() {
      return this.$store.state.user.id;
    },
  },
};
</script>
