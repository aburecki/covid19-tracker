import Vue from 'vue'
import App from './App.vue'
import VueAxios from 'vue-axios' 
import axios from 'axios'
import moment from 'moment'
import VueApexCharts from 'vue-apexcharts'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.moment = moment


Vue.component('apexchart', VueApexCharts)
Vue.use(VueAxios, axios);
Vue.use(VueApexCharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
