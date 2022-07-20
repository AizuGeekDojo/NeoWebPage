<template>
  <div class="top">
    <div class="content">
      <h2>講習会の受講</h2>
      <ul>
        <li>
          <h3>講習会とは</h3>
          <p>講習会はGeekDojoをSAの補助なしで利用するために受けていただく講座のことです。講習会を受講することで、GeekDojoを開室時間外でも利用することができます。<br>講習会では、レーザーカッターと３Dプリンターの使い方を覚えていただきます。</p>
        </li>
        <li>
          <h3>受講場所</h3>
          <p>会津ギーク道場</p>
        </li>
        <li>
          <h3>講習会資料</h3>
          <p><a href="https://github.com/AizuGeekDojo/LaserCutterInstruction/blob/master/doc/LaserCutter1.md" target="_blank" rel="noopener noreferrer">資料</a></p>
        </li>
        <li>
          <h3>受講するには</h3>
          <p>予約フォームにアクセスしていただき手続きを進めてください。<br>予約日の2日前までに予約を完了させておいてください。</p>
          <p><a href="https://forms.gle/HqpDtpGse7oBtSGp8" target="_blank" rel="noopener noreferrer">予約フォーム（学生用）</a></p>
        </li>
      </ul>
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
