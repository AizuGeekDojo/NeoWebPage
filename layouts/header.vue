<template>
  <header>
    <div class="header-topbar">
      <div class="header-topbar-home">
        <nuxt-link to="/">ホーム</nuxt-link>
      </div>
      <div class="header-topbar-u-aizu">
        <a href="http://www.u-aizu.ac.jp/">会津大学公式サイト</a>
      </div>
      <div class="header-topbar-english">English</div>
    </div>
    <div class="header-secondbar">
      <div class="header-secondbar-logo">
        <img src="../assets/logo.png">
      </div>
      <div class="header-secondbar-title">Aizu Geek Dojo</div>
      <div class="header-secondbar-links">
        <div class="header-secondbar-link">
          <nuxt-link to="/opentime">SA在室日程</nuxt-link>
        </div>
        <div
          class="header-secondbar-link">
          <nuxt-link to="/about">AizuGeekDojoについて</nuxt-link>
        </div>
        <div class="header-secondbar-link">
          <a href="https://www.youtube.com/user/univaizu">Youtube</a>
        </div>
        <div class="header-secondbar-link">
          <nuxt-link to="/kousyukai">講習会について</nuxt-link>
        </div>
      </div>
    </div>
    <div class="header-breadcrumb">
      <breadcrumb :breadcrumbs="breadcrumbs"/>
    </div>
  </header>
</template>

<script>
import breadcrumb from '../components/breadcrumb'
export default {
  components: {
    breadcrumb: breadcrumb
  },
  data: function() {
    return {
      // TODO パンくずリストのデーターをpagesから伝播するようにする
      breadcrumbs: [
        {
          name: 'テスト',
          path: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" src="../style/header/style.scss" scoped>
</style>
