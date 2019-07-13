---
title: NuxtJSでブログを作る2
created_at: 2019-07-22
tags: NuxtJS, ブログ, processmd
---

# 続き

こんにちは、会津大学学部4年の森本望です。
[前回](../2019-07-11/create_blog)に引き続きブログを作っていきます。
今回はMarkdownを使って動的にWebページを生成していきます。
動的とは言ってもCIでビルド毎に静的なページを吐き出しています。

## processmd 

今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。
このライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。

まずこのようなMarkdownを書きます。

``` markdown

---
title: NuxtJSでブログを作る2
created_at: 2019-07-22
tags: NuxtJS, ブログ, processmd
---

# 続き

[前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。
今回はMarkdownを使って動的にWebページを生成していきます。
動的とは言ってもCIでビルド毎に静的なページを吐き出しています。

## processmd 

今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。
このライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。

まずこのようなMarkdownを書きます。

```

### Markdown to JSON

先ほどのMarkDownをJSONに変換します。
``` sh
processmd ./blog/* --stdout --outputDir ./blog/ > ./blog/summary.json
```

とすると 

``` 
$ tree blog
blog
├── 2019-07-22-create_blog.json
├── 2019-07-22-create_blog.md
└── summary.json
```

このようなファイルが出力されます。

2019-07-22-create_blog.json 
``` json 
{
  "title": "NuxtJSでブログを作る2",
  "created_at": "2019-07-22T00:00:00.000Z",
  "tags": "NuxtJS, ブログ, processmd",
  "bodyContent": "# 続き\n\n[前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。\n今回はMarkdownを使って動的にWebページを生成していきます。\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\n\n## processmd \n\n今回MarkdownをHTMLに直すのownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。\n\nまずこのようなMarkdownを書きます。\n\n``` markdown\n\n---\ntitle: NuxtJSでブログを作る2\ncreated_at: 2019-07-22\ntags: NuxtJS, ブログ, processmd\n---\n\n# 続き\n\n[前回](./2019-07-21動的にWebページを生成していきます。\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\n\n## processmd \n\n今回MarkdownをHTMLに直すのに使うのは[processmd](https://www.npmjs.com/package/processmd)です。\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。\n\nまずこのようなMarkdownを書きます。\n\n```",
  "bodyHtml": "<h1>続き</h1>\n<p><a href=\"./2019-07-21/create_blog\">前回</a>に引き続きブログを作っていきます。\n今回はMarkdownを使って動的にWebページを生成していきます。\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。</p>\n<h2>processmd</h2>\n<p\">processmd</a>です。\nこのライブラリを使うのは、MarkdownからJSONを吐き出してくれるので、タグなどのメタ情報を含ませやすいからです。</p>\n<p>まずこのようなMarkdownを書きます。</p>\n<pre><code class=\"hljs\">---\ntitle: NuxtJSでブログを作る2\ncreated_at: 2019-07-2前回](./2019-07-21/create_blog)に引き続きブログを作っていきます。\n今回はMarkdownを使って動的にWebページを生成していきます。\n動的とは言ってもCIでビルド毎に静的なページを吐き出しています。\n\n## processmd \n\n今回MarkdownをHTMLに直すのに使うのは[processmd](https:タ情報を含ませやすいからです。\n\nまずこのようなMarkdownを書きます。</code></pre>",
  "dir": "blog",
  "base": "2019-07-22-create_blog.json",
  "ext": ".json",
  "sourceBase": "2019-07-22-create_blog.md",
  "sourceExt": ".md"
}%    
```

summary.json
``` json 
{
  "fileMap": {
    "blog/2019-07-22-create_blog.json": {
      "title": "NuxtJSでブログを作る2",
      "created_at": "2019-07-22T00:00:00.000Z",
      "tags": "NuxtJS, ブログ, processmd",
      "dir": "blog",
      "base": "2019-07-22-create_blog.json",
      "ext": ".json",
      "sourceBase": "2019-07-22-create_blog.md",
      "sourceExt": ".md"
    }
  },
  "sourceFileArray": [
    "./blog/2019-07-22-create_blog.md"
  ]
}
```

このデータを元にNuxtの動的リンクを使ってページを作成します。

### Nuxtでページを作成

#### ディレクトリ構造

NuxtJSで先ほど作成したJSONを読み込み、HTMLに埋め込みます。

ディレクトリを以下のように作成します。  
`_date`や`_slug`はNuxtの動的なルーティングに使います。  
[ドキュメント](https://ja.nuxtjs.org/guide/routing/#%E5%8B%95%E7%9A%84%E3%81%AA%E3%83%AB%E3%83%BC%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0)

``` 
$ tree pages/blog
pages/blog
├── _date
│   ├── _slug
│   │   └── index.vue
│   └── index.vue
└── index.vue
```

#### pages/blog/_date/_slug/index.vue

このページはこんな感じに作っています。

`validate`で動的なページを作成するリンクを制限しています。
今回だと`summary.json`の`sourceFileArray`に、リンクのデータが存在しているかを確認しています。
```js
import { sourceFileArray } from '../../../../blog/summary.json';
...
validate({ params }) {
  return sourceFileArray.includes(`./blog/${params.date}-${params.slug}.md`)
},
```

`asyncData`は実際に表示するコンテンツを取得してきています。  
今回だと`2019-07-22-create_blog.json`が当てはまりますね。

`head()`はHTMLのheadタグを作成するのに使います。  
以下の実装だと`url`, `title`しかmetaタグに入れていませんが、SEO的に`description`入れたりしたいですね。

そして`v-html`に`2019-07-22-create_blog.json`の`bodyHtml`を渡しています。  
余談ですが、ここで埋め込む要素にCSSを当てたい場合ディープセレクターを使う必要があります。  
このWebページではこの記事を書いてる現在以下のようにCSSを当てています。  
素のHTMLだけだと味気ないので好みに整形しても良いですね

```css
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
  padding: 20px;
  border-radius: 5px;
  line-height: normal;
  overflow: auto;
}
```

実装が以下のようになりました。(実際はもう少し複雑)

``` js
<template>
  <div>
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
  }
}
</script>
```

これでとりあえずMarkdownからブログ記事を書くことは可能になりました。
