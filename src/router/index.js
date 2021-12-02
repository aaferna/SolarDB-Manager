import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ServerHome from '../views/Server.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/server/:id',
    name: 'ServerHome',
    component: ServerHome
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
