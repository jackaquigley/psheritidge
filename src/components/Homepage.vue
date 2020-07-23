<template>
  <div id="homepageWrapper">
    <p>Welcome to Pollokshields!</p>
    <p>The original, the biggest and best-preserved planned garden suburb in the UK.</p>
    <p>A Conservation area</p>
    <img src="https://pollokshieldsheritage.co.uk/img/PH%20web%20home%20image.jpg" alt="Images Of Pollokshields">
    <div>
      <p>AGM Reports</p>
      <p>Latest Planning Applications</p>
      <p>Lecture Series And AGM
        <span id="redTextHighlight">Postponed</span> </p>
      <p>Guided Walk Spring 2020 <span id="redTextHighlight">Cancelled</span> </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
}
</script>
<style scoped>

#homepageWrapper {
  text-align: center;
}

#redTextHighlight {
  color: red;
}

img {

}

</style>
