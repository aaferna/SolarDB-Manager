import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ServerHome from '../views/Server.vue'
import AddServer from '../views/AddServer.vue'
import DataView from '../views/DataView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/server/:server',
    name: 'ServerHome',
    component: ServerHome
  },
  {
    path: '/server/:server/:collection/:index',
    name: 'DataView',
    component: DataView
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
