<template>
  <div class="slideMode-loading">
    <div class="slideMode-loading_body">
      <LoadingIndicator /><br />
      <div>Loading slide...</div>
    </div>
    <SlideControl :option="option" :page="0" :pages="['']" :disable="true" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoadingIndicator from './LoadingIndicator.vue'
import SlideControl from './SlideControl.vue'

export default Vue.extend({
  props: {
    option: Object
  },
  components: {
    LoadingIndicator,
    SlideControl
  }
})
</script>

<style lang="scss" scoped>
.slideMode-loading {
  width: 100%;
  height: 480px;
  display: flex;
  align-items: stetch;
  justify-content: center;
  flex-direction: column;
  // background: #f0f0f0;
  font-weight: bold;
}

.slideMode-loading_body {
  width: 100%;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  color: #56c502;
  border: solid 1px #e5e5e5;
  border-radius: 3px 3px 0 0 / 3px 3px 0 0;
}
</style>
