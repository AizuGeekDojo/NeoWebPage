const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Aizu Geek Dojo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Aizu Geek Dojoは、会津大学生のためのものづくりスペースです。ものづくりのための設備と備品がそろっています。 開室時間中は、機器の使用に詳しいSA/TAが設備および備品の使用方法を指導します。個人の趣味製作、コンテスト出展作品製作、サークル活動、卒業研究、課外プロジェクト製作等、いろいろな場面で活用してください。是非お気軽にお立ち寄りください。'
      },
      {
        name: 'keywords',
        content:
          'Aizu Geek Dojo, Geek Dojo, 会津大学, 会津ギーク道場, ギーク道場'
      },
      {
        name: 'google-site-verification',
        content: 'WcictFNzcT-J0gh-B5m6AycTQNfQySLQzom9UNH_GVc'
      }
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
  plugins: [],

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
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
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
  }
}
