<template>
  <header>
    <div class="header-topbar">
      <div class="header-topbar-home">
        <nuxt-link to="/">Aizu Geek Dojo</nuxt-link>
      </div>
      <div class="header-topbar-u-aizu">
        <a href="http://www.u-aizu.ac.jp/">会津大学公式サイト</a>
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
    <div class="header-secondbar">
      <div class="header-secondbar-logo">
        <a href="/"><img src="../assets/logo.png"></a>
      </div>
      <div class="header-secondbar-links">
        <div class="header-secondbar-link">
          <nuxt-link to="/opentime">開室日程</nuxt-link>
        </div>
        <div
          class="header-secondbar-link">
          <nuxt-link to="/about">AizuGeekDojoについて</nuxt-link>
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
  width: 100%;

  .header-topbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: 300px;
    width: 100%;
    // box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.6);

    .header-topbar-home {
      // margin: 1px;
      font-size: 25px;
      a {
        // margin-left: 15px;
        // margin-right: 15px;
        color: white;
        text-decoration: none;
      }

      a:visited {
        text-decoration: none;
        color: white;
      }
    }

    .header-topbar-youtube {
      right: 0;
      bottom: 0;
      position: absolute;
      margin: 3px;
      a {
        // margin-left: 15px;
        // margin-right: 15px;
        color: white;
        text-decoration: none;
      }
      a:visited {
        text-decoration: none;
        color: white;
      }
    }
  }

  .header-topbar-english {
    margin-left: 10px;
    margin-right: 10px;
    position: absolute;
    font-size: 20px;
    right: 0;
  }

  .header-secondbar {
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding-left: 50px;
    justify-content: center;

    .header-secondbar-logo {
      margin-left: 30px;
      margin-right: 30px;
      img {
        width: 56px;
        height: 56px;
      }
    }
    .header-secondbar-title {
      margin-right: 20px;
    }
    .header-secondbar-links {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      .header-secondbar-link {
        margin-right: 10px;
        margin-left: 10px;
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
    background-color: $headerColor;
    color: white;
    font-size: 20px;

    .header-topbar-home {
      color: white;
      text-shadow: 0px 1px 1px #797a77;
      a {
        color: white;
        text-decoration: none;
      }
      a:visited {
        text-decoration: none;
        color: white;
      }
    }

    .header-topbar-u-aizu {
      color: white;
      a {
        text-decoration: none;
        color: white;
      }
      a:visited {
        text-decoration: none;
        color: white;
      }
    }
  }

  .header-secondbar {
    color: $fontColor;
    .header-secondbar-title {
      color: $fontColor;
      font-size: 20px;
    }

    .header-secondbar-links {
      font-size: 20px;
      color: $fontColor;

      .header-secondbar-link {
        a,
        a:visited {
          text-decoration: none;
          color: $fontColor;
        }
      }
    }
  }
  .header-breadcrumb {
    border-bottom: thin solid $lineColor;
    border-top: thin solid $lineColor;
  }
}
</style>
