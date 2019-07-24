<template>
  <div class="top">
    <div class="content">
      <h3>講習会とは</h3>
      <p>講習会はGeekDojoをSAの補助なしで利用するために受けていただく講座のことです。<br>講習会を受講することで、GeekDojoを開室時間外でも利用することができます。<br>講習会では、レーザーカッターと３Dプリンターの使い方を覚えていただきます。</p>
      <h3>受講場所</h3>
      <p>GeekDojo</p>
      <h3>講習会資料</h3>
      <a href="https://github.com/AizuGeekDojo/LaserCutterInstruction/blob/master/doc_pdf/LaserCutter1.pdf">リンク</a>
      <h3>受講するには</h3>
      <p>予約フォームにアクセスしていただき手続きを進めてください。<br>予約日の2日前までに予約を完了させておいてください。</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_7ULD_MkPpy7Y8iSpfF8R6_mIUzGgd-ANeaAhFxDHmrhIfA/viewform">予約フォーム</a>
    </div>
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
</style>
