<template>
  <div class="slideMode-Viewer">
    <div class="slideMode-Viewer_content"><div v-html="pages[page]"></div></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    pages: Array as () => string[],
    page: Number,
    option: Object
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
