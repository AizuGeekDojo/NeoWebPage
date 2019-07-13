<template>
  <div class="top">
    <div class="content">
      <div 
        v-for="(article, index) in articles" 
        :key="index">
        <article_board :article="article" />        
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
    this.articles = fileMap
  }
}
</script>

<style lang="scss" scoped>
.top {
  width: auto;
  height: auto;
  .content {
    width: 100%;
    padding: 0;
    div {
      @media (max-width: 600px) {
        width: 95%;
      }
      @media (min-width: 600px) {
        width: 80%;
      }
      margin-top: 5px;
      margin-bottom: 0px;
      margin-left: auto;
      margin-right: auto;
      justify-content: center;
    }
  }
}
</style>
