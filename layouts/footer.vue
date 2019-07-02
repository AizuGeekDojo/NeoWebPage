<template>
  <footer>
    <div class="footer-bar">
      <div class="footer_logo">
        <img src="../assets/uaizu.png">
      </div>
      <div class="footer_contents">
        All rights reserved Aizu Geek Dojo.
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../style/color';
footer {
  box-shadow: 0px -5px 7px #0000001c;
  border-top: 4px solid $subColor2;
  width: 100%;
  height: 200px;
  position: relative;
  background-color: $mainColor1;

  .footer-bar {
    top: 65px;
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    .footer_logo {
      img {
        margin-left: 50px;
        width: 100px;
        height: auto;
        border-radius: 50px;
        background-color: $hightLightColor;
      }
    }
    .footer_contents {
      right: 0;
      position: absolute;
      font-weight: 100;
      font-size: small;
      letter-spacing: 0.1em;
      color: $fontColorWhite;
      margin: 30px;
    }
  }
}
</style>
