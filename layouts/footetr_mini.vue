<template>
  <footer>
    <div class="footer-bar">
      <img src="../assets/uaizu.png">
      <nuxt-link 
        class="privacy" 
        to="/privacy_policy">プライバシーポリシー</nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../style/color';
footer {
  width: 100%;
  .footer-bar {
    width: 100%;
    height: 100px;
    text-align: center;
    position: relative;

    display: flex;
    flex-direction: column;

    padding: 60px 0 40px;
    border-top: 4px solid $subColor2;

    box-shadow: 0px -5px 7px #0000001c;
    background-color: $mainColor1;

    img {
      border-radius: 50px;
      margin: 0 auto 20px auto;
      width: 100px;
      height: auto;
      background-color: $hightLightColor;
    }

    a {
      color: $fontColorWhite;
      text-decoration: none;
    }
    a:visited {
      text-decoration: none;
      color: $fontColorWhite;
    }
  }
}
</style>
