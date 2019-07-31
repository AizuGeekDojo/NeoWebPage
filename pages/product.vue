<template>
  <div class="top">
    <div class="content">
      <box title="GeekDojo紹介">
        <div class="youtube_link">
          <iframe
            src="https://www.youtube.com/embed/ODhsndH_6os"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </box>
      <box title="公開講座">
        <div class="youtube_link">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ysLTEQn2HHI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </box>
    </div>
  </div>
</template>

<script>
import box from '@/components/box.vue'

export default {
  components: {
    box: box
  },
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

@media (min-width: 600px) {
  .youtube_link {
    width: 100%;
    height: auto;
    margin-bottom: 30px;

    iframe {
      min-width: 700px;
      min-height: 400px;
    }
  }
}

@media (max-width: 600px) {
  .youtube_link {
    width: 100%;
    height: auto;
    margin-bottom: 30px;

    iframe {
      min-width: 100%;
      min-height: 200px;
    }
  }
}
</style>
