import Vue from 'vue'
import DevApp from './DevApp.vue'

Vue.config.productionTip = false
Vue.config.errorHandler = () => {

}

new Vue({
  render: h => h(DevApp)
}).$mount('#app')
