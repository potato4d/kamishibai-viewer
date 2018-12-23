import Vue from 'vue'
import DevApp from './DevApp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(DevApp)
}).$mount('#app')
