import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'common/elementCms'
import 'normalize.css'
import './assets/css/index.less'
import { setupStore } from './store'

Vue.config.productionTip = false
Vue.use(element)



new Vue({
  router,
  store,
  created() {
    setupStore()
  },
  render: h => h(App)
}).$mount('#app')
