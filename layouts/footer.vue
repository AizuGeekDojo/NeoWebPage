<template>
  <footer>
    <div class="footer-bar">
      <div class="footer_logo">
        <img src="../assets/uaizu.png">
      </div>
      <div class="footer_contents">
        All rights rserved Aizu Geek Dojo
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
  width: 100%;
  height: 100%;
  bottom: 0;
  position: absolute;
  margin-top: auto;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);

  .footer-bar {
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    background-color: $footerColor;
    justify-content: space-between;

    .footer_logo {
      img {
        margin-left: 30px;
        width: 70px;
        height: 70px;
      }
    }

    .footer_contents {
      color: rgba(255, 255, 255, 0.9);
      padding-right: 50px;
    }
  }
}
</style>
