<template>
  <div>
    <h1 class="title">会員登録しますか？</h1>
    <input v-model="email" class="form" type="text" placeholder="Email" />
    <input v-model="password" class="form" type="text" placeholder="Password" />
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
    <button class="btn -white" @click="alreadyRegister = !alreadyRegister">
      すでに会員の方はこちら
    </button>
  </div>
</template>
