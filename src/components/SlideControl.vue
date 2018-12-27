<template>
  <div class="slideMode-Dashboard">
    <button
      class="slideMode-Dashboard_button slideMode-Dashboard_button--prev "
      @click="$emit('prev')"
      :disabled="page === 0 && !disable"
      :class="{
        'slideMode-Dashboard_button--clickable': page !== 0 && !disable
      }"
    >
      <v-icon name="backward" class="icon" />
    </button>
    <button
      class="slideMode-Dashboard_button slideMode-Dashboard_button--next "
      @click="$emit('next')"
      :disabled="page === pages.length - 1 && !disable"
      :class="{
        'slideMode-Dashboard_button--clickable':
          page !== pages.length - 1 && !disable
      }"
    >
      <v-icon name="forward" class="icon" />
    </button>
    <span class="slideMode-Dashboard_pageCount"
      >{{ page + 1 }} / {{ pages.length }}</span
    >
    <div class="slideMode-Dashboard_progress">
      <div
        class="slideMode-Dashboard_progressFill"
        :style="{
          width: disable ? '0%' : `${((page + 1) / pages.length) * 100}%`
        }"
      ></div>
    </div>
    <div style="margin: 0 10px;font-size: 10px; font-weight:bold;">
      <a
        style="color: #fff;text-decoration: none;"
        target="_blank"
        href="https://github.com/potato4d/kamishibai-viewer"
      >
        kamishibai v{{ option.version }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'vue-awesome/icons/forward'
import 'vue-awesome/icons/backward'
const { default: Icon } = require('vue-awesome/components/Icon')

export default Vue.extend({
  components: {
    'v-icon': Icon
  },
  props: {
    disable: Boolean,
    pages: Array as () => string[],
    page: Number,
    option: Object
  }
})
</script>

<style lang="scss" scoped>
.slideMode-Dashboard {
  display: flex !important;
}
.icon {
  transform: scale(0.8);
  margin-top: 4px;
}
</style>
