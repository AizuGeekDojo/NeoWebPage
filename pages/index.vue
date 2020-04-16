<template>
  <div class="top">
    <div class="content">
      <div class="news">
        <div class="news-title">お知らせ</div>
        <div class="news-content">
          <img src="../assets/images/openlab_2019.jpg">
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
    font-size: 23px;
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
