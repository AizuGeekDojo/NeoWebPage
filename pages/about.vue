<template>
  <div class="about">
    <div class="content">
      About Page
    </div>
    <div class="photo">
      <img src="../assets/images/geekdojo1.png">
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      breadcrumbs: [
        {
          name: 'about',
          path: '/about'
        }
      ]
    }
  },
  created: function() {
    this.$store.commit('change_page', this.breadcrumbs)
  }
}
</script>

<style lang="scss" src="../style/page/about/style.scss" scoped>
</style>
