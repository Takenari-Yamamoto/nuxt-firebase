<template>
  <div class="login-page">
    <h1 class="title">ログイン</h1>
    <LoginForm class="form" />
  </div>
</template>

<script>
import LoginForm from '@/components/Organisms/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>
