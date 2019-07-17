<template>
  <div class="member">
    <div class="picture">
      <img :src="picture_path">
    </div>
    <div class="name">
      <p> {{ name }}</p>
    </div>
    <div class="links">
      <div
        v-for="(link, index) in links"
        :key="index">
        <a
          :href="link.src"
          target="_blank"
          rel="noopener noreferrer"
          class="icon" >
          <font-awesome-icon
            :icon="[link.prefix, link.icon]"
          />
        </a>
      </div>
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
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/color';
.member {
  padding: 0;
  margin: 0 auto;
  background-color: $subColor3;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.36863);
  margin-top: 20px;
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  .member {
    height: 400px;
    width: 300px;
    letter-spacing: normal;

    display: grid;
    grid-template-rows: 25% 12% 13% 30% 20%;
    grid-template-columns: 100%;

    .picture {
      grid-row: 1/2;
      text-align: center;
      margin: 10px;
      img {
        height: 100%;
        background-size: cover;
        border-radius: 50%;
      }
    }

    .name {
      margin: 0 auto;
      grid-row: 2/3;
      text-align: center;
      display: flex;
      align-items: center;
      p {
        margin: 0 auto;
      }
    }

    .links {
      margin: 0 auto;
      grid-row: 3/4;
      text-align: center;
      justify-content: center;
      display: flex;
      align-items: center;
      flex-direction: row;
      div {
        margin: 0 auto;
      }
      .icon {
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 25px;
      }
    }

    .detail {
      margin: 0 auto;
      display: flex;
      align-items: center;
      grid-row: 4/5;
      text-align: center;
      line-height: normal;
    }

    .like {
      margin: 0 auto;
      display: flex;
      align-items: center;
      grid-row: 5/6;
      text-align: center;
      line-height: normal;
    }
  }
}

@media (min-width: 600px) {
  .member {
    height: 300px;
    width: 600px;
    display: grid;
    grid-template-rows: 60% 20% 20%;
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
    .links {
      grid-row: 3/4;
      grid-column: 1/2;
      text-align: center;
      justify-content: center;
      display: flex;
      flex-direction: row;
      .icon {
        width: 20px;
        height: 20px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 25px;
      }
    }
  }
}
</style>
