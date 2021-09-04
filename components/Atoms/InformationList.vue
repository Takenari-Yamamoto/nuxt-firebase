<template>
  <div class="information-list">
    <p class="title">{{title}}</p>
    <p class="information">{{information}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [String, Number],
      required: true
    },
    information: {
      type: [String, Number],
      required: false,
      default: "設定されていません"
    }
  }
}
</script>

<style scoped>
  .information-list {
    display: flex;
    width: 100%;
    border: thin solid #000;
  }

  .title {
    background-color: rgb(192, 192, 192);
    width: 30%;
    margin: 0;
    padding: 1rem;
  }

  .information {
    background-color: white;
    flex:1;
    margin: 0;
    padding: 1rem;
  }

</style>
