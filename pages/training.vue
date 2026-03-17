<template>
  <div class="top">
    <div class="content">
      <h2>機器講習会の受講</h2>
      <ul>
        <li>
          <h3>機器講習会とは</h3>
          <p>
            機器講習会はAizu Geek Dojo内のレーザーカッター及び3Dプリンターを利用するために受けていただく講座のことです。レーザーカッター及び3Dプリンターの使用は、この講習会を受講した方に限ります。この講習会を受講することで、レーザーカッターと3Dプリンターの安全な利用方法を学んでいただき、下記時間帯に利用することができるようになります。
          </p>
          <ul>
            <li>
              レーザーカッター： 平日 8:30～17:00
            </li>
            <li>
              3Dプリンター： 平日 8:30～19:00
            </li>
          </ul>
        </li>
        <li>
          <h3>実施日時</h3>
          <p>学期によって異なりますので、下記機器講習会予約フォームより確認してください。</p>
        </li>
        <li>
          <h3>受講場所</h3>
          <p>Aizu Geek Dojo</p>
        </li>
        <li>
          <h3>受講するには</h3>
          <p>下記機器講習会予約フォームにアクセスしていただき手続きを進めてください。<br>予約日の1週間前までに予約を完了させておいてください。</p>
          <p><a href="https://forms.gle/CAgBXhhDxMbJSL9f7" target="_blank" rel="noopener noreferrer">機器講習会予約フォーム</a></p>
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
          path: '/training'
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
