import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Chat from '../views/Chat.vue' //ここでviewを指定//
import Help from '../views/Help.vue' 
import Likes from '../views/Likes.vue' 
import LikesSlider from '../components/LikesSlider.vue' 
import MyPage from '../views/MyPage.vue' 
import ShopAbout from '../views/ShopAbout.vue' 
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
    path: '/Chat', ///ここでアドレスを定義する//
    name: 'Chat',
    component: Chat
  },
  {
    path: '/MyPage', ///ここでアドレスを定義する//
    name: 'MyPage',
    component: MyPage
  },
  {
    path: '/likes', ///ここでアドレスを定義する//
    name: 'Likes',
    component: Likes
  },
  {
    path: '/help', ///ここでアドレスを定義する//
    name: 'Help',
    component: Help
  },
  {
    path: '/ShopAbout', ///ここでアドレスを定義する//
    name: 'ShopAbout',
    component: ShopAbout
  },
  {
    path: '/LikesSlider', ///ここでアドレスを定義する//
    name: 'LikesSlider',
    component: LikesSlider
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router