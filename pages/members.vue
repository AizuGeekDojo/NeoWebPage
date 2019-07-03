<template>
  <div class="top">
    <div
      class="members content">
      <div
        v-for="(member, index) in members"
        :key="index"
      >
        <member
          :name="member.name"
          :picture_path="member.picture_path"
          :detail="member.detail"
          :like="member.like"
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
          name: 'nozo-moto',
          picture_path:
            'https://scontent-nrt1-1.cdninstagram.com/vp/77887d988fd60fda07bc6a2ccb505368/5DAA2F85/t51.2885-15/e35/16123024_1896395307256157_2583947978490249216_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com',
          detail: 'ほげほげ',
          like: 'golang, python'
        },
        {
          name: 'y-namiki',
          picture_path:
            'https://scontent-nrt1-1.cdninstagram.com/vp/77887d988fd60fda07bc6a2ccb505368/5DAA2F85/t51.2885-15/e35/16123024_1896395307256157_2583947978490249216_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com',
          detail: '最強',
          like: 'golang, python'
        },
        {
          name: 'hatobus',
          picture_path:
            'https://scontent-nrt1-1.cdninstagram.com/vp/77887d988fd60fda07bc6a2ccb505368/5DAA2F85/t51.2885-15/e35/16123024_1896395307256157_2583947978490249216_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com',
          detail: 'Twitterのバズり芸人',
          like: 'golang, python'
        },
        {
          name: 'hoge fugato',
          picture_path:
            'https://scontent-nrt1-1.cdninstagram.com/vp/77887d988fd60fda07bc6a2ccb505368/5DAA2F85/t51.2885-15/e35/16123024_1896395307256157_2583947978490249216_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com',
          detail: 'piyo piyo',
          like: 'golang, python'
        }
      ],
      breadcrumbs: [
        {
          name: 'メンバー',
          path: '/members'
        }
      ]
    }
  },
  created() {
    this.$store.commit('change_page', this.breadcrumbs)
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
