<template>
  <div class="devapp-container">
    <div class="devapp-container_content">
      <h1>
        <span>Kamishibai Viewer v0.1.0</span><br />
        <small>
          <small>
            Web Component based Qiita slide viewer built with Vue.js
          </small>
        </small>
      </h1>
    </div>

    <Kamishibai data-item-id="4ff5873776992f0511d6" />

    <div class="devapp-container_content">
      <h2>!! Under development !!</h2>
      <p>
        Kamishibai is a under development library.<br />
        Because breaking changes may be born, please be careful when using.
      </p>
    </div>

    <div class="devapp-container_content">
      <h2>About</h2>
      <p>
        This is a library for embedding slides of Qiita which is a Japanese
        technical document sharing site.<br />
        <br />
        demo:
        <a
          href="https://potato4d.github.io/kamishibai-viewer/dist/0.1.0/demo.html"
          >https://potato4d.github.io/kamishibai-viewer/dist/0.1.0/demo.html</a
        >
      </p>
    </div>

    <div class="devapp-container_content">
      <h2>Usage</h2>
      <p>
        <small style="color: red">
          ※ As we are planning to publish to webcomponents.org, the URL may
          change!
        </small>
      </p>
      <p>1. Load runtime on script tag</p>
      <div>
        <pre>
          <code>&lt;script src="https://unpkg.com/vue@2.5.21/dist/vue.min.js"&gt;&lt;/script&gt;</code>
          <code>&lt;script src="https://potato4d.github.io/kamishibai/dist/0.1.0/kamishibai.min.js"&gt;&lt;/script&gt;</code>
        </pre>
      </div>
      <p>2. Write custom element tag for your HTML</p>
      <div>
        <pre>
          <code>&lt;kamishibai-viewer data-item-id="4ff5873776992f0511d6"&gt;&lt;/kamishibai-viewer&gt;</code>
        </pre>
      </div>
      <p>3. Done!</p>
    </div>

    <div class="devapp-container_content">
      <h2>LICENSE</h2>
      <p>
        MIT @ HANATANI Takuma(@potato4d)<br />
        email: mail@potato4d.me
      </p>
    </div>

    <div class="devapp-container_content">
      <div class="text-center">
        <small> &copy; 2018 HANATANI Takuma(@potato4d) </small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Kamishibai from './Kamishibai.vue'
import { sanitizeAllTags } from '@/utils/sanitizer'

export default Vue.extend({
  components: {
    Kamishibai
  },
  filters: {
    h(val: string) {
      return sanitizeAllTags(val)
    }
  }
})
</script>

<style lang="scss" scoped>
.devapp-container {
  max-width: 850px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
}

.devapp-container_content pre {
  background: #f1f3f4;
  padding-top: 12px;
  padding-left: 0;
  border-radius: 2px;
  text-align: left;
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
  font-size: 0.8em;
}

.text-center {
  text-align: center;
}
</style>
