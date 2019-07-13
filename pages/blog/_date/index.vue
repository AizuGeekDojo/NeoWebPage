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
  width: 100%;
  height: 100%;
  .content {
    width: 100%;
    padding: 0;
    div {
      width: 80%;
      margin-top: 5px;
      margin-bottom: 0px;
      margin-left: auto;
      margin-right: auto;
      justify-content: center;
    }
  }
}
</style>
