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

  .box-title {
    color: $fontColorWhite;
    font-size: 30px;
    background-color: $mainColor1;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    padding: 10px;
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
