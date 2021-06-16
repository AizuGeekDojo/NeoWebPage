const pkg = require('./package')
const { sourceFileArray } = require('./blog/summary.json')

const url = 'https://aizugeekdojo.github.io'
const title = 'Aizu Geek Dojo'
const description =
  'Aizu Geek Dojoは、会津大学生のためのものづくりスペースです。ものづくりのための設備と備品がそろっています。 開室時間中は、機器の使用に詳しいSA/TAが設備および備品の使用方法を指導します。個人の趣味製作、コンテスト出展作品製作、サークル活動、卒業研究、課外プロジェクト製作等、いろいろな場面で活用してください。是非お気軽にお立ち寄りください。'
const keywords =
  'Aizu Geek Dojo, Geek Dojo, 会津大学, 会津ギーク道場, ギーク道場'

function sourceFileNameToUrl(filepath) {
  const deleteExt = filepath.replace('.md', '')
  const fileName = deleteExt.split('/')[deleteExt.split('/').length - 1]
  const splitArray = fileName.split('-')
  return `/blog/${splitArray.slice(0, 3).join('-')}/${splitArray
    .slice(3)
    .join('-')}`
}

const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    return sourceFileNameToUrl(sourceFileName)
  })
  callback(null, routes)
}

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        name: 'keywords',
        content: keywords
      },
      {
        name: 'google-site-verification',
        content: 'WcictFNzcT-J0gh-B5m6AycTQNfQySLQzom9UNH_GVc'
      },
      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: url }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Lato:400,700|Noto+Sans+JP:400,700'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['./style/main.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~plugins/ga.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: ['nuxt-fontawesome', '@nuxtjs/sitemap'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['external_library']
  },

  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
  },

  sitemap: {
    path: '/sitemap.xml', // 出力パス
    hostname: 'https://aizugeekdojo.github.io',
    cacheTime: 1000 * 60 * 15,
    generate: true,
    exclude: []
  },

  generate: {
    routes: generateDynamicRoutes
  }
}
