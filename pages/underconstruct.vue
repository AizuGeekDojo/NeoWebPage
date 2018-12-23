<template>
  <div class="underconstruct">
    <img src="../assets/trianglecond.png">
    <span>準備中です。</span>
    <img src="../assets/trianglecond.png">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      breadcrumbs: [
        {
          name: 'Underconstruct',
          path: '/underconstruct'
        }
      ]
    }
  },
  created: function() {
    this.$store.commit('change_page', this.breadcrumbs)
  }
}
</script>

<style lang="scss" src='../style/page/underconstruct/style.scss' scoped>
</style>
