<template>
  <div class="top">
    <div class="content">
      <div class="youtube_link">
        <iframe
          src="https://www.youtube.com/embed/ODhsndH_6os"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen/>
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
          name: '制作物',
          path: '/product'
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
@import '../style/color';

.youtube_link {
  width: 100%;
  height: auto;
  iframe {
    min-width: 700px;
    min-height: 400px;
  }
}
@media (max-width: 600px) {
  .youtube_link {
    iframe {
      min-width: 500px;
      min-height: 285px;
    }
  }
}
</style>
