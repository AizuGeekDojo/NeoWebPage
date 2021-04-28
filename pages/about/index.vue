<template>
  <div class="top">
    <div class="content">
      <h2>AizuGeekDojoについて</h2>
      <div style="width: 90%">
        <script
          async
          class="
        speakerdeck-embed"
          data-id="8c7c3dbcbfb348aab9b89af3cbdf2ce3"
          data-ratio="1.77777777777778"
          src="//speakerdeck.com/assets/embed.js"></script>
      </div>
      <p>Aizu Geek Dojo は、会津大学生のためのものづくりスペースです。
      ものづくりのための設備と備品がそろっています。
      開室時間中は、機器の使用に詳しい SA/TA が設備および備品の使用方法を指導します。
      個人の趣味製作やコンテスト出展作品製作、サークル活動、卒業研究、課外プロジェクト製作など、様々な場面で活用してください。
      是非お気軽にお立ち寄りください。</p>

      <ul >
        <li>
          <h3>場所</h3>
          <p>研究棟南入口そば１階１６３</p>
        </li>
        <li>
          <h3>利用資格</h3>
          <ul>
            <li>本学の学生、教職員</li>
            <li>その他グローバル推進本部スーパーグローバル大学推進室長が許可した者</li>
          </ul>
        </li>
        <li>
          <h3>開室時間</h3>
          <ul>
            <li>
              SA/TA 常駐時間を Aizu Geek Dojo Website から確認してください。<br>(<a href="https://aizugeekdojo.github.io/">https://aizugeekdojo.github.io/</a>)
            </li>
            <li>
              安全管理上、機器の使用に長けた SA/TA が常駐している時間に利用してください。
            </li>
          </ul>
        </li>
        <li>
          <h3>利用方法</h3>
          <ul>
            <li>
              開室時間内は Dojo 内設備および備品を自由に利用することができます。機器および備品の使用の方法は SA/TA に気軽に聞いてください。
            </li>
            <li>
              入口の入退室管理システムで利用者数を管理しています。入退室の際は ID カードをカードリーダーにかざしてください。
            </li>
            <li>
              Dojo の鍵は、グローバル推進本部で貸し出し手続きを行ってください。（講習会修了者に限る）
            </li>
            <li>
              「Aizu Geek Dojo 使用者心得」を守ってください。
            </li>
          </ul>
        </li>
        <li>
          <h3>講習会の受講</h3>
          <ul>
            <li>
              Dojo 内の各機器使用講習会を実施しています。希望者は、Aizu Geek Dojo ホームページから申し込みをしてください。
            </li>
            <li>
              各機器使用講習会を受講し、所定の手技を取得した人は、開室時間外でも Dojo を利用することができます。
            </li>
            <li>
              講習会の詳細は、Aizu Geek Dojo Website で確認してください。<br>(<a href="https://aizugeekdojo.github.io/">https://aizugeekdojo.github.io/</a>)
            </li>
          </ul>
        </li>
        <li>
          <h3>主な設備と備品</h3>
          <ul>
            <li>
              レーザーカッター   2 台：アクリル板や木材に彫刻したり、カットしたりできます。
            </li>
            <li>
              3D プリンター   3 台：立体模型を作ることができます。
            </li>
            <li>
              はんだごて、グルーガン、Raspberry Pi、FaBo Kit 各種、Makeblock 各種、工具各種
            </li>
            <li>
              消耗品（アクリル板等制作に必要な材料）は各自持参のこと。
            </li>
          </ul>
        </li>
        <li>
          <h3>利用上の注意</h3>
          <ul>
            <li>
              私物を放置しないでください。
            </li>
            <li>
              喫煙、飲食をしないでください。
            </li>
            <li>
              消火器の位置を確認してください。
            </li>
            <li>
              利用後は、整理整頓および清掃をし、必ず原状に戻してください。退室の際は、室内のエアコン、照明、機器等の電源を切ってください。
            </li>
            <li>
              不明な点、不安な点があれば自己判断せず、SA/TA に聞くか、グローバル推進本部まで問い合わせてください。
            </li>
          </ul>
        </li>
        <li>
          <h3>連絡先</h3>
          <p>グローバル推進本部スーパーグローバル大学推進室(SGU)</p>
          <p>e-mail: <a href="mailto:aizugeekdojo@u-aizu.ac.jp">aizugeekdojo@u-aizu.ac.jp</a> もしくは<a href="mailto:sgu-adm@u-aizu.ac.jp">sgu-adm@u-aizu.ac.jp</a><br>TEL: 0242-37-2701(内線: 3801)<br>FAX: 0242-37-2766<br>Website: <a href="https://aizugeekdojo.github.io/">https://aizugeekdojo.github.io/</a></p>
        </li>
      </ul>
      <div class="photo">
        <img src="../../assets/images/geekdojo1.png">
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
          name: 'about',
          path: '/about'
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
@import '../../style/color';

.top {
  .photo {
    position: relative;
    top: 2em;
    width: 90%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
