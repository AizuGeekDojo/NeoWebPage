<template>
  <div class="top">
    <div class="top-img"><!-- TODO 画像を差し替え　 -->
      content
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

<style lang="scss" src="../style/page/index/style.scss" scoped>
</style>
