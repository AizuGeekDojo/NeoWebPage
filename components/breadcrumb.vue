<template>
  <ul class="breadcrumb-ul">
    <li class="breadcrumb-ul">
      <nuxt-link
        to="/"
        class="breadcrumb-ul-links-home">
        <img src="../assets/home.png">
      </nuxt-link>
    </li>
    <li
      v-for="(crumb, index) in breadcrumbs" 
      :key="index"
      class="breadcrumb-ul">
      <span v-if="crumb.path">
        <nuxt-link
          to="crumb.path"
          class="breadcrumb-ul-links">{{ crumb.name }}</nuxt-link>
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

<style>
</style>
