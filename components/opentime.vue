<template>
  <div class="top">
    <div class="content">
      <h2>予約状況 / Reservation Calendar</h2>
      <p>
        Aizu Geek Dojoは予約優先です。空いていれば予約がなくても利用できます。予約フォームはこちら。<br>
        You can reserve areas and devices via the Reservation Form. Aizu Geek Dojo has priority for reservations. If
        there is no reservation, it can be used without a reservation. The Reservation Form is below.</p>
      <div class="grid-container">
        <span>
          ・学生 / Students:
        </span>
        <a
          href="https://forms.gle/dto324JWUpftKAWZ8"
          target="_blank"
          rel="noopener noreferrer"
        >https://forms.gle/dto324JWUpftKAWZ8</a>
        <span>
          ・教職員その他 / Faculty, staff, and others:
        </span>
        <a
          href="https://forms.gle/CAgBXhhDxMbJSL9f7"
          target="_blank"
          rel="noopener noreferrer"
        >https://forms.gle/CAgBXhhDxMbJSL9f7</a>
      </div>
      <div class="opentime-calender">
        <div class="gc_wrapper">
          <div class="responsive-iframe-container big-container">
            <iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=Asia%2FTokyo&bgcolor=%23fdfced&title=Geek%20Dojo&showPrint=0&showCalendars=0&showTitle=0&src=Zm5tcHRxOXJwODdwOXE5cnN2aThrYnZ0cTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NjQ2bXJicXM3a2cxZzc4NjloYXRkbGFuNm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=OWg1NW0yNWZ1cHBmNmVkM3ZnNnN1Z2lmOThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cDM5ZmNxM2U1Z2xhb2QwdTR1a205cG9sMThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aDc0NjFxcWhtdWRib3ZjZnZzMTl2dmRpYmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZzRnNHJsdGdvbTFjYjRjM2toc3FtbzNpbzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cWFwYmRqcnB0a2o2bTlvODUzNzg4bjlpNWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bzRnZDR2MjZvYjg4MTVwdml2Y3ZqczZmdmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NDU3YTAyNjM5NjVjNjFlMDJjZjNiZGE4NjFkZDVkNTZjMDVjY2RlYWVlZjgzMDIzZDQxNTRmY2Q3MWM0ZGMyMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWttbWM5aTlhMTQxcmcwYjJyM2Zvc2thYzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NWs2aXI5MGJsbXVlcWlhaWw0bzVibWFoNTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F6BF26&color=%23EF6C00&color=%23E67C73&color=%23C0CA33&color=%239E69AF&color=%239E69AF&color=%23AD1457&color=%239E69AF&color=%238E24AA&color=%23EF6C00&color=%23B39DDB&color=%230B8043" style="border-width:0" width="800" height="500" frameborder="0" scrolling="no" />
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  margin: 20px
}
</style>
<script>
</script>
