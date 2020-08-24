import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import chat from '../views/chat.vue' //ここでviewを指定//
import help from '../views/help.vue' 
import favorite from '../views/favorite.vue' 
import favoriteSHUFFLE from '../components/favoriteSHUFFLE.vue' 
import mypage from '../views/mypage.vue' 
import shopdetail from '../views/shopdetail.vue' 
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/chat', ///ここでアドレスを定義する//
    name: 'chat',
    component: chat
  },
  {
    path: '/mypage', ///ここでアドレスを定義する//
    name: 'mypage',
    component: mypage
  },
  {
    path: '/favorite', ///ここでアドレスを定義する//
    name: 'favorite',
    component: favorite
  },
  {
    path: '/help', ///ここでアドレスを定義する//
    name: 'help',
    component: help
  },
  {
    path: '/shopdetail', ///ここでアドレスを定義する//
    name: 'shopdetail',
    component: shopdetail
  },
  {
    path: '/favoriteSHUFFLE', ///ここでアドレスを定義する//
    name: 'favoriteSHUFFLE',
    component: favoriteSHUFFLE
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router