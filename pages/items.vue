<template>
  <div class="top">
    <div class="content">
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
@import '../style/color';

.content {
  .items {
    display: flex;
    flex-direction: column;
    text-align: center;
    li {
      display: inline-block;
    }
  }
}
</style>
