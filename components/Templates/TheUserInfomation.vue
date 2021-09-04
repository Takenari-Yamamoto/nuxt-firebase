<template>
  <div class="after-login">
    <template v-if="$store.state.user.isLoggedIn">
      <p class="text">Firebase authenticationでログインに成功しました！</p>
      <p>あなたのユーザー情報はこちらです</p>
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
import InformationList from '../Atoms/InformationList'

export default {
  components: {
    InformationList,
  },
  computed: {
    user() {
      return this.$store.state.user.user
    },
    email() {
      return this.$store.state.user.email
    },
    name() {
      return this.$store.state.user.name
        ? this.$store.state.user.name
        : '設定されてないお'
    },
    id() {
      return this.$store.state.user.id
    },
    registerdDate() {
      const dateTime = new Date(this.$store.state.user.registeredDate * 1000)
      return dateTime.toLocaleDateString()
    },
  },
  methods: {
    uzai() {
      window.alert('ログインしろよ')
    },
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

.fan {
  font-size: 10rem;
  transition: 1s;
}

.fan:hover {
  color: rgb(163, 8, 235);
  background-color: yellowgreen;
}

.btn {
  align-self: center;
}

/* @keyframes myframe {
  from {
    width: 50px;
    height: 0px;
    background: red;
  }
  50% {
    width: 50px;
    height: 50px;
    background: blue;
  }
  to {
    width: 100px;
    height: 50px;
    background: green;
  }
} */
</style>
