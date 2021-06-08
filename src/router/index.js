import { createRouter, createWebHistory } from 'vue-router'
import Wall from '@/views/Wall.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Wall',
    component: Wall,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
