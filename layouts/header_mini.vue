<template>
  <div class="header-mini">
    <div class="header-mini-topbar">
      <img
        src="../assets/logo.png"
        class="header-mini-logo">
      <div class="header-mini-title">Aizu Geek Dojo</div>
      <img 
        v-if="!isMenu"
        src="../assets/hanberguer_menu.png"
        class="header-mini-menu"
        @click="menu">
      <img 
        v-if="isMenu"
        src="../assets/hanberguer_close.png"
        class="header-mini-menu"
        @click="menu"> 
    </div>
    
    <div
      v-if="isMenu"
      class="header-mini-dropdown-menu">
      <nuxt-link to="/">ホーム</nuxt-link>
      <nuxt-link to="/opentime">開室日程</nuxt-link>
      <nuxt-link to="about">About</nuxt-link>
      <a href="https://www.youtube.com/user/univaizu">Youtube</a>
      <nuxt-link to="underconstruct">講習会</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      isMenu: false
    }
  },
  methods: {
    menu: function() {
      this.isMenu = !this.isMenu
    }
  }
}
</script>

<style lang="scss" src="../style/header_mini/style.scss" scoped>
</style>
