import Vue from 'vue'
import App from './App.vue'
import Flutterwave from 'flutterwave-vue-v3'

Vue.use(Flutterwave, {publicKey: ''})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
