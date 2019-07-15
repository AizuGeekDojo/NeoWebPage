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
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.params.description
        },
        {
          hid: 'keywords',
          property: 'keywords',
          content: this.params.keywords
        },
        {
          hid: 'description',
          property: 'description',
          content: this.params.description
        }
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
  @media (max-width: 600px) {
    width: 95%;
  }
  @media (min-width: 600px) {
    width: 80%;
  }
  .article-content {
    margin-top: 20px;
    @media (max-width: 600px) {
      width: 100%;
    }
    @media (min-width: 600px) {
      width: 90%;
    }
    .top-content {
      width: auto;
      height: auto;

      @media (max-width: 600px) {
        display: grid;
        grid-template-rows: 75% 25%;
        .title {
          margin-top: 5px;
          margin-bottom: 5px;
          font-size: 20px;
          line-height: normal;
        }

        .post-meta {
          display: grid;
          margin: 0 auto;
          .post-meta-date {
            margin: 0 auto;
          }
        }
      }
      @media (min-width: 600px) {
        display: grid;
        grid-template-columns: 60% 40%;
        .title {
          margin-top: 10px;
          margin-bottom: 10px;
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

      background: white;

      justify-content: center;
      text-align: center;
      align-items: center;

      border-width: 1px;
      border-style: solid;
      border-color: black;
    }
    .body-content {
      width: auto;
      height: auto;
      text-align: left;

      @media (max-width: 600px) {
        line-height: normal;
        /deep/ h1 {
          font-size: 25px;
        }
        /deep/ h2 {
          font-size: 23px;
        }
        /deep/ h3 {
          font-size: 20px;
        }
        /deep/ h4 {
          font-size: 18px;
        }
      }

      @media (min-width: 600px) {
        line-height: inherit;
        /deep/ h1 {
          font-size: 40px;
        }
        /deep/ h2 {
          font-size: 35px;
        }
        /deep/ h3 {
          font-size: 30px;
        }
        /deep/ h4 {
          font-size: 25px;
        }
      }

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

      /deep/ h3 {
        padding: 0.5em;
        background: white;
        border-left: solid 5px #fcff59;
      }

      /deep/ h4 {
        padding: 0.5em;
        background: white;
        border-left: solid 5px #fc59ff;
      }

      /deep/ pre {
        background-color: rgba(50, 50, 50, 0.1);
        margin-right: 20px;
        margin-left: 20px;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 5px;
        line-height: normal;
        overflow: auto;
      }
    }
  }
}
</style>
