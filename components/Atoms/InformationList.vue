<template>
  <div class="information-list">
    <p class="title">{{ title }}</p>
    <p class="information">{{ information }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [String, Number],
      required: true,
    },
    information: {
      type: [String, Number],
      required: false,
      default: '設定されていません',
    },
  },
};
</script>
