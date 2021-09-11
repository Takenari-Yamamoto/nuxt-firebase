<template>
  <div>
    <div class="login-page">
      <div class="the-login-component">
        <template v-if="!alreadyRegister">
          <h1 class="title">ログインしますか？</h1>
          <input v-model="email" class="form" type="text" placeholder="Email" />
          <input
            v-model="password"
            class="form"
            type="text"
            placeholder="Password"
          />
          <button
            class="btn -red"
            @click="
              $store.dispatch('user/login', {
                email: email,
                password: password,
              })
            "
          >
            ログイン
          </button>
          <button
            class="btn -white"
            @click="alreadyRegister = !alreadyRegister"
          >
            会員登録をしてない方はこちら
          </button>
        </template>
        <template v-if="alreadyRegister">
          <h1 class="title">会員登録しますか？</h1>
          <input v-model="email" class="form" type="text" placeholder="Email" />
          <input
            v-model="password"
            class="form"
            type="text"
            placeholder="Password"
          />
          <button
            class="btn -red"
            @click="
              $store.dispatch('user/register', {
                email: email,
                password: password,
              })
            "
          >
            会員登録
          </button>
          <button
            class="btn -white"
            @click="alreadyRegister = !alreadyRegister"
          >
            すでに会員の方はこちら
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'tktkymnr1216@gmail.com',
      password: 'tktkymnr1216@gmail.com',
      alreadyRegister: false,
    }
  },
}
</script>

<style>
.login-page {
  display: flex;
}

.the-login-component {
  margin-top: 5rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  border: solid 1px;
  border-radius: 14px;
  padding: 2rem;
  background-color: rgb(236, 236, 236);
  align-items: center;
}

.title {
  font-size: 1rem;
}

.form {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
  width: 70%;
}

.form:focus {
  outline: 0;
  border-color: rgb(255, 174, 0);
}
</style>
