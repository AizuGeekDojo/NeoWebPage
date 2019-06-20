<template>
  <footer>
    <div class="footer-bar">
      <img src="../assets/uaizu.png">
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  .footer-bar {
    width: 100%;
    display: flex;
    box-shadow: 0px -5px 7px #0000001c;
    height: 100px;
    text-align: center;
    padding: 60px 0 40px;
    img {
      border-radius: 50px;
      margin: 0 auto;
      width: 100px;
      height: auto;
    }
  }
}
@import '../style/color';

footer {
  .footer-bar {
    border-top: 4px solid $subColor2;
    position: relative;
    background-color: $mainColor1;
    img {
      background-color: $hightLightColor;
    }
  }
}
</style>
