<template>
  <div class="top">
    <div
      class="members content">
      <hr>
      <h2>SAメンバー<br>~Student Assistant~</h2>
      <div
        v-for="(member, index) in shuffle_sa_member"
        :key="index"
        class="members group"
      >
        <member
          :name="member.name"
          :status="member.status"
          :picture_path="member.picture_path"
          :detail="member.detail"
          :like="member.like"
          :links="member.links"
        />
      </div>
      <hr>
      <h2>歴代OB</h2>
      <div
        v-for="(member, index) in shuffle_ob_member"
        :key="index+100"
        class="members group"
      >
        <member
          :name="member.name"
          :status="member.status"
          :picture_path="member.picture_path"
          :detail="member.detail"
          :like="member.like"
          :links="member.links"
        />
      </div>
    </div>
  </div>
</template>

<script>
import member from '@/components/member'
export default {
  components: {
    member: member
  },
  data: function() {
    return {
      members: [
        {
          name: '森本望',
          status: 'ob',
          picture_path: require('@/assets/images/member/nozomoto.jpg'),
          detail:
            'フロント、サーバーサイドからインフラまで色々やります。最近はDeepにLearningしてる。',
          like: 'カメラ, Golang, Vue, Vim, 藍染カレン',
          links: [
            {
              src: 'https://www.nozograph.com/',
              prefix: 'fas',
              icon: 'blog'
            },
            {
              src: 'https://www.facebook.com/nozomimorimoto66',
              prefix: 'fab',
              icon: 'facebook'
            },
            {
              src: 'https://github.com/nozo-moto/',
              prefix: 'fab',
              icon: 'github'
            }
          ]
        },
        {
          name: '並木優祐',
          status: 'sa',
          picture_path: require('@/assets/images/member/ynamiki.jpeg'),
          detail: 'GeekDojoの道場主？',
          like: '',
          links: [
            {
              src: 'https://github.com/wancom/',
              prefix: 'fab',
              icon: 'github'
            }
          ]
        },
        {
          name: '芳賀史都',
          status: 'ob',
          picture_path: require('@/assets/images/member/hatobus.png'),
          detail: '🤔',
          like: 'go python 車 菜々家の銀ひらすの西京焼き定食',
          links: [
            {
              src: 'https://twitter.com/hg_fmt',
              prefix: 'fab',
              icon: 'twitter'
            },
            {
              src: 'https://github.com/hatobus/',
              prefix: 'fab',
              icon: 'github'
            },
            {
              src: 'https://www.facebook.com/fumitonn',
              prefix: 'fab',
              icon: 'facebook'
            }
          ]
        },
        {
          name: 'たくぼく',
          status: 'sa',
          picture_path: require('@/assets/images/member/takuboku.jpg'),
          detail: 'うるしぬりエンジニア。',
          like: '自転車とか車とか合唱とかタイ料理とか。',
          links: []
        },
        {
          name: 'ビートル',
          status: 'sa',
          picture_path: require('@/assets/images/member/sukegawa.jpg'),
          detail: 'キーワード：RaspberryPi , IoT',
          like: 'golang, python',
          links: [
            {
              src: 'https://www.facebook.com/profile.php?id=100023700893253',
              prefix: 'fab',
              icon: 'facebook'
            }
          ]
        },
        {
          name: '星裕也',
          status: 'sa',
          picture_path: require('@/assets/images/member/hosi.jpg'),
          detail: 'Geek二年目',
          like: '',
          links: []
        },
        {
          name: '橋本志穂実',
          status: 'sa',
          picture_path: require('@/assets/images/member/fironn.jpg'),
          detail: 'フロントにアプリに電子工作、もりだくさん🐡',
          like: 'IoT, React.js, Python',
          links: [
            {
              src: 'https://ha-shii.com/',
              prefix: 'fas',
              icon: 'blog'
            },
            {
              src: 'https://www.facebook.com/shihomi.hashimoto.35',
              prefix: 'fab',
              icon: 'facebook'
            },
            {
              src: 'https://github.com/Fironn/',
              prefix: 'fab',
              icon: 'github'
            }
          ]
        },
        {
          name: '大川原駿',
          status: 'sa',
          picture_path: require('@/assets/images/member/ookawara.jpg'),
          detail: '不発の大玉花火',
          like: '📻🚶✈️💤',
          links: []
        },
        {
          name: 'TC',
          status: 'sa',
          picture_path: require('@/assets/images/member/chiba.jpg'),
          detail: 'バ美肉済',
          like: 'VR. 3D',
          links: []
        },
        {
          name: 'じぶりん(gpioblink)',
          status: 'sa',
          picture_path: require('@/assets/images/member/gpiobrink.jpg'),
          detail:
            '適当にvueでアプリ作るくらいの弱小もくもくマン。LTともくもく大好きなのでみんな誘ってね。タダ飯もよろしく！',
          like: 'Vue.js, タダ飯',
          links: [
            {
              src: 'https://www.facebook.com/profile.php?id=100025436730296',
              prefix: 'fab',
              icon: 'facebook'
            },
            {
              src: 'https://github.com/gpioblink/',
              prefix: 'fab',
              icon: 'github'
            }
          ]
        },
        {
          name: '髙橋麻衣',
          status: 'sa',
          picture_path: require('@/assets/images/member/azagi.jpg'),
          detail: '',
          like: '',
          links: [
            {
              src: 'https://www.facebook.com/profile.php?id=100035453412465',
              prefix: 'fab',
              icon: 'facebook'
            }
          ]
        }
      ],
      breadcrumbs: [
        {
          name: 'メンバー',
          path: '/members'
        }
      ],
      shuffle_sa_member: [],
      shuffle_ob_member: []
    }
  },
  mounted: function() {
    this.shuffle_sa_member = this.shuffle_sa()
    this.shuffle_ob_member = this.shuffle_ob()
  },
  created() {
    this.$store.commit('change_page', this.breadcrumbs)
  },
  methods: {
    shuffle_sa: function() {
      let array = this.members.filter(function(item) {
        return item.status === 'sa'
      })
      for (let i = array.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1))
        let tmp = array[i]
        array[i] = array[r]
        array[r] = tmp
      }
      return array
    },
    shuffle_ob: function() {
      let array = this.members.filter(function(item) {
        return item.status === 'ob'
      })
      for (let i = array.length - 1; i > 0; i--) {
        let r = Math.floor(Math.random() * (i + 1))
        let tmp = array[i]
        array[i] = array[r]
        array[r] = tmp
      }
      return array
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color';
.members {
  div {
    margin: 5px 0 5px 0;
  }
}

@media (max-width: 600px) {
  .top {
    .members {
      width: 100%;
      margin: 0;
    }
    .members.group {
      margin: 4px 0;
    }
    .content {
      padding: 0 0 45px 0;
      margin: 0;
    }
    .member {
      margin: 4px 0;
    }
    hr {
      width: 30px;
      margin: 50px 35% 40px;
      height: 5px;
      color: $mainColor1;
      background-color: $mainColor1;
    }
    h2 {
      width: 100%;
      text-align: center;
      background-color: transparent;
      margin: 0 0 25px;
    }
  }
}
@media (min-width: 600px) {
  .top {
    .members {
      padding: 0;
      width: 100%;
      margin: 0 auto;
    }
    .members.content {
      padding: 40px 0;
      width: 100%;
      display: inline-flex;
      position: relative;
      flex-direction: row;
      flex-wrap: wrap;
      min-width: 600px;
      max-width: 1200px;
      justify-content: center;
      align-items: flex-start;
      align-content: space-around;
      h2 {
        width: 100%;
        text-align: center;
        background-color: transparent;
      }
      hr {
        width: 30px;
        margin: 50px 35% 40px;
        height: 5px;
        color: $mainColor1;
        background-color: $mainColor1;
      }
    }
    .members.group {
      margin: 30px 15px;
      border-radius: 10px;
      flex-basis: 300px;
    }
  }
}
</style>
