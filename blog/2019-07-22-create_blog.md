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

```


