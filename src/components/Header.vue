<template>
  <div id="headerWrapper">
    <router-link :to="{ name: 'homepage'}">Home</router-link>
    <router-link :to="{ name: 'history'}">History</router-link>
  </div>
</template>

<script>
export default {
  name: "header-component"
}

</script>
<style scoped>

router-link {
  background: blue;
}

</style>
