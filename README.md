# geek-web-page

> My impressive Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm ci

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## How To Create blog article

```
$ npm run blog-template
Title: test
Tag(カンマ区切り): test
writer: test
```

then, you can get article template in `./blog/${date}-${filename}`.  
then, you write content, under

```
---
title: test
created_at: 2019-07-13
tags: test
description:
writer: test
---

```
