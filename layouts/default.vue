<template>
  <div class="default">
    <div class="big">
      <div class="container">
        <header-component/>
        <div class="contents">
          <nuxt/>
        </div>
        <div class="footer">
          <footer-component/>
        </div>
      </div>
    </div>
    <div class="small">
      <header-mini-component/>
      <nuxt />
      <footer-mini-component />
    </div>
  </div>
</template>

<script>
import HeaderComponent from './header'
import HeaderMiniComponent from './header_mini'
import FooterComponent from './footer'
import FooterMiniComponent from './footetr_mini'

export default {
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'header-mini-component': HeaderMiniComponent,
    'footer-mini-component': FooterMiniComponent
  }
}
</script>

<style lang='scss' src='../style/foundation.scss'>
</style>
