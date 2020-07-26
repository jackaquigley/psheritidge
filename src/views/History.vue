<template>
  <div id="historyWrapper">
    <div id="buttonLeftWrapper">
      <router-link :to="{ name: 'historyofpollokshields'}">History of Pollokshields</router-link>
      <router-link :to="{ name: 'ww1archives'}">WW1 Archives</router-link>
      <router-link :to="{ name: 'leisure'}">Leisure</router-link>
    </div>
    <div id="titleWrapper">
      <h1>History</h1>
    </div>
    <div id="buttonRightWrapper">
      <router-link :to="{ name: 'falklandwararchives'}">Falkland War Archives</router-link>
      <router-link :to="{ name: 'ww2archives'}">WW2 Archives</router-link>
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
