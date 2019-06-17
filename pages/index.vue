<template>
  <div class="top">
    <div class="top-img"><!-- TODO 画像を差し替え　 -->
      <img src="../assets/images/introduce/image1.jpg">
    </div>
    <div class="top-about">
      <h3>{{ text.index["top-about"]["h3"] }}</h3>
      <h6>{{ text.index["top-about"]["h6-1"] }}</h6>
      <h6>{{ text.index["top-about"]["h6-2"] }}</h6>
    </div>
    <bannner/>
  </div>
</template>

<script>
import banner from '../components/banner'
export default {
  components: {
    bannner: banner
  },
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
.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  .top-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .top-img {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-right: 30px;
    margin-left: 30px;
  }
}

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
</style>
