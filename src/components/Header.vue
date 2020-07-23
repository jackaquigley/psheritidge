<template>
  <div id="headerWrapper">
    <header>
      <div id="titleWrapper">
        <h1>Pollokshields Heritage</h1>
      </div>
      <div id="donateWrapper">
        <h1>Donate.</h1>
      </div>
      <div id="linksWrapper">
        <router-link :to="{ name: 'homepage'}">Home</router-link>
        <a>About Us</a>
        <a>Contact Us</a>
        <a>News</a>
        <a>Location</a>
        <a>Home</a>
        <router-link :to="{ name: 'history'}">History</router-link>
        <a>What Others Say</a>
        <a>Conservation Advice</a>
        <a>Publications</a>
        <a>Design Matters</a>
        <a>Useful Links</a>
        <a>Events</a>
        <a>How To Join</a>
        <a>Projects</a>
        <a>Gallary</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "header-component"
}

</script>
<style scoped>

a {
  padding: 2px;
  border: 1px solid black;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

#titleWrapper {
  width: 70%;
  text-align: center;
}

#donateWrapper {
  width: 30%;
  text-align: center;
}

#linksWrapper {
  align-self: center;
  }

</style>
