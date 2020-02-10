import Vue from 'vue'
import App from './App.vue'
import Vue2PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/sass/index.sass'

Vue.config.productionTip = false

Vue.use(Vue2PerfectScrollbar, {
  name: 'scroll'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
