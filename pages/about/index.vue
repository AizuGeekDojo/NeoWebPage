<template>
  <div class="about">
    <div class="content">
      <p>Aizu Geek Dojo は、会津大学生のためのものづくりスペースです。</p>
      <p>ものづくりのための設備と備品がそろっています。</p>
      <p>開室時間中は、機器の使用に詳しい SA/TA が設備および備品の使用方法を指導します。</p>
      <p>個人の趣味製作やコンテスト出展作品製作、サークル活動、卒業研究、課外プロジェクト製作など、様々な場面で活用してください。</p>
      <p>是非お気軽にお立ち寄りください。</p>
    </div>
    <div class="photo">
      <img src="../../assets/images/geekdojo1.png">
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
.about {
  font-size: 20px;
  color: $fontColor;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;

  .content {
    width: 60%;
    padding-left: 30px;
    padding-right: 30px;
  }

  .photo {
    width: 40%;
    padding-left: 30px;
    padding-right: 30px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
