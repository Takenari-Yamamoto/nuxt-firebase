<template>
  <div class="login-page">
    <h1 class="title">会員登録</h1>
    <RegisterForm class="form" />
  </div>
</template>

<script>
import RegisterForm from '@/components/Organisms/RegisterForm.vue';

export default {
  components: {
    RegisterForm,
  },
};
</script>
