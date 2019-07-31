<template>
  <div class="top">
    <div class="content">
      <div 
        v-for="(message, index) in messages"
        :key="index"
        class="message">
        <div class="title">{{ message.title }}</div>
        <div class="body">{{ message.body }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import box from '@/components/box.vue'
export default {
  components: {
    box: box
  },
  data() {
    return {
      breadcrumbs: [
        {
          name: 'プライバシーポリシー',
          path: '/privacy_policy'
        }
      ],
      messages: [
        {
          title: '個人情報の利用目的',
          body: `当ブログでは、メールでのお問い合わせ、メールマガジンへの登録などの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。これらの個人情報は質問に対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。`
        },
        {
          title: '個人情報の第三者への開示',
          body: `当サイトでは、個人情報は適切に管理し、本人のご了解がある場合、法令等への協力のための開示が必要となる場合に該当する場合を除いて第三者に開示することはありません。`
        },
        {
          title: '個人情報の開示、訂正、追加、削除、利用停止',
          body: `ご本人からの個人データの開示、訂正、追加、削除、利用停止のご希望の場合には、ご本人であることを確認させていただいた上、速やかに対応させていただきます。`
        },
        {
          title: 'アクセス解析ツールについて',
          body: `当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。`
        },
        {
          title: '免責事項',
          body: `当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。`
        },
        {
          title: 'プライバシーポリシーの変更について',
          body: `当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。`
        }
      ]
    }
  },
  created: function() {
    this.$store.commit('change_page', this.breadcrumbs)
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color.scss';

.top {
  .content {
    .message {
      .title {
        font-size: 20px;
        background-color: $mainColor1;
        color: $fontColorWhite;
        border-radius: 5px;
      }
      .body {
        line-height: normal;
        color: $fontColor;
      }
    }
  }
}
@media (max-width: 600px) {
  .top {
    .content {
      .message {
        margin-bottom: 10px;
      }
    }
  }
}

@media (min-width: 600px) {
  .top {
    .content {
      .message {
        margin-bottom: 30px;
        .title {
          padding-left: 20px;
        }
        .body {
          padding-left: 20px;
        }
      }
    }
  }
}
</style>
