<template>
  <div 
    class="article-board" 
    @click="transition_to_article">
    <div class="article-title"> {{ article.title }} </div>
    <div class="article-date"><time>{{ date }}</time></div>
  </div> 
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      date: ''
    }
  },
  mounted: function() {
    const splitArray = this.article.base.replace('.json', '').split('-')
    this.date = splitArray.slice(0, 3).join('-')
  },
  methods: {
    transition_to_article: function() {
      const splitArray = this.article.base.replace('.json', '').split('-')
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
  width: 80%;
  height: 100px;
  background-color: white;

  border-width: 0px;
  box-shadow: 0px 0px 3px -1px #e5e5e5;

  shadowcolor: #e5e5e5;
  //  shadowOffset:{width:0,height:0},
  shadowradius: 3;
  border-color: #cccccc;
  borderradius: 0;

  border-style: solid;
  border-color: black;

  text-align: center;
  justify-content: center;

  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 60% 40%;

  .article-title {
    grid-row: 1 / 2;
    grid-column: 1 / 3;

    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    font-size: 20px;
    font-color: $fontColor;
  }

  .article-date {
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    font-size: 15x;
    font-color: $fontColor;
  }
}
</style>
