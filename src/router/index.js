import Vue from 'vue'
import VueRouter from 'vue-router'
import CovidInforamtion from '../views/CovidInformation.vue'
import ChartComponent from '../components/ChartComponent.vue'
import Faq from '../components/Faq.vue'

Vue.use(VueRouter)

  const routes = [
     {
       path: '/',
       name: 'FaqComponent',
       component: Faq
     },
  {
    path: '/chart',
    name: 'ChartComponent',
    component: ChartComponent
  },
  {
    path: '/covid-info',
    name: 'CovidInforamtion',
    component: CovidInforamtion
  },

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})

export default router
