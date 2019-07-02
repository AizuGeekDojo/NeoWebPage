<template>
  <div class="top">
    <div class="content">
      <div class="top-img"><!-- TODO 画像を差し替え　 -->
        <img src="../assets/images/introduce/image1.jpg">
      </div>
      <h3>{{ text.index["top-about"]["h3"] }}</h3>
      <h6>{{ text.index["top-about"]["h6-1"] }}</h6>
      <h6>{{ text.index["top-about"]["h6-2"] }}</h6>
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
</style>
