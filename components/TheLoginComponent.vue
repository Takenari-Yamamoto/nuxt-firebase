<template>
  <div class="the-login-component">
    <template v-if="!alreadyRegister">
      <h1 class="title">ログインしますか？</h1>
      <input v-model="email" class="form" type="text" placeholder="Email">
      <input v-model="password" class="form" type="text" placeholder="Password">
      <button class="btn -red" @click="$store.dispatch('user/setPersistenceSession', { email: email, password: password })">ログイン</button>
      <button class="btn -white" @click="alreadyRegister = !alreadyRegister">メールアドレスで新規登録する</button>
    </template>
    <template v-if="alreadyRegister">
      <h1 class="title">会員登録しますか？</h1>
      <input v-model="email" class="form" type="text" placeholder="Email">
      <input v-model="password" class="form" type="text" placeholder="Password">
      <button class="btn -red" @click="$store.dispatch('user/register', { email: email, password: password })">会員登録</button>
      <button class="btn -white" @click="alreadyRegister = !alreadyRegister">メールアドレスでログインする</button>
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

}
</script>


<style>
.the-login-component {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: solid 1px;
  border-radius: 14px;
  padding: 2rem;
  background-color:rgb(236, 236, 236);
  align-items: center;
}

.title {
  font-size: 1rem;
  text-align: center;
}

.form {
  margin-bottom :1.5rem;
  padding: 1rem;
  border-radius: 1rem;
  width: 70%;
}

.form:focus {
  outline: 0;
  border-color:rgb(255, 174, 0);
}

</style>
