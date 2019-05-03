<template>
  <div class="contents">
    <p>Aizu Geek Dojo では以下のものを備品として揃えています。</p>
    <ul class="items">
      <li
        v-for="item in items"
        :key="item"
        class="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import items from '../assets/content/items_list.json'
export default {
  data: function() {
    return {
      items: [],
      breadcrumbs: [
        {
          name: '備品',
          path: '/items'
        }
      ]
    }
  },
  created() {
    this.items = items.items
    this.$store.commit('change_page', this.breadcrumbs)
  }
}
</script>

<style lang="scss" scoped>
.contents {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    justify-content: center;
    text-align: center;
  }

  .items {
    /*width: 40%;*/
    display: flex;
    flex-direction: column;
    margin-left: 100px;
    justify-content: center;
    text-align: center;
    li {
      display: inline-block;
      padding: 0 10px;
    }
  }
}
</style>
