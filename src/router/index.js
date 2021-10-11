import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Month from '../components/Month.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/month/:id',
    name: 'Month',
    component: Month
  }
]

const router = new VueRouter({
  routes
})

export default router
