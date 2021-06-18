import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Audycja from "@/views/Audycja";
import SingleNews from "@/views/SingleNews";
import player from "@/views/player";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/audycja/:slug',
    name: 'Audycja',
    component: Audycja
  },
  {
    path: '/wiadomosci/:slug',
    name: 'SingleNews',
    component: SingleNews
  },
  {
    path: '/sluchaj',
    name: 'Player',
    component: player
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
