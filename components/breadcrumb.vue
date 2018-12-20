<template>
  <ul class="breadcrumb-ul">
    <li class="breadcrumb-li">
      <nuxt-link
        to="/"
        class="breadcrumb-li-links-home">
        <img src="../assets/home.png">
      </nuxt-link>
    </li>
    <li
      v-for="(crumb, index) in breadcrumbs" 
      :key="index"
      class="breadcrumb-li">
      <span v-if="crumb.path">
        <nuxt-link
          to="crumb.path"
          class="breadcrumb-li-links">{{ crumb.name }}</nuxt-link>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: false,
      default: () => [{ name: 'test', path: '/' }]
    }
  }
}
</script>

<style lang="scss" scoped src='../style/header/style.scss'>
</style>
