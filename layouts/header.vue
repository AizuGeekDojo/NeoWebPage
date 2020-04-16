<template>
  <header>
    <div class="header-topbar">
      <div class="header-topbar-logo">
        <a href="/"><img src="../assets/logo.png"></a>
      </div>
      <div class="header-topbar-home">
        <nuxt-link to="/">Aizu Geek Dojo</nuxt-link>
      </div>
      <div class="items">
        <div class="header-topbar-youtube item">
          <a href="https://www.youtube.com/user/univaizu">Youtube</a>
        </div>
        <div class="header-topbar-u-aizu item">
          <a href="http://www.u-aizu.ac.jp/">会津大学</a>
        </div>
        <div class="header-topbar-privacy item">
          <nuxt-link to="/privacy_policy">プライバシーポリシー</nuxt-link>
        </div>
      </div>
      <div
        v-if="select_lang === ja"
        class="header-topbar-english lang"
        @click="changeLang">English</div>
      <div
        v-else
        class="header-topbar-english lang"
        @click="changeLang">日本語</div>
    </div>
    <div class="header-center">
      <img src="../assets/images/introduce/image7.jpg"/>
    </div>
    <div class="header-secondbar">
      <div class="header-secondbar-links">
        <div class="header-secondbar-link">
          <nuxt-link to="/about">ABOUT</nuxt-link>
        </div>
        <div class="header-secondbar-link">
          <nuxt-link to="/opentime">開室日程</nuxt-link>
        </div>
        <div class="header-secondbar-link">
          <nuxt-link to="/product">制作物</nuxt-link>
        </div>
        <div class="header-secondbar-link">
          <nuxt-link to="/items">備品</nuxt-link>
        </div>
        <div class="header-secondbar-link">
          <nuxt-link to="/instraction">講習会</nuxt-link>
        </div>
        <div class="header-secondbar-link">
          <nuxt-link to="/blog">ブログ</nuxt-link>
        </div>
        <div class="header-secondbar-link">
          <nuxt-link to="/members">メンバー</nuxt-link>
        </div>
      </div>
    </div>
    <div class="header-breadcrumb">
      <breadcrumb :breadcrumbs="breadcrumbs"/>
    </div>
  </header>
</template>

<script>
let default_lang = 'ja'
if (process.client) {
  default_lang =
    (
      window.navigator.userLanguage ||
      window.navigator.language ||
      window.navigator.browserLanguage
    ).substr(0, 2) === 'ja'
      ? 'ja'
      : 'en'
}
import breadcrumb from '../components/breadcrumb'
export default {
  components: {
    breadcrumb: breadcrumb
  },
  data: function() {
    return {
      // TODO パンくずリストのデーターをpagesから伝播するようにする
      // breadcrumbs: [{}],
      select_lang: default_lang,
      ja: 'ja',
      en: 'en'
    }
  },
  computed: {
    breadcrumbs: function() {
      return this.$store.state.breadcrumb_state
    }
  },
  methods: {
    changeLang: function() {
      if (this.select_lang == 'ja') {
        this.select_lang = 'en'
      } else {
        this.select_lang = 'ja'
      }
      this.$store.commit('change_lang', this.select_lang)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color';
header {
  .header-topbar {
    letter-spacing: 0.1em;
    box-shadow: 0px 5px 10px #00000025;
    background-color: $mainColor1;
    color: $fontColorWhite;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    position: relative;
    height: 38px;
    width: 100%;
    .header-topbar-logo {
      margin: 5px 10px 2px 15px;
      position: relative;
      img {
        height: 29px;
        width: auto;
        border: thin solid $hightLightColor;
      }
    }

    .header-topbar-home {
      color: $fontColorWhite;
      font-size: 26px;
      letter-spacing: 0em;
      margin: 0 0 0 10px;
      a {
        color: $fontColorWhite;
        text-decoration: none;
      }
    }

    .items {
      width: 300px;
      display: flex;
      margin: 0 0 0 auto;
      flex-flow: row nowrap;
      position: relative;
      right: 70px;
      justify-content: space-between;
      .item {
        color: $fontColorWhite;
        font-size: 12px;
        text-align: center;
        a {
          color: $fontColorWhite;
          vertival-align: text-bottom;
          text-decoration: none;
        }
      }
      img {
        border-color: $hightLightColor;
      }
    }

    .lang {
      position: absolute;
      font-size: 10px;
      margin-right: 10px;
      right: 0;
      padding: 0 0 1px 0;
      border-bottom: thin solid $hightLightColor;
    }
  }

  .header-center {
    height: 220px;
    background-color: $lastColor3;
    img {
      width: 100%;
      height: 220px;
      object-fit: cover;
    }
  }

  .header-secondbar {
    box-shadow: 0px 10px 10px #0000003d;
    background-color: $mainColor1;
    margin: 0;
    min-height: 30px;
    max-height: 80px;
    width: 100%;
    display: flex;
    position: relative;
    .header-secondbar-links {
      flex-grow: 1;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      height: 100%;
      margin: auto 0;
      div:not(:first-child):before {
        color: $subColor2;
        content: '|';
        position: absolute;
        left: -0.2em;
      }
      .header-secondbar-link {
        margin: auto 0px;
        position: relative;
        text-align: center;
        min-height: 20px;
        max-height: 80px;
        font-size: 15px;
        letter-spacing: 0.1em;
        width: 20%;

        a {
          width: 100%;
          text-decoration: none;
          color: $fontColorWhite;
        }
      }
      .header-secondbar-link:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
  .header-breadcrumb {
    position: relative;
    height: 30px;
    margin-top: 4px;
  }
}
</style>
