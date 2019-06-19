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
    display: flex;
    box-shadow: 0px -5px 7px #0000001c;
    height: 100px;
    text-align: center;
    padding: 40px 0;
    img {
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
  }
}
</style>
