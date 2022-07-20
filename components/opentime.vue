<template>
  <div class="top">
    <div class="content">
      <h2>予約状況</h2>
      <p>Aizu Geek Dojoは予約優先です。空いていれば予約がなくても利用できます。予約フォームはこちら。</p>
      <ul>
        <li>
          学生:
          <a
            href="https://forms.gle/dto324JWUpftKAWZ8"
            target="_blank"
            rel="noopener noreferrer"
          >https://forms.gle/dto324JWUpftKAWZ8</a>
        </li>
        <li>
          教職員その他:
          <a
            href="https://forms.gle/CAgBXhhDxMbJSL9f7"
            target="_blank"
            rel="noopener noreferrer"
          >https://forms.gle/CAgBXhhDxMbJSL9f7</a>
        </li>
      </ul>
      <div class="opentime-calender">
        <div class="gc_wrapper">
          <div class="responsive-iframe-container big-container">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTokyo&mode=WEEK&title=Geek%20Dojo&src=Zm5tcHRxOXJwODdwOXE5cnN2aThrYnZ0cTRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NjQ2bXJicXM3a2cxZzc4NjloYXRkbGFuNm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=OWg1NW0yNWZ1cHBmNmVkM3ZnNnN1Z2lmOThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cDM5ZmNxM2U1Z2xhb2QwdTR1a205cG9sMThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aDc0NjFxcWhtdWRib3ZjZnZzMTl2dmRpYmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZzRnNHJsdGdvbTFjYjRjM2toc3FtbzNpbzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cWFwYmRqcnB0a2o2bTlvODUzNzg4bjlpNWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bzRnZDR2MjZvYjg4MTVwdml2Y3ZqczZmdmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NWttbWM5aTlhMTQxcmcwYjJyM2Zvc2thYzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NWs2aXI5MGJsbXVlcWlhaWw0bzVibWFoNTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F6BF26&color=%23EF6C00&color=%23E67C73&color=%23C0CA33&color=%239E69AF&color=%239E69AF&color=%23AD1457&color=%239E69AF&color=%23EF6C00&color=%23B39DDB"
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
ul {
  list-style: disc !important;
}
</style>
