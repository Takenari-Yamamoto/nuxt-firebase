<template>
  <div>
    <TheAppHeader />
    <Nuxt class="layout" />
  </div>
</template>

<script>
import TheAppHeader from '@/components/Organisms/TheAppHeeader'

export default {
  components: {
    TheAppHeader,
  },
}
</script>

<style scoped>
.layout {
  padding: 0 1.6rem;
}
</style>
