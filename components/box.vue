<template>
  <div class="box">
    <div class="box-title"> {{ title }}</div>
    <slot class="box-content"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color';

.box {
  padding: 0;
  margin: 0 auto;
  width: 100%;

  .box-title {
    color: $fontColorWhite;
    font-size: 23px;
    background-color: $lastColor2;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 8px 15px;
    text-indent: 5px each-line;
  }

  .box-content {
    border: 1px solid $mainColor1;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
