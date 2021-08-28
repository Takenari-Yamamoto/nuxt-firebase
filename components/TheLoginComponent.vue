<template>
  <div class="the-login-component">
    <template v-if="!alreadyRegister">
      <h1 class="title">ログインするかぁ？</h1>
      <input v-model="email" class="form" type="text" placeholder="Email">
      <input v-model="password" class="form" type="text" placeholder="Password">
      <button class="btn" @click="$store.dispatch('user/login', { email: email, password: password })">Login</button>
      <button @click="alreadyRegister = !alreadyRegister">まだ登録してへん…</button>
    </template>
    <template v-if="alreadyRegister">
      <h1 class="title">会員登録する？</h1>
      <input v-model="email" class="form" type="text" placeholder="Email">
      <input v-model="password" class="form" type="text" placeholder="Password">
      <button class="btn" @click="$store.dispatch('user/register', { email: email, password: password })">レジスター</button>
      <button @click="alreadyRegister = !alreadyRegister">登録してるお…</button>
    </template>
  </div>

</template>

<script>
export default {
 data () {
   return {
     email: 'tktkymnr1216@gmail.com',
     password: 'tktkymnr1216@gmail.com',
     alreadyRegister: false
   }
 },
 methods: {
   login(email, password) {
     this.$store.dispatch('user/register', { email, password })
   }
 }

}
</script>


<style>
.the-login-component {
  width: 60%;
  display: flex;
  flex-direction: column;
  border: solid 1px;
  border-radius: 14px;
  padding: 2rem;
  background-color:rgb(230, 230, 230) ;

}

.title {
  text-align: center;
}

.form {
  margin-bottom :1.5rem;
  padding: 1rem;
  border-radius: 1rem;
}

.btn {
  padding: 1rem;
  border-radius: 1rem;
}

</style>
