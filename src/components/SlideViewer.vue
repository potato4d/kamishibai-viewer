<template>
  <div class="slideMode-Viewer" @click="handleClickViewer">
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
  },
  methods: {
    handleClickViewer(event: MouseEvent) {
      const target = event.target! as HTMLElement
      const currentTarget = event.currentTarget! as HTMLElement
      if (['A', 'IMG'].includes(target.tagName)) {
        return
      }
      const rect = currentTarget.getBoundingClientRect()
      if (event.clientX - rect.left > rect.width / 2) {
        this.$emit('next')
      } else {
        this.$emit('prev')
      }
    }
  }
})
</script>
