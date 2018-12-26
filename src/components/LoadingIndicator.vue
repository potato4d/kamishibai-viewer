<template>
  <div class="sk-fading-circle">
    <div :class="`sk-circle${n} sk-circle`" v-for="n in 12" :key="n"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss" scoped>
.sk-fading-circle {
  margin: 100px auto 0;
  width: 40px;
  height: 40px;
  position: relative;

  .sk-circle {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &::before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: #56c502;
      border-radius: 100%;
      -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
      animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
    }
  }
  .sk-circle2 {
    transform: rotate(30deg);
  }
  .sk-circle3 {
    transform: rotate(60deg);
  }
  .sk-circle4 {
    transform: rotate(90deg);
  }
  .sk-circle5 {
    transform: rotate(120deg);
  }
  .sk-circle6 {
    transform: rotate(150deg);
  }
  .sk-circle7 {
    transform: rotate(180deg);
  }
  .sk-circle8 {
    transform: rotate(210deg);
  }
  .sk-circle9 {
    transform: rotate(240deg);
  }
  .sk-circle10 {
    transform: rotate(270deg);
  }
  .sk-circle11 {
    transform: rotate(300deg);
  }
  .sk-circle12 {
    transform: rotate(330deg);
  }
}

.sk-fading-circle .sk-circle2:before {
  animation-delay: -1.1s;
}
.sk-fading-circle .sk-circle3:before {
  animation-delay: -1s;
}
.sk-fading-circle .sk-circle4:before {
  animation-delay: -0.9s;
}
.sk-fading-circle .sk-circle5:before {
  animation-delay: -0.8s;
}
.sk-fading-circle .sk-circle6:before {
  animation-delay: -0.7s;
}
.sk-fading-circle .sk-circle7:before {
  animation-delay: -0.6s;
}
.sk-fading-circle .sk-circle8:before {
  animation-delay: -0.5s;
}
.sk-fading-circle .sk-circle9:before {
  animation-delay: -0.4s;
}
.sk-fading-circle .sk-circle10:before {
  animation-delay: -0.3s;
}
.sk-fading-circle .sk-circle11:before {
  animation-delay: -0.2s;
}
.sk-fading-circle .sk-circle12:before {
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}

@keyframes sk-circleFadeDelay {
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
