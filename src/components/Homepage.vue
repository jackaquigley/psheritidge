<template>
  <div id="homepageWrapper">
  <div id="pageContentWrapper">
    <div id="pageContentWrapperUpper">
      <h3>Welcome to Pollokshields!</h3>
      <p>The original, the biggest and best-preserved planned garden suburb in the UK.</p>
    </div>
    <div id="pageContentWrapperLower">
      <h4>Useful Links</h4>
      <p class="pretendLink">A Conservation area</p>
      <p class="pretendLink">AGM Reports</p>
      <p class="pretendLink">Latest Planning Applications</p>
      <h4>Notices</h4>
      <p>Lecture Series And AGM <span id="redTextHighlight">Postponed</span> </p>
      <p>Guided Walk Spring 2020 <span id="redTextHighlight">Cancelled</span> </p>
    </div>
  </div>
    <div id ="imgWrapper">
    <img src="https://pollokshieldsheritage.co.uk/img/PH%20web%20home%20image.jpg" alt="Images Of Pollokshields">
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
}
</script>
<style scoped>

h3 {
  font-family: georgia;
}

h4 {
  font-family: georgia;
  font-size: 22px;
}

#homepageWrapper {
  text-align: center;
  display: flex;
  flex-wrap:
}

#redTextHighlight {
  color: red;
}

#pageContentWrapper {
  margin-top: 40px;
}

p {
  font-family: Garamond;
  font-size: 18px;
}

.pretendLink:hover {
  text-decoration: underline;
  color: darkblue;
}

</style>
