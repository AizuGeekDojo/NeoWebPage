<template>
  <div 
    class="article-board" 
    @click="transition_to_article">
    <div class="article-title"> {{ article[1].title }} </div>
    <div class="article-date"><time>{{ date }}</time></div>
  </div> 
</template>

<script>
export default {
  props: {
    article: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      date: ''
    }
  },
  mounted: function() {
    const splitArray = this.article[1].base.replace('.json', '').split('-')
    this.date = splitArray.slice(0, 3).join('-')
  },
  methods: {
    transition_to_article: function() {
      const splitArray = this.article[1].base.replace('.json', '').split('-')
      this.$router.push(
        `/blog/${splitArray.slice(0, 3).join('-')}/${splitArray
          .slice(3)
          .join('-')}`
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color.scss';
.article-board {
  margin: 10px 0;
  padding: 18px 25px;
  box-shadow: 1px 1px 4px $fontColor;
  cursor: pointer;
  text-align: left;
  vertival-align: center;
}

@media (max-width: 600px) {
  .article-board {
    grid-template-columns: 70% 30%;
  }

  .article-title {
    display: flex;
    align-items: center;
  }

  .article-date {
    margin: 0 auto;
    font-size: 15px;
    color: $fontColor;

    align-items: center;
    display: flex;
  }
}

@media (min-width: 600px) {
  .article-title {
    font-size: 21px;
    color: $fontColor;
  }

  .article-date {
    font-size: 12px;
    color: $fontColor;
  }
}

.article-board:hover {
  box-shadow: 2px 2px 4px $fontColor;
}
</style>
