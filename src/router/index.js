import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about1',
    name: 'about1',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/About1.vue')
  },
  {
    path: '/about2',
    name: 'about2',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/About2.vue')
  },
  {
    path: '/about3',
    name: 'about3',
    component: () => import(/* webpackChunkName: "about" */ '../views/test/About3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
