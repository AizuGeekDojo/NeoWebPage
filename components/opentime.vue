<template>
  <div class="top">
    <div class="content">
      <h2>開室日程</h2>
      <p>Aizu Geek Dojo は以下の時間にSAが開けています。<br>使用の予約等をしたい際には、<a href="https://forms.gle/2kQpNrg6MPkhDqkV8" target="_blank" rel="noopener noreferrer">予約フォーム</a>からしてください。</p>
      <div class="opentime-calender">
        <div class="gc_wrapper">
          <div class="responsive-iframe-container big-container">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=p39fcq3e5glaod0u4ukm9pol18%40group.calendar.google.com&ctz=Asia%2FTokyo"
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

<style lang="scss" scoped>
@import '../style/color';
.opentime-calender {
  padding: 0;
  position: relative;
  width: 100%;
  height: auto;
}
</style>
