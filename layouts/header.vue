<template>
  <header>
    <div class="header-topbar">
      <div class="header-topbar-home">
        <nuxt-link to="/">ホーム</nuxt-link>
      </div>
      <div>
        <a href="http://www.u-aizu.ac.jp/">会津大学公式サイト</a>
      </div>
      <div>English</div>
    </div>
    <div class="header-secondbar">
      <div class="header-secondbar-logo">
        <img src="../assets/logo.png">
      </div>
      <div class="header-secondbar-title">Aizu Geek Dojo</div>
      <div class="header-secondbar-links">
        <div class="header-secondbar-link">SA在室日程</div>
        <div class="header-secondbar-link">AizuGeekDojoについて</div>
        <div class="header-secondbar-link">Youtube</div>
        <div class="header-secondbar-link">講習会について</div>
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

<style>
</style>
