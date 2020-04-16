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
import article_board from '../../../components/article-board.vue'

import { fileMap } from '../../../blog/summary.json'
export default {
  validate({ params }) {
    return /\d+[\-]\d+[\-]\d+/.test(params.date)
  },
  async asyncData({ params }) {
    return { params }
  },
  components: {
    article_board: article_board
  },
  data: function() {
    return {
      articles: [],
      breadcrumbs: [
        {
          name: 'BLOG',
          path: '/blog'
        }
      ]
    }
  },
  created: function() {
    this.breadcrumbs.push({
      name: this.params.date,
      path: `/blog/${this.params.date}`
    })
    const spliteDate = this.params.date.split('-')
    for (let key in fileMap) {
      if (
        key.indexOf(
          `blog/${spliteDate[0]}-${spliteDate[1]}-${spliteDate[2]}`
        ) !== -1
      ) {
        this.articles.push(fileMap[key])
      }
    }
    this.articles = Object.entries(this.articles)
      .sort()
      .reverse()
    this.$store.commit('change_page', this.breadcrumbs)
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
