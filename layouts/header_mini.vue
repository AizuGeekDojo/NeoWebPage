<template>
  <div class="header-mini">
    <div class="header-mini-topbar">
      <img
        src="../assets/logo.png"
        class="header-mini-logo">
      <div class="header-mini-title">Aizu Geek Dojo</div>
      <hamburger-menu @close-sender="menu" />
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
import hamburguer_menu from '../components/hamburger-menu'
export default {
  components: {
    'hamburger-menu': hamburguer_menu
  },
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

<style lang="scss" scoped>
@import '../style/color';

.header-mini {
  .header-mini-topbar {
    background-color: $headerColor;
    .header-mini-logo {
      border-style: solid;
      border-width: thin;
      border-color: white;
    }

    .header-mini-title {
      color: white;
      font-weight: bold;
    }
  }
  .header-mini-dropdown-menu {
    background-color: #58341a;
    opacity: 0.5;
    color: white;
    font-weight: bold;
    a {
      color: white;
      text-decoration: none;
    }

    a:visited {
      text-decoration: none;
      color: white;
    }
  }
}
.header-mini {
  // height: 100%;
  .header-mini-topbar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 63px;
    .header-mini-logo {
      margin-left: 15px;
      height: 40px;
      width: 40px;
    }
    .header-mini-title {
      flex-grow: 2;
      width: 50%;
      font-size: 15px;
    }
    .header-mini-menu {
      margin-right: 15px;
      height: 40px;
      width: 40px;
    }
  }

  .header-mini-dropdown-menu {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    a {
      margin-top: 30px;
      margin-bottom: 30px;
      font-size: 20px;
    }
  }
}
</style>
