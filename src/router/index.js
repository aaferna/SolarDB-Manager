import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ServerHome from '../views/Server.vue'
import AddServer from '../views/AddServer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/server/view/:id',
    name: 'ServerHome',
    component: ServerHome
  },
  {
    path: '/server/add',
    name: 'AddServer',
    component: AddServer
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
