<template>
  <header>
    <div class="header-topbar">
      <div class="header-topbar-logo">
        <a href="/"><img src="../assets/logo.png"></a>
      </div>
      <div class="header-topbar-home">
        <nuxt-link to="/">Aizu Geek Dojo</nuxt-link>
      </div>
      <div class="header-topbar-u-aizu">
        <a href="http://www.u-aizu.ac.jp/">会津大学ホームページ</a>
      </div>
      <div class="header-topbar-youtube">
        <a href="https://www.youtube.com/user/univaizu">Youtube</a>
      </div>
      <!--<div-->
      <!--v-if="select_lang === ja"-->
      <!--class="header-topbar-english"-->
      <!--@click="changeLang" >English</div>-->
      <!--<div -->
      <!--v-else-->
      <!--class="header-topbar-english"-->
      <!--@click="changeLang" >-->
      <!--日本語</div>-->
    </div>
    <div class="header-center">
      <img src="../assets/images/introduce/image7.jpg"/>
    </div>
    <div class="header-secondbar">
      <div class="header-secondbar-links">
        <div class="header-secondbar-link">
          <nuxt-link to="/about">AizuGeekDojoについて</nuxt-link>
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
          <nuxt-link to="/instraction">講習会について</nuxt-link>
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
header {
  .header-topbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    position: relative;
    height: 38px;
    width: 100%;
    .header-topbar-logo {
      margin: 5px 10px 2px;
      position: relative;
      img {
        border-radius: 3px;
        height: 29px;
        width: auto;
        border-style: solid;
        border-width: thin;
      }
    }

    .header-topbar-home {
      left: 19px;
      position: relative;
    }

    .header-topbar-u-aizu {
      right: 40px;
      position: absolute;
    }

    .header-topbar-youtube {
      position: absolute;
      right: 230px;
    }
  }

  .header-topbar-english {
    margin-left: 10px;
    margin-right: 10px;
    position: absolute;
    right: 0;
  }

  .header-secondbar {
    // position: -webkit-sticky;
    // position: sticky;
    // top: 0em;
    margin: 0;
    min-height: 40px;
    max-height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    .header-secondbar-links {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      height: 100%;
      div:not(:first-child):before {
        content: '/';
        // font-weight: bolder;
        position: absolute;
        left: -0.1em;
        top: 35%;
      }
      .header-secondbar-link {
        margin: auto 0px;
        padding: 10px;
        position: relative;
        text-align: center;
        height: 100%;
        width: 20%;
        letter-spacing: 0.1em;
      }
    }
  }
  .header-breadcrumb {
    height: 50px;
  }
}
@import '../style/color';

header {
  .header-topbar {
    box-shadow: 0px 5px 10px #00000025;
    letter-spacing: 0.1em;
    background-color: $mainColor1;
    color: $fontColorWhite;
    font-size: large;
    img {
      border-color: $hightLightColor;
    }

    .header-topbar-home {
      color: $fontColorWhite;
      font-size: large;
      a {
        color: $fontColorWhite;
        text-decoration: none;
      }
      a:visited {
        text-decoration: none;
        color: $fontColorWhite;
      }
    }

    .header-topbar-youtube {
      color: $fontColorWhite;
      font-size: small;
      a {
        color: $fontColorWhite;
        text-decoration: none;
      }
      a:visited {
        text-decoration: none;
        color: $fontColorWhite;
      }
    }

    .header-topbar-u-aizu {
      font-size: small;
      color: $fontColorWhite;

      a {
        text-decoration: none;
        color: $fontColorWhite;
      }
      a:visited {
        text-decoration: none;
        color: $fontColorWhite;
      }
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
    font-size: medium;
    .header-secondbar-title {
    }

    .header-secondbar-links {
      text-decoration: none;
      div:not(:first-child):before {
        color: $subColor2;
      }
      .header-secondbar-link {
        a,
        a:visited {
          padding-bottom: 4px;
          text-decoration: none;
          color: $fontColorWhite;
        }
        a:hover {
          padding-bottom: 2px;
          border-bottom: $subColor2 dashed 3px;
          color: $lastColor3;
        }
      }
    }
  }
  .header-breadcrumb {
    position: relative;
    height: 45px;
    margin-top: 4px;
    // border-bottom: 20px solid $lineColor;
    // border-top: 2px solid $lineColor;
  }
}
</style>
