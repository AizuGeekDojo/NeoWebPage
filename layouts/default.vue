<template>
  <div>
    <header-component/>
    <nuxt/>
    <footer-component/>
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
