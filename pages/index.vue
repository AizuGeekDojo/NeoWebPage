<template>
  <div class="top">
    <div class="content">
      <div class="news">
        <div class="news-title">お知らせ</div>
        <div class="news-content">
          <p>
            新型コロナウイルス感染対策の一環としてGeek Dojoの利用についても感染対策措置を講じることとします。<br/>
            詳細については下記の資料をご覧ください。<br/>
            <a
              href="../AizuGeekDojoResToCoViD19_20210107M_JA.pdf"
              target="_blank">Aizu Geek Dojoの利用について</a><br/>
            2020年07月06日: 資料を更新しました。<br/>
            <br/>
            We will take a countermeasure for the infection in Aizu Geek Dojo as a part of University’s action of COVID-19.<br/>
            Please see the following material for details.<br/>
            <a
              href="../AizuGeekDojoResToCoViD19_20210107M_EN.pdf"
              target="_blank">Use of Aizu Geek Dojo</a><br/>
            July 6, 2020: Materials updated.<br/>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      breadcrumbs: [{}]
    }
  },
  computed: {
    text: function() {
      return this.$store.state.text
    }
  },
  created: function() {
    this.$store.commit('change_page', this.breadcrumbs)
  }
}
</script>
<style lang="scss" scoped>
@import '../style/color';

@media (max-width: 600px) {
  img {
    width: 100%;
    height: auto;
  }
}

@media (min-width: 600px) {
  img {
    width: 100%;
    height: auto;
  }
}

.news {
  padding: 0;
  margin: 0 auto;
  .news-title {
    color: $fontColorWhite;
    font-size: 20px;
    background-color: $lastColor2;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 8px 15px;
    text-indent: 5px each-line;
  }

  .news-content {
    border: 1px solid $lastColor2;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      padding: 0;
    }
  }
}
</style>
