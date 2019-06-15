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
    align-items: center;
    height: 100px;

    img {
      margin-left: 30px;
      width: 70px;
      height: 70px;
    }
  }
}
@import '../style/color';

footer {
  .footer-bar {
    background-color: $footerColor;
  }
}
</style>
