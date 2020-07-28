<template>
  <div id="mainPageWrapper">
    <div id="header">
      <header-component />
    </div>
    <div id="route">
      <router-view />
    </div>
  </div>

</template>
<script>

import Header from '@/components/Header.vue'

export default {
  name: 'main-page',
  components: {
    'header-component': Header
  }
}
</script>
<style scoped>

</style>
