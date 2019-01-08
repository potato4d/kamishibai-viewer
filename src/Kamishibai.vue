<template>
  <div id="app">
    <div class="slideMode" v-if="isFetched">
      <SlideViewer
        @prev="handleMoveToPrev"
        @next="handleMoveToNext"
        :option="option"
        :page="page"
        :pages="pages"
      />
      <SlideControl
        @prev="handleMoveToPrev"
        @next="handleMoveToNext"
        @move="handleMoveToPage"
        :option="option"
        :page="page"
        :pages="pages"
      />
    </div>
    <LoadingView class="slideMode" :option="option" v-else-if="!isErrored" />
    <ErrorView
      :errorReason="errorReason"
      class="slideMode"
      :option="option"
      v-else
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { parseItem } from './utils/parser'
import LoadingView from './components/LoadingView.vue'
import ErrorView from './components/ErrorView.vue'
import SlideViewer from './components/SlideViewer.vue'
import SlideControl from './components/SlideControl.vue'
import { Item } from '@/types/item'
import { fetchItem } from './utils/http'

interface LocalState {
  isFetched: boolean
  isErrored: boolean
  item: Item | null
  page: number
  pages: string[]
  errorReason: string | null
}

export default Vue.extend({
  name: 'Kamishibai',
  props: {
    itemid: String,
    apikey: {
      type: String,
      required: false,
      default: ''
    }
  },
  data(): LocalState {
    return {
      isFetched: false,
      isErrored: false,
      item: null,
      page: 0,
      pages: [],
      errorReason: ''
    }
  },
  components: {
    SlideViewer,
    SlideControl,
    LoadingView,
    ErrorView
  },
  computed: {
    option(): { apikey: string; version: string } {
      const apikey = this.apikey
      return {
        apikey,
        version: '1.0.2'
      }
    }
  },
  methods: {
    handleMoveToPrev() {
      this.page = Math.max(0, this.page - 1)
    },
    handleMoveToNext() {
      this.page = Math.min(this.pages.length - 1, this.page + 1)
    },
    handleMoveToPage(page: number) {
      this.page = page
    }
  },
  async mounted() {
    if (!this.itemid) {
      this.isErrored = true
      this.errorReason = '記事 ID が指定されていません。'
    }
    try {
      const item = await fetchItem(this.itemid, { token: this.option.apikey })
      this.item = item
      this.pages = parseItem(item)
      this.isFetched = true
    } catch (e) {
      this.isErrored = true
    }
  }
})
</script>

<style lang="scss">
@import '../node_modules/@increments/qiita-slide-mode/src/styles/style.scss';
#app {
  font-family: -apple-system, Segoe UI, Helvetica Neue,
    Hiragino Kaku Gothic ProN, 'メイリオ', meiryo, sans-serif;
}
#app .slideMode a {
  color: #4aac00;
}
#app .slideMode .fa-link {
  display: none;
}
#app .slideMode {
  font-size: 12px;
  max-width: 850px;
  margin-left: auto;
  margin-right: auto;
}
#app h3 {
  border-bottom: solid 1px #e5e5e5;
}
</style>
