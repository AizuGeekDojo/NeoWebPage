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
            <li>その他産学イノベーションセンター長が許可した者</li>
          </ul>
        </li>
        <li>
          <h3>開室時間</h3>
          <ul>
            <li>
              平日 8:30～19:00
            </li>
            <li>
              ただし、レーザーカッター及び3Dプリンターは、機器講習会を受講したもののみ下記の時間内に利用することができます。
            </li>
            <ul>
              <li>
                レーザーカッター： 平日 8:30～17:00
              </li>
              <li>
                3Dプリンター： 平日 8:30～19:00
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <h3>利用方法</h3>
          <ul>
            <li>
              開室時間内は Dojo 内設備および備品を自由に利用することができます。
            </li>
            <li>
              機器および備品の使用の方法は SA/TA に気軽に聞いてください。
            </li>
            <li>
              入口の入退室管理システムで利用者数を管理しています。入退室の際は ID カードをカードリーダーにかざしてください。
            </li>
            <li>
              <a href="https://u-aizu.ac.jp/sgu/files/4735c8e8e1637f2e5808fde7db3913ebdfb98f3d.pdf">「Aizu Geek Dojo 使用者心得」</a>を守ってください。
            </li>
          </ul>
        </li>
        <li>
          <h3>機器講習会の受講</h3>
          <ul>
            <li>
              Aizu Geek Dojo 内の各機器使用講習会を実施しています。詳しくは<a href="https://aizugeekdojo.github.io/training/">「機器講習会の受講」</a>をご覧ください。
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
              3D プリンター   4 台：立体模型を作ることができます。
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
              不明な点、不安な点があれば自己判断せず、SA/TA に聞くか、産学イノベーションセンター（UBIC）スタッフルーム（内線3800）まで問い合わせてください。
            </li>
          </ul>
        </li>
        <li>
          <h3>連絡先</h3>
          <p>産学イノベーションセンター(UBIC)</p>
          <p>e-mail: <a href="mailto:aizugeekdojo@u-aizu.ac.jp">aizugeekdojo@u-aizu.ac.jp</a><br>TEL: 0242-37-2766(内線: 3800)<br>Website: <a href="https://u-aizu.ac.jp/sgu/aizu_geek_dojo/introduction/">https://u-aizu.ac.jp/sgu/aizu_geek_dojo/introduction/</a></p>
        </li>
      </ul>
      <div class="photo">
        <img src="../../assets/images/agd.jpg">
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
