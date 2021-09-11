<template>
  <div class="login-form">
    <p class="text">ユーザーネーム</p>
    <input
      v-model="userName"
      class="form"
      type="text"
      placeholder="User Name"
    />
    <p class="text">メールアドレス</p>
    <input v-model="email" class="form" type="text" placeholder="Email" />
    <p class="text">パスワード</p>
    <input v-model="password" class="form" type="text" placeholder="Password" />
    <button
      class="btn -red"
      @click="
        $store.dispatch('user/register', {
          email: email,
          password: password,
          displayName: userName,
        })
      "
    >
      会員登録
    </button>
    <NuxtLink to="/user/login" class="nonmember">会員の方はこちら</NuxtLink>
  </div>
</template>
