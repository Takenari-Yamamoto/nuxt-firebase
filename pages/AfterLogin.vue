<template>
  <div class="after-login">
    <template  v-if="isLoggedIn">
      <p class="text">Firebase authenticationでログインに成功しました！</p>
      <p>あなたのユーザー情報はこちらです</p>
      <InformationList class="item" :title="`Email`" :information="email" />
      <InformationList class="item" :title="`ID`" :information="id" />
      <InformationList class="item" :title="`Name`" :information="name" />
      <InformationList class="item" :title="`Created At`" :information="createdAt" />
      <p>{{ isLoggedIn }}</p>
      <button class="btn -blue" @click="$store.dispatch('user/logout')">ログアウト</button>
    </template>
    <template v-if="!isLoggedIn">
      <p><span class="text">Firebase authentication </span>でのログインに失敗したようじゃな</p>
      <button class="btn -blue" @click="$store.dispatch('user/logout')">ログアウト</button>
    </template>
  </div>
</template>

<script>
import InformationList from "../components/InformationList";

export default {
  components: {
    InformationList
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
    user() {
      return this.$store.state.user.user
    },
    email() {
      return this.$store.state.user.email;
    },
    name() {
      return this.$store.state.user.name;
    },
    id() {
      return this.$store.state.user.id;
    },
    createdAt() {
      const date = new Date(this.$store.state.user.createdAt * 1000);
      return date.getFullYear();
    }
  },
  created() {
    this.$store.dispatch('user/onAuth')
  },
}
</script>

<style scoped>

.after-login {
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-content: center;
}

.item {
  margin-bottom: 0.5rem;
}

.text {
  font-size: 2rem;
}

.btn {
  align-self: center;
}
</style>
