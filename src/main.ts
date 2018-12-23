import Vue from 'vue'
const { default: wrap } = require('@vue/web-component-wrapper')
import Kamishibai from './Kamishibai.vue'

window.customElements.define('kamishibai-viewer', wrap(Vue, Kamishibai))
