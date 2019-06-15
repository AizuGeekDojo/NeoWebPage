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

<style lang="scss" scoped>
@import '../style/color';
.underconstruct {
  font-size: 50px;
  color: $fontColor;
}
.underconstruct {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>
