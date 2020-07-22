<template>
  <div id="mainPageWrapper">
    <div id="header">
      <header-component />
    </div>
      <p>This is rendered by the Main Page View.</p>
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
<style lang="scss" scoped>
</style>
