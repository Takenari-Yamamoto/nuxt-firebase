<template>
  <div class="index">
    <h1 class="title">Nuxt と Firebase で遊ぼう❤️</h1>
    <TheLoginComponent class="login" />
  </div>
</template>

<script>
import TheLoginComponent from "../components/TheLoginComponent";

export default {
  components: {
    TheLoginComponent
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

.title {
  margin-bottom: 3rem;
}

</style>
