<template>
  <div class="member">
    <div class="picture">
      <img :src="picture_path">
    </div>
    <div class="name">
      <p> {{ name }}</p>
    </div>
    <div class="detail">
      <p> {{ detail }}</p>
    </div>
    <div class="like">
      <p> {{ like }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    picture_path: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    like: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color';
.member {
  background-color: $subColor3;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.36863);
  height: 300px;
  width: 600px;
  margin-top: 20px;
  margin-bottom: 20px;

  display: grid;
  grid-template-rows: 60% 40%;
  grid-template-columns: 40% 1fr;
  .picture {
    grid-row: 1/2;
    grid-column: 1/2;
    text-align: center;
    margin: 10px;
    img {
      height: 100%;
      background-size: cover;
      border-radius: 50%;
    }
  }
  .name {
    grid-row: 2/3;
    grid-column: 1/2;
    text-align: center;
  }
  .detail {
    grid-row: 1/2;
    grid-column: 2/3;
    text-align: center;
  }
  .like {
    grid-row: 2/3;
    grid-column: 2/3;
    text-align: center;
  }
}
</style>
