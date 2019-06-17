<template>
  <div class="underconstruct">
    <img src="../assets/trianglecond.png">
    <span>現在準備中です</span>
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
  font-size: 30px;
  color: $fontColor;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 600px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

@media (max-width: 600px) {
  .underconstruct {
    display: flex;
    flex-direction: column;
    img {
      width: 50px;
      height: auto;
      margin-top: 30px;
      margin-bottom: 30px;
    }
    span {
      font-size: 20px;
    }
  }
}
</style>
