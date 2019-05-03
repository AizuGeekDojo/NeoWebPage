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
        <img src="../assets/logo.png">
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

<style lang="scss" src="../style/header/style.scss" scoped>
</style>
