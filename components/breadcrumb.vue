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
  display: flex;
  flex-direction: row;
  position: relative;
  box-shadow: 0px 5px 7px #0000001c;
  top: -4px;
  min-height: 100%;
  height: auto;
  .breadcrumb-li {
    font-weight: 100;
    display: flex;
    align-items: center;
    list-style: none;
    .breadcrumb-li-links-home {
      img {
        height: 22px;
        width: 22px;
      }
    }
    .breadcrumb-li-links-home:after {
      content: '|';
      display: inline-block;
      font-size: x-large;
      align-items: center;
      margin: 0 30px;
    }
    .breadcrumb-li-links {
      font-size: larger;
      text-transform: uppercase;
      letter-spacing: 0.2em;
    }
    .breadcrumb-li-links:last-child:after {
      content: none;
    }
  }
  .breadcrumb-li-pages {
    font-weight: 100;
    display: flex;
    align-items: center;
    list-style: none;
    .breadcrumb-li-links {
      font-size: larger;
      text-transform: uppercase;
      letter-spacing: 0.2em;
    }
    .breadcrumb-li-links:last-child:after {
      content: none;
    }
  }
  .breadcrumb-li-pages:after {
    content: '/';
    display: inline-block;
    font-size: x-large;
    align-items: center;
    margin: 0 30px;
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
  border-top: 4px solid $subColor2;
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
