<template>
  <div class="the-login-component">
    <h1 class="title">ログインするかぁ？</h1>
    <input class="form" type="text" placeholder="Email">
    <input class="form" type="text" placeholder="Password">
    <button class="btn">Login</button>
  </div>
</template>

<style>
.the-login-component {
  width: 60%;
  display: flex;
  flex-direction: column;
  border: solid 1px;
  border-radius: 14px;
  padding: 2rem;
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
