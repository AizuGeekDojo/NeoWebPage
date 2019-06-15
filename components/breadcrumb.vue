<template>
  <ul class="breadcrumb-ul">
    <li class="breadcrumb-li">
      <nuxt-link
        to="/"
        class="breadcrumb-li-links-home">
        <img src="../assets/home.png">
      </nuxt-link>
    </li>
    <li
      v-for="(crumb, index) in breadcrumbs" 
      :key="index"
      class="breadcrumb-li">
      <span v-if="crumb.path">
        <nuxt-link
          :to="crumb.path"
          class="breadcrumb-li-links">{{ crumb.name }}</nuxt-link>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      required: false,
      default: () => [{ name: '', path: '/' }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color';
.breadcrumb-ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 20px;
  .breadcrumb-li {
    display: flex;
    align-items: center;
    margin-right: 30px;
    margin-left: 30px;
    list-style: none;
    font-size: 22px;
    .breadcrumb-li-links-home {
      img {
        height: 22px;
        width: 22px;
      }
    }
    .breadcrumb-li-links-home:after {
      content: '|';
      display: inline-block;
      align-items: center;
      margin-left: 50px;
      font-size: 22px;
    }
    .breadcrumb-li-links {
      font-size: 22px;
    }
    .breadcrumb-li-links:last-child:after {
      content: none;
    }
  }
}

.breadcrumb-ul {
  .breadcrumb-li {
    a,
    a:visited {
      color: $fontColor;
      text-decoration: none;
    }
    span {
      a,
      a:visited {
        color: $fontColor;
        text-decoration: none;
      }
    }
  }
}
</style>
