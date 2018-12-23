<template>
  <div class="slideMode-error">
    <div class="slideMode-error_body">{{ errorReason || 'error' }}</div>
    <SlideControl :option="option" :page="0" :pages="['']" :disable="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SlideControl from './SlideControl.vue'

export default Vue.extend({
  props: {
    errorReason: String,
    option: Object
  },
  components: {
    SlideControl
  }
})
</script>

<style lang="scss" scoped>
.slideMode-error {
  width: 100%;
  height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  background: #d4645c;
  font-weight: bold;
  border-radius: 3px;
  overflow: hidden;
}

.slideMode-error_body {
  width: 100%;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>
