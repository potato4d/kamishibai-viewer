<template>
  <div class="devapp-container">
    <div class="devapp-container_content">
      <h1>
        <span>Kamishibai</span><br />
        <small>Web Component based Qiita slide viewer built with Vue.js</small>
      </h1>
    </div>
    <Kamishibai
      :id="'4ff5873776992f0511d6'"
      :option="{
        version: '0.1.0'
      }"
    />
    <div class="devapp-container_content"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Kamishibai from './Kamishibai.vue'

export default Vue.extend({
  components: {
    Kamishibai
  }
})
</script>

<style lang="scss" scoped>
.devapp-container {
  max-width: 1080px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
}

.devapp-container_content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.devapp-container_content h1 {
  text-align: center;
}
.devapp-container_content small {
  font-size: 0.5em;
}
</style>
