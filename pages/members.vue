<template>
  <div class="top">
    <div
      class="members content">
      <div
        v-for="(member, index) in shuffle_member"
        :key="index"
      >
        <member
          :name="member.name"
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
          name: '森本 望',
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
          picture_path: require('@/assets/images/member/takuboku.jpg'),
          detail: 'うるしぬりエンジニア。',
          like: '自転車とか車とか合唱とかタイ料理とか。',
          links: []
        },
        {
          name: 'i80486dx2',
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
          picture_path: require('@/assets/images/member/hosi.jpg'),
          detail: 'Geek二年目',
          like: '',
          links: []
        },
        {
          name: '橋本志穂実',
          picture_path: require('@/assets/images/member/fironn.jpg'),
          detail: '',
          like: '',
          links: [
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
          name: '大川原 駿',
          picture_path: require('@/assets/images/member/ookawara.jpg'),
          detail: '不発の大玉花火',
          like: '📻🚶✈️💤',
          links: []
        },
        {
          name: 'TC',
          picture_path: require('@/assets/images/member/notfound.jpg'),
          detail: 'バ美肉済',
          like: 'VR. 3D',
          links: []
        },
        {
          name: 'じぶりん (gpioblink)',
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
        }
      ],
      breadcrumbs: [
        {
          name: 'メンバー',
          path: '/members'
        }
      ],
      shuffle_member: []
    }
  },
  mounted: function() {
    this.shuffle_member = this.shuffle()
  },
  created() {
    this.$store.commit('change_page', this.breadcrumbs)
  },
  methods: {
    shuffle: function() {
      let array = this.members
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
.top {
  /*TODO heightは適当に調整する*/
  .members {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
