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
    meta: {layout: 'main'},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about1',
    name: 'about1',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/test/About1.vue')
  },
  {
    path: '/about2',
    name: 'about2',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/test/About2.vue')
  },
  {
    path: '/adventure',
    name: 'adventure',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Adventure.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
