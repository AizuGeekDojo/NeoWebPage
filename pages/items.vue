<template>
  <div class="top">
    <div class="content">
      Aizu Geek Dojo では以下のものを備品として揃えています。
      <ul class="items">
        <li
          v-for="item in items"
          :key="item"
          class="item">
          <p>{{ item }}</p>
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
    padding: 0;
    li {
      display: inline-block;
    }
  }
}
p {
  color: black;
  border: solid 3px #00a5b1;
  padding: 0.5em;
  border-radius: 0.5em;
}
</style>
