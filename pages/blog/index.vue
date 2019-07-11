<template>
  <div class="top">
    <div class="content">
      <div>
        TODO
        なんとか記事リストみたいなのを作る
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
          name: 'blog',
          path: '/blog'
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
.top {
  width: 100%;
  height: 100%;
}
</style>
