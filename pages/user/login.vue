<template>
  <div>
    <h1 class="title">ログインしますか？</h1>
    <input v-model="email" class="form" type="text" placeholder="Email" />
    <input v-model="password" class="form" type="text" placeholder="Password" />
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
    <button class="btn -white">会員登録をしてない方はこちら</button>
  </div>
</template>
