<template>
  <div class="top">
    <div class="content">
      <div class="article-content">
        <div class="top-content"> 
          <div class="title">{{ title }}</div>
          <div class="post-meta">
            <div class="post-meta-date">日付: <time>{{ params.date }}</time></div>
          </div>
        </div>
        <div 
          class="body-content" 
          v-html="bodyHtml"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { sourceFileArray } from '../../../../blog/summary.json'

export default {
  validate({ params }) {
    return sourceFileArray.includes(`./blog/${params.date}-${params.slug}.md`)
  },
  asyncData({ params }) {
    return Object.assign(
      {},
      require(`~/blog/${params.date}-${params.slug}.json`),
      { params }
    )
  },
  head() {
    const title = `${this.title} - aizugeekdojo.github.io`
    const url = `https://aizugeekdojo.github.io/blog/${this.params.date}/${
      this.params.slug
    }/`
    return {
      title: title,
      meta: [
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title }
      ],
      link: [{ rel: 'canonical', href: url }]
    }
  },
  data: function() {
    return {
      breadcrumbs: [
        {
          name: 'BLOG',
          path: '/blog'
        }
      ]
    }
  },
  created() {
    this.breadcrumbs.push(
      {
        name: this.params.date,
        path: `/blog/${this.params.date}`
      },
      {
        name: this.params.slug,
        path: `/blog/${this.params.date}/${this.params.slug}`
      }
    )
    this.$store.commit('change_page', this.breadcrumbs)
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../style/color.scss';

.content {
  margin: 0 auto;
  padding: 0;
  width: 80%;
  .article-content {
    margin-top: 20px;
    width: 90%;
    .top-content {
      width: 100%;
      height: 100px;

      background: white;

      display: grid;
      justify-content: center;
      text-align: center;
      align-items: center;
      grid-template-columns: 60% 40%;

      border-width: 1px;
      border-style: solid;
      border-color: black;
      .title {
        margin-left: 50px;
        font-size: 40px;
      }
      .post-meta {
        display: grid;
        grid-template-rows: 50%;
        .post-meta-date {
          grid-row: 2 / 3;
        }
      }
    }
    .body-content {
      width: 100%;
      text-align: left;

      /deep/ h1 {
        padding: 0.5em;
        background: white;
        border-left: solid 5px #ffaf58;
      }

      /deep/ h2 {
        padding: 0.5em;
        background: white;
        border-left: solid 5px #59fcff;
      }

      /deep/ pre {
        background-color: rgba(50, 50, 50, 0.1);
        margin-right: 20px;
        margin-left: 20px;
        margin-bottom: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
        line-height: normal;
      }
    }
  }
}
</style>
