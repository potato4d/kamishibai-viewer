<template>
  <div class="slideMode-loading">
    <div class="slideMode-loading_body"></div>
    <SlideControl :option="option" :page="0" :pages="['']" :disable="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SlideControl from './SlideControl.vue'

export default Vue.extend({
  props: {
    option: Object
  },
  components: {
    SlideControl
  }
})
</script>

<style lang="scss" scoped>
.slideMode-loading {
  width: 100%;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  background: #d4645c;
  font-weight: bold;
}

.slideMode-loading_body {
  width: 100%;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>
