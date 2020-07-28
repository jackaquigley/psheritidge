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
        <div id="buttonsWrapper">
        <router-link class="buttonLink" :to="{ name: 'homepage'}">Home</router-link>
          <a class="buttonLink">About Us</a>
          <a class="buttonLink">Contact Us</a>
          <a class="buttonLink">News</a>
          <a class="buttonLink">Location</a>
          <router-link class="buttonLink" :to="{ name: 'donate'}">Donate</router-link>
          <router-link class="buttonLink" :to="{ name: 'history'}">History</router-link>
          <a class="buttonLink">What Others Say</a>
          <a class="buttonLink">Conservation Advice</a>
          <a class="buttonLink">Publications</a>
          <a class="buttonLink">Design Matters</a>
          <a class="buttonLink">Useful Links</a>
          <a class="buttonLink">Events</a>
          <a class="buttonLink">How To Join</a>
          <a class="buttonLink">Projects</a>
          <a class="buttonLink">Gallery</a>
        </div>
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
  padding-left: 30px;
  padding-right: 30px;
  font-family: Garamond;
  font-size: 20px;
  height: 20px;
  text-decoration: none;
  color: black;
}

h1 {
  font-family: georgia;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

#buttonsWrapper {
  background: lightblue;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
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


#linksWrapper {
  align-self: center;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  }

.headerLink {
  padding: 6px;
  padding-left: 32px;
  padding-right: 32px;
  font-size: 24px;
}

.headerLink:hover {
  text-decoration: underline;
  color: darkblue;
}

.buttonLink:hover {
  text-decoration: underline;
  color: darkblue;
}

</style>
