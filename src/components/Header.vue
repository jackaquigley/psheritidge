<template>
  <div id="headerWrapper">
    <header>
      <div id="titleWrapper">
        <h1>Pollokshields Heritage</h1>
      </div>
      <div id="donateWrapper">
        <div id="innerDonate">
        <router-link class="headerLink" :to="{ name: 'guide'}">Guide to the Site</router-link>
        <router-link class="headerLink" :to="{ name: 'donate'}">Donate</router-link>
        </div>
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
        <a>Gallery</a>
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
  padding-left: 5px;
  padding-right: 5px;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

#innerDonate {

}

#linksWrapper {
  align-self: center;
  flex-wrap: wrap;
  }

.headerLink {
  padding: 6px;
  font-size: 24px;
}

</style>
