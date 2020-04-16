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
      class="breadcrumb-li-pages">
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
  margin: 0;
  padding: 0 0 0 10px;
  display: flex;
  flex-direction: row;
  position: relative;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.4);
  top: -4px;
  min-height: 100%;
  z-index: 3;
  height: auto;
  .breadcrumb-li {
    font-weight: 100;
    display: flex;
    align-items: center;
    list-style: none;
    .breadcrumb-li-links-home {
      img {
        top: 2px;
        position: relative;
        height: 16px;
        width: 16px;
      }
    }
    .breadcrumb-li-links-home:after {
      content: '|';
      display: inline-block;
      align-items: center;
      margin: 0 10px;
    }
  }
  .breadcrumb-li-pages {
    font-weight: 100;
    display: flex;
    align-items: center;
    list-style: none;
    .breadcrumb-li-links {
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .breadcrumb-li-links:last-child:after {
      content: none;
    }
  }
  .breadcrumb-li-pages:after {
    content: '/';
    display: inline-block;
    font-size: 18px;
    align-items: center;
    margin: 0 10px;
  }
}
/deep/ a,
a:visited {
  color: $fontColor;
  text-decoration: none;
}
/deep/ span {
  a,
  a:visited {
    color: $fontColor;
    text-decoration: none;
  }
}

.breadcrumb-ul {
  border-top: 3px solid $subColor2;
  background-color: $hightLightColor;
  .breadcrumb-li {
    a {
      text-align: center;
      display: flex;
    }
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
