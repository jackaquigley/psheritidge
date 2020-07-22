<template>
  <main-page />
</template>

<script>

import MainPage from '@/views/MainPage.vue'

export default {
  name: 'main-page-view',
  components: {
    'main-page': MainPage
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
