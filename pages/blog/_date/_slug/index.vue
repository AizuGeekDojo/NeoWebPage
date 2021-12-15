<template>
  <div class="top">
    <div class="content">
      <div class="article-content">
        <div class="top-content"> 
          <h2 class="title">{{ title }}</h2>
          <div class="post-meta">
            <div class="post-meta-date"><time>{{ params.date }}</time></div>
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
  padding: 0 20px 20px;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 600px) {
  }
  .article-content {
    margin-top: 50px;
    margin-bottom: 100px;
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
        .post-meta {
          font-size: 16px;
          margin: 0 0 auto 0;
          .post-meta-date {
            margin: 0 auto;
          }
        }
      }

      @media (min-width: 600px) {
        .post-meta {
          font-size: 16px;
          margin: 0 0 auto 0;
          .post-meta-date {
            margin: 0 auto;
          }
        }
      }
    }
    .body-content {
      width: auto;
      height: auto;
      text-align: left;

      ::v-deep img {
        width: 100%;
      }

      @media (max-width: 600px) {
        line-height: normal;
        ::v-deep h1 {
          font-size: 25px;
        }
        ::v-deep h2 {
          font-size: 23px;
        }
        ::v-deep h3 {
          font-size: 20px;
        }
        ::v-deep h4 {
          font-size: 18px;
        }
      }

      @media (min-width: 600px) {
        line-height: inherit;
        ::v-deep h1 {
          font-size: 30px;
        }
        ::v-deep h2 {
          font-size: 28px;
        }
        ::v-deep h3 {
          font-size: 25px;
        }
        ::v-deep h4 {
          font-size: 22px;
        }

        ::v-deep pre {
          font-size: 14px;
        }
      }

      ::v-deep h1 {
        padding: 0.5em;
        background: white;
        border-left: solid 5px #ffaf58;
      }

      ::v-deep h2 {
        padding: 0.5em;
        background: white;
        border-left: solid 5px #59fcff;
      }

      ::v-deep h3 {
        padding: 0.5em;
        background: white;
        border-left: solid 5px #fcff59;
      }

      ::v-deep h4 {
        padding: 0.5em;
        background: white;
        border-left: solid 5px #fc59ff;
      }

      ::v-deep pre {
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
