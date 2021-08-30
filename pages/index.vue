<template>
  <div class="index">
    <h1 class="title">Nuxt と Firebase のログイン機能</h1>
    <p>{{ $store.state.message }}</p>
    <TheLoginComponent class="login" />
  </div>
</template>

<script>
import TheLoginComponent from "../components/TheLoginComponent";

export default {
  components: {
    TheLoginComponent
  },
  computed: {
  }
}
</script>

<style scoped>
.index {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login {
  width: 80%;
}

.title {
  margin-bottom: 3rem;
}

</style>
