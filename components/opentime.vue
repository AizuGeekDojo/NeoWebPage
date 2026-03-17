<template>
  <div class="top">
    <div class="content">
      <h2>予約状況 / Reservation Calendar</h2>
      <p>
        Aizu Geek Dojoは予約優先です。空いていれば予約がなくても利用できます。下記カレンダーから予約状況を確認し、予約フォームから利用希望エリアもしくは利用希望工作機器の予約をしてください。予約が入っていない時間帯及びエリアは利用可能です。<br>
        ※レーザーカッターと3Dプリンターは、機器講習会を受講した方のみが利用できます。詳しくは、下記より、機器講習会についてご覧ください。<br>
        You can reserve areas and devices via the Reservation Form. Aizu Geek Dojo has priority for reservations. If there is no reservation, it can be used without a reservation. Please reserve your desired usage area or desired workshop equipment through the reservation form. Available times and areas are those for which no reservations have been made.<br>
        * Please note that the laser cutter and 3D printer can only be used by individuals who have completed the equipment training course. For more details, please refer to the equipment training course information below.
      </p>
      <ul>
        <li>
          <a href="https://u-aizu.ac.jp/sgu/files/ddd8b7dfd7f17a2b4d244734202ccd173138f8f6.pdf">Aizu Geek Dojo とは</a>
        </li>
        <li>
          <a href="https://u-aizu.ac.jp/sgu/files/4735c8e8e1637f2e5808fde7db3913ebdfb98f3d.pdf">Aizu Geek Dojo 使用要綱，使用者心得</a>
        </li>
      </ul>
      <div class="grid-container">
        <span>
          ・場所・機器予約 / Reservation for place and equipment:
        </span>
        <a
          href="https://forms.gle/dto324JWUpftKAWZ8"
          target="_blank"
          rel="noopener noreferrer"
        >Aizu Geek Dojo 予約フォーム</a>
        <span>
          ・機器講習会について / About equipment training session:
        </span>
        <nuxt-link to="/training">詳しくはこちらをご覧ください。</nuxt-link>
      </div>
      <div class="opentime-calender">
        <div class="gc_wrapper">
          <div class="responsive-iframe-container big-container">
            <iframe src="https://calendar.google.com/calendar/embed?height=500&wkst=1&ctz=Asia%2FTokyo&bgcolor=%23fdfced&title=Geek%20Dojo&showPrint=0&showCalendars=0&showTitle=0&src=Zm5tcHRxOXJwODdwOXE5cnN2aThrYnZ0cTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NjQ2bXJicXM3a2cxZzc4NjloYXRkbGFuNm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=OWg1NW0yNWZ1cHBmNmVkM3ZnNnN1Z2lmOThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cDM5ZmNxM2U1Z2xhb2QwdTR1a205cG9sMThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aDc0NjFxcWhtdWRib3ZjZnZzMTl2dmRpYmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZzRnNHJsdGdvbTFjYjRjM2toc3FtbzNpbzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cWFwYmRqcnB0a2o2bTlvODUzNzg4bjlpNWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bzRnZDR2MjZvYjg4MTVwdml2Y3ZqczZmdmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NDU3YTAyNjM5NjVjNjFlMDJjZjNiZGE4NjFkZDVkNTZjMDVjY2RlYWVlZjgzMDIzZDQxNTRmY2Q3MWM0ZGMyMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=NWttbWM5aTlhMTQxcmcwYjJyM2Zvc2thYzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NWs2aXI5MGJsbXVlcWlhaWw0bzVibWFoNTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23F6BF26&color=%23EF6C00&color=%23E67C73&color=%23C0CA33&color=%239E69AF&color=%239E69AF&color=%23AD1457&color=%239E69AF&color=%238E24AA&color=%23EF6C00&color=%23B39DDB&color=%230B8043"
              style="border-width:0"
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  margin: 20px
}
</style>
<script>
</script>
