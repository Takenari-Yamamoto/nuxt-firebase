<template>
  <div>
    <TheAppHeader />
    <Nuxt class="layout-page" />
  </div>
</template>

<script>
import TheAppHeader from '@/components/Organisms/TheAppHeeader';

export default {
  components: {
    TheAppHeader,
  },
};
</script>

<style>
.layout-page {
  padding: 0 1.6rem;
}
</style>
