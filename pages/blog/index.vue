<template>
  <div class="top">
    <div class="content">
      <h2>ブログ</h2>
      <div class="blog">
        <div 
          v-for="(article, index) in articles" 
          :key="index">
          <article_board :article="article" />        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fileMap } from '../../blog/summary.json'
import article_board from '../../components/article-board.vue'
export default {
  components: {
    article_board: article_board
  },
  data: function() {
    return {
      breadcrumbs: [
        {
          name: 'blog',
          path: '/blog'
        }
      ],
      articles: []
    }
  },
  created: function() {
    this.$store.commit('change_page', this.breadcrumbs)
    this.articles = Object.entries(fileMap)
      .sort()
      .reverse()
  }
}
</script>

<style lang="scss" scoped>
.top {
  height: auto;
  .content {
    width: 100%;
    .blog {
      width: 100%;
    }
  }
}
</style>
