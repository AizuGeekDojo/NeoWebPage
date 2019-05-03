<template>
  <div class="contents">
    <div>
      Aizu Geek Dojoに置いてあるレーザーカッターと3Dプリンターの講習資料と、
      <br>
      予約フォームは以下のリンクから参照できます。
    </div>
    <a href="https://github.com/AizuGeekDojo/LaserCutterInstruction/blob/master/doc_pdf/LaserCutter1.pdf">講習会資料</a>

    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_7ULD_MkPpy7Y8iSpfF8R6_mIUzGgd-ANeaAhFxDHmrhIfA/viewform">予約フォーム</a>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      breadcrumbs: [
        {
          name: '講習会について',
          path: '/instraction'
        }
      ]
    }
  },
  created() {
    this.$store.commit('change_page', this.breadcrumbs)
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color';
.contents {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    margin-left: 15px;
    margin-right: 15px;
    color: $fontColor;
  }
}
</styles>
