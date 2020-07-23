<template>
  <div id="historyWrapper">
    <div id="buttonLeftWrapper">
      <router-link :to="{ name: 'historyofpollokshields'}">History of Pollokshields</router-link>
    </div>
    <div id="titleWrapper">

    </div>
    <div id="buttonRightWrapper">

    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "history"
}
</script>
<style lang="scss" scoped>
</style>
