<template>
  <div class="container">
    <header-component/>
    <div class="contents">
      <nuxt/>
    </div>
    <div class="footer">
      <footer-component/>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './header'
import FooterComponent from './footer'

export default {
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent
  }
}
</script>

<style lang='scss' src='../style/foundation.scss'>
</style>
