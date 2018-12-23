import Vue from 'vue'
const { default: wrap } = require('@vue/web-component-wrapper')
const { default: Kamishibai } = require('./Kamishibai.vue?shadow')

window.customElements.define('kamishibai-viewer', wrap(Vue, Kamishibai))
