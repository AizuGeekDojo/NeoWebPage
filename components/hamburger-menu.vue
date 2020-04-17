<template>
  <div class="hamburger-menu">
    <div
      v-if="!isClick"
      class="hamburger"
      @click="click_hamburger"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div
      v-if="isClick"
      class="close"
      @click="click_hamburger"
    >
      <span></span>
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      isClick: false
    }
  },
  methods: {
    click_hamburger() {
      this.isClick = !this.isClick
      this.$emit('close-sender')
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger-menu {
  margin-right: 15px;
  .hamburger,
  .hamburger span {
    display: inline-block;
    box-sizing: border-box;
  }
  .hamburger {
    position: relative;
    width: 45px;
    height: 45px;
  }
  .hamburger span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
  }

  .hamburger span:nth-of-type(1) {
    animation: bounce-in-2-back 0.1s;
    top: 0;
  }
  .hamburger span:nth-of-type(2) {
    animation: bounce-in-feed-in 0.3s;
    top: 20px;
  }
  .hamburger span:nth-of-type(3) {
    bottom: 0;
    animation: bounce-in-1-back 0.1s;
  }

  .close,
  .close span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
  }
  .close {
    position: relative;
    width: 45px;
    height: 45px;
  }
  .close span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
  }
  .close span:nth-of-type(1) {
    animation: bounce-in-1 0.1s;
    top: 0;
    transform: translateY(20px) rotate(-45deg);
  }

  .close span:nth-of-type(2) {
    animation: bounce-in-2 0.1s;
    bottom: 0;
    transform: translateY(-20px) rotate(45deg);
  }
}

@keyframes bounce-in-feed-in {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 100%;
  }
}

@keyframes bounce-in-1 {
  0% {
    transform: translateY(20px) rotate(0);
  }
  50% {
    transform: translateY(20px) rotate(-22deg);
  }
  100% {
    transform: translateY(20px) rotate(-45deg);
  }
}

@keyframes bounce-in-1-back {
  0% {
    transform: translateY(-20px) rotate(0);
  }
  50% {
    transform: translateY(-20px) rotate(-22deg);
  }
  100% {
    transform: translateY(-20px) rotate(-45deg);
  }
}

@keyframes bounce-in-2 {
  0% {
    transform: translateY(-20px) rotate(0);
  }
  50% {
    transform: translateY(-20px) rotate(22deg);
  }
  100% {
    transform: translateY(-20px) rotate(45deg);
  }
}

@keyframes bounce-in-2-back {
  0% {
    transform: translateY(20px) rotate(0);
  }
  50% {
    transform: translateY(20px) rotate(22deg);
  }
  100% {
    transform: translateY(20px) rotate(45deg);
  }
}
</style>
