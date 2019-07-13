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
  height: 100px;
  width: 100%;
  background-color: white;

  border-width: 0px;
  box-shadow: 0px 0px 3px -1px #e5e5e5;

  shadowcolor: #e5e5e5;
  shadowradius: 3;
  border-color: #cccccc;
  borderradius: 0;

  border-style: solid;
  border-color: black;

  text-align: center;
  justify-content: center;

  display: grid;
  @media (max-width: 600px) {
    grid-template-columns: 70% 30%;
    line-height: normal;

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
      color: $fontColor;
    }

    .article-date {
      grid-column: 2 / 3;
      grid-row: 2 / 3;

      font-size: 15x;
      color: $fontColor;
    }
  }
}
</style>
