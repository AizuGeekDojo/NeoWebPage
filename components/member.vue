<template>
  <div class="member">
    <div class="picture">
      <img :src="picture_path">
    </div>
    <div class="name">
      <p> {{ name }}</p>
    </div>
    <div class="links">
      <div
        v-for="(link, index) in links"
        :key="index">
        <a
          :href="link.src"
          target="_blank"
          rel="noopener noreferrer"
          class="icon" >
          <font-awesome-icon
            :icon="[link.prefix, link.icon]"
          />
        </a>
      </div>
    </div>
    <div class="detail">
      <p> {{ detail }}</p>
    </div>
    <div class="like">
      <p> {{ like }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    picture_path: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    like: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color';
.member {
  box-shadow: 1px 4px 7px rgba(0, 0, 0, 0.315);
  padding: 0;
  margin: 0;
}

@media (max-width: 600px) {
  .member {
    background-color: $hightLightColor;
    border-right: 3vw solid $lineColor;
    height: 300px;
    width: 97vw;
    letter-spacing: normal;
    display: grid;
    grid-template-rows: 34% 30% 11% 25%;
    color: $fontColor;
    grid-template-columns: 29.9% 16.1% 4% 5.902485% 33.195% 7.902485% 3%;
    // calc(0% + 7vw)
    .picture {
      margin: 0;
      grid-column: 1/4;
      z-index: 1;
      grid-row: 1/5;
      overflow: hidden;
      clip-path: polygon(
        56.80497% 0%,
        95% 100%,
        98% 100%,
        59.80497% 0%,
        61.80497% 0%,
        100% 100%,
        0% 100%,
        0% 0%
      );
      img {
        position: relative;
        object-fit: cover;
        object-position: 90% 0%;
        width: 100%;
        height: 100%;
        background-size: cover;
      }
    }

    .name {
      grid-row: 1/2;
      grid-column: 2/7;
      font-size: 70px;
      width: 100%;
      padding: 0;
      margin: 0;
      vertical-align: top;
      text-align: left;
      opacity: 0.15;
      letter-spacing: -3px;
      font-weight: 900;
      display: flex;
      line-height: 64px;
      p {
        width: 100%;
        height: 100%;
        word-break: keep-all;
        margin: 0;
        padding: 0;
      }
    }

    .links {
      margin: 0 auto;
      grid-row: 4/5;
      grid-column: 4/7;
      text-align: center;
      justify-content: center;
      display: flex;
      align-items: center;
      flex-direction: row;
      opacity: 0.7;
      div {
        margin: 0 auto;
      }
      .icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        font-size: 25px;
        color: $lastColor2;
      }
    }

    .detail {
      font-size: small;
      margin: 0;
      padding: 0;
      vertical-align: middle;
      width: 100%;
      font-size: 15px;
      grid-row: 2/4;
      grid-column: 3/7;
      text-align: center;
      line-height: normal;
      font-weight: 600;
      p {
        vertical-align: middle;
        line-height: 1.6em;
        width: 100%;
        margin: 0;
        padding: 0 5px;
      }
    }

    .like {
      opacity: 0.85;
      letter-spacing: 0.1em;
      font-size: 10px;
      width: 100%;
      grid-column: 4/6;
      grid-row: 3/4;
      word-break: keep-all;
      text-align: center;
      line-height: normal;
      font-weight: 400;
      p {
        width: 100%;
        margin: 0;
        padding: 0;
      }
    }
  }
}

@media (min-width: 600px) {
  .member {
    border-top: 10px solid $footerColor;
    word-break: keep-all;
    padding: 30px 20px;
    color: $fontColor;
    background-color: $hightLightColor;
    // background-color: $footerColor;
    height: 450px;
    width: 300px;
    display: grid;
    grid-template-rows: 32% 13% 35% 15% 5%;
    grid-template-columns: 27% 46% 27%;
    text-align: center;
    vertical-align: top;
    .picture {
      grid-row: 1/2;
      grid-column: 2/3;
      text-align: center;
      img {
        border: 4px solid $hightLightColor;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.424);
        height: auto;
        width: 100%;
        background-size: cover;
        border-radius: 50%;
      }
    }
    .name {
      vertical-align: top;
      color: $footerColor;
      font-weight: 900;
      grid-row: 2/3;
      grid-column: 1/4;
      text-align: center;
      margin: 0 auto;
      p {
        width: 100%;
      }
    }
    .detail {
      padding: 0 5px;
      letter-spacing: normal;
      text-align: center;
      word-break: normal;
      grid-row: 3/4;
      grid-column: 1/4;
      font-size: 15px;
    }
    .like {
      font-size: 12px;
      grid-row: 4/5;
      grid-column: 1/4;
      text-align: center;
      vertical-align: bottom;
      line-height: 2em;
      opacity: 0.7;
      font-weight: 500;
    }
    .links {
      grid-row: 5/6;
      grid-column: 1/4;
      text-align: center;
      justify-content: center;
      display: flex;
      flex-direction: row;
      .icon {
        color: $lastColor2;
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 25px;
      }
    }
  }
}
</style>
