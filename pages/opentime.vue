<template>
  <div class="top">
    <div class="content">
      <h2>開室日程</h2>
      <p>Aizu Geek Dojo は以下の時間にSAが開けています。<br>使用の予約等をしたい際には、<a href="https://docs.google.com/forms/u/3/d/e/1FAIpQLSe_7ULD_MkPpy7Y8iSpfF8R6_mIUzGgd-ANeaAhFxDHmrhIfA/viewform">予約フォーム</a>からしてください。</p>
      <div class="opentime-calender">
        <div class="gc_wrapper">
          <div class="responsive-iframe-container big-container">
            <iframe
              src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=646mrbqs7kg1g7869hatdlan6o%40group.calendar.google.com&amp;color=%23B1365F&amp;ctz=Asia%2FTokyo"
              style="border:solid 1px #777"
              width="100%"
              height="500px"
              frameborder="0"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      breadcrumbs: [
        {
          name: 'OpenTime',
          path: '/opentime'
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
.opentime-calender {
  padding: 0;
  position: relative;
  width: 100%;
  height: auto;
}
</style>
