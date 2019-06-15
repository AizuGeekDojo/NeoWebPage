<template>
  <div class="banner">
    <ul class="banner-ul">
      <li class="banner-li">
        <a href="https://www.u-aizu.ac.jp/osip/">
          <img src="../assets/images/banner/bnr_osip.gif">
        </a>
      </li>
      <li class="banner-li">
        <a href="https://www.u-aizu.ac.jp/sgu/img/banner/bnr_aizuac.gif">
          <img src="../assets/images/banner/bnr_aizuac.gif">
        </a>
      </li>
      <li class="banner-li">
        <a href="https://www.u-aizu.ac.jp/sgu/img/banner/bnr_movie.gif">
          <img src="../assets/images/banner/bnr_movie.gif">
        </a>
      </li>
      <li class="banner-li">
        <a href="https://www.u-aizu.ac.jp/sgu/img/banner/bnr_top.gif">
          <img src="../assets/images/banner/bnr_top.gif">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../style/color';
.banner {
  @media (min-width: 600px) {
    .banner-ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;

      .banner-li {
        margin-right: 15px;
        margin-left: 15px;
      }
    }
  }

  @media (max-width: 600px) {
    .banner-ul {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      list-style: none;
      flex-direction: column;
      padding-left: 0px;
      padding-right: 0px;
      .banner-li {
      }
    }
  }
}
</style>
