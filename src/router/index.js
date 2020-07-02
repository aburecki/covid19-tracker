import Vue from 'vue'
import VueRouter from 'vue-router'
import CovidInforamtion from '../views/CovidInformation.vue'
import ChartComponent from '../components/ChartComponent.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/chart',
    name: 'Home',
    component: ChartComponent
  },
  {
    path: '/covid-info',
    name: 'test',
    component: CovidInforamtion
  },

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})

export default router
