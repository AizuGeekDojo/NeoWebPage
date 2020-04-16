<template>
  <div class="top">
    <div class="content">
      <div class="news">
        <div class="news-title">お知らせ</div>
        <div class="news-content">
          <p>
            コロナウイルス感染対策の一環としてGeek Dojoの利用についても感染対策措置を講じることとします。<br/>
            詳細については下記の資料をご覧ください。<br/>
            <a href="../assets/AizuGeekDojoResToCOVID19.pdf">Aizu Geek Dojoの利用について</a><br/>
            <br/>
            We will take a countermeasure for the infection in Aizu Geek Dojo as a part of University’s action of corona virus.<br/>
            Please see the following material for details.<br/>
            <a href="../assets/AizuGeekDojoResToCOVID19en.pdf">Use of Aizu Geek Dojo</a><br/>
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
    margin: 0 auto;
    color: $fontColorWhite;
    font-size: 30px;
    background-color: $mainColor1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 10px;
  }

  .news-content {
    border: 1px solid $mainColor1;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      padding: 0;
      width: 80%;
    }
  }
}
</style>
