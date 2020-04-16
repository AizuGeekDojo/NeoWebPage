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

.content {
  width: auto;
}

.member {
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.315);
  padding: 0;
  margin: 0;
  p {
    text-indent: 0 !important;
  }
}

@media (max-width: 600px) {
  .member {
    padding: 0;
    margin: 0;
    background-color: $hightLightColor;
    overflow: hidden;
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
      padding: 0;
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
        object-position: 70% 0%;
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
        word-break: break-all;
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
      font-size: 13px;
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
      text-align: center;
      line-height: normal;
      font-weight: 400;
      word-break: break-all;
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
    height: 390px;
    width: 250px;
    display: grid;
    grid-template-rows: 155px 30px auto auto 35px;
    grid-template-columns: 27% 46% 27%;
    text-align: center;
    vertical-align: top;
    .picture {
      grid-row: 1/2;
      grid-column: 1/4;
      text-align: center;
      img {
        object-fit: cover;
        border: 4px solid $hightLightColor;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.424);
        height: 140px;
        width: 140px;
        background-size: cover;
        border-radius: 50%;
      }
    }
    .name {
      vertical-align: center;
      color: $footerColor;
      font-weight: 900;
      grid-row: 2/3;
      grid-column: 1/4;
      text-align: center;
      margin: 3px 0;
      p {
        font-size: 18px;
        margin: 0;
        width: 100%;
      }
    }
    .detail {
      padding: 20px 5px 5px;
      margin: 0 auto;
      width: auto;
      min-height: 80px;
      line-height: 2em;
      letter-spacing: normal;
      text-align: justify;
      grid-row: 3/4;
      grid-column: 1/4;
      font-size: 15px;
      word-break: normal;
      * {
        margin: 0;
        padding: 0;
      }
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
      * {
        margin: 0;
        padding: 0;
      }
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
