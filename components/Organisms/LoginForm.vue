<template>
  <div class="login-form">
    <p class="text">メールアドレス</p>
    <input v-model="email" class="form" type="text" placeholder="Email" />
    <p class="text">パスワード</p>
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
    <NuxtLink to="/user/register" class="nonmember"
      >会員登録がまだの方はこちら</NuxtLink
    >
  </div>
</template>
