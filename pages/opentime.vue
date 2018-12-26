<template>
  <div class="opentime">
    <div class="opentime-content">
      GeekDojoのオープン時間は左のようになっています。
      testcontents
    </div>
    <div class="opentime-calender">
      <div class="gc_wrapper">
        <div class="responsive-iframe-container big-container"> 
          <iframe
            src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=646mrbqs7kg1g7869hatdlan6o%40group.calendar.google.com&amp;color=%23B1365F&amp;ctz=Asia%2FTokyo"
            style="border:solid 1px #777"
            frameborder="0"
            scrolling="no"/>
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

<style lang="scss" src="../style/page/opentime/style.scss" scoped>
</style>
