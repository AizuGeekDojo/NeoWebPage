<template>
  <div class="banner">
    <ul class="banner-ul">
      <li class="banner-li">
        <a href="https://www.u-aizu.ac.jp/osip/">
          <img src="../assets/images/banner/bnr_osip.gif">
        </a>
      </li>
      <li class="banner-li">
        <a href="https://www.u-aizu.ac.jp/">
          <img src="../assets/images/banner/bnr_aizuac.gif">
        </a>
      </li>
      <li class="banner-li">
        <a href="https://www.youtube.com/user/univaizu">
          <img src="../assets/images/banner/bnr_movie.gif">
        </a>
      </li>
      <li class="banner-li">
        <a href="https://www.u-aizu.ac.jp/sgu/">
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

@media (max-width: 600px) {
  .banner {
    padding: 30px 10px;
    // top: 100px;
    background-color: $mainColor1;
    position: relative;
    .banner-ul {
      display: flex;
      list-style: none;
      padding: 0;
      text-align: center;
      flex-direction: column;
      .banner-li {
        padding: 3px;
      }
    }
  }
}

@media (min-width: 600px) {
  .banner {
    padding: 30px 10px;
    // top: 100px;
    background-color: $mainColor1;
    position: relative;
    .banner-ul {
      list-style: none;
      padding: 25px 0;
      margin: 0 auto;
      border-top: 3px solid $subColor1;
      width: 90%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      text-align: center;
      list-style: none;

      .banner-li {
        margin: 4px auto;
        flex-shrink: 1;
        flex-basis: 100px;
      }
    }
  }
}
</style>
