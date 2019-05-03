<template>
  <div class="product">
    <div class="youtube_link">
      <iframe
        src="https://www.youtube.com/embed/ODhsndH_6os"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen/>
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
.product {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-content: center;
  flex-direction: column;
}
.youtube_link {
  width: 100%;
  iframe {
    width: 1000px;
    height: 600px;
  }
}
</style>
