<template>
  <div class="after-login">
    <template v-if="$store.state.user.isLoggedIn">
      <h2>あなたのユーザー情報</h2>
      <InformationList class="item" :title="`Email`" :information="email" />
      <InformationList class="item" :title="`ID`" :information="id" />
      <InformationList class="item" :title="`Name`" :information="name" />
      <InformationList
        class="item"
        :title="`Created At`"
        :information="registerdDate"
      />
    </template>
  </div>
</template>

<script>
import InformationList from '../Atoms/InformationList';

export default {
  components: {
    InformationList,
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
    email() {
      return this.$store.state.user.email;
    },
    name() {
      return this.$store.state.user.name
        ? this.$store.state.user.name
        : '設定されてないお';
    },
    id() {
      return this.$store.state.user.id;
    },
    registerdDate() {
      const dateTime = new Date(this.$store.state.user.registeredDate * 1000);
      return dateTime.toLocaleDateString();
    },
  },
  methods: {
    uzai() {
      window.alert('ログインしろよ');
    },
  },
};
</script>
