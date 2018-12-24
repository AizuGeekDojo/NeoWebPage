<template>
  <div class="top">
    <div class="top-img"><!-- TODO 画像を差し替え　 -->
      content
    </div>
    <div class="top-about">
      <h3>何ができる施設？</h3>
      <h6>3Dプリンターやレーザーカッターが扱えます</h6>
      <h6>いろんな開発をしています。</h6>
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
  created: function() {
    this.$store.commit('change_page', this.breadcrumbs)
  }
}
</script>

<style lang="scss" src="../style/page/index/style.scss" scoped>
</style>
