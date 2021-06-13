import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Wall',
    component: () => import(/* webpackChunkName: "wall" */ '@/views/Wall.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/users',
    name: 'users',
    component: () =>
      import(/* webpackChunkName: "users" */ '@/views/Users.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/groups',
    name: 'groups',
    component: () =>
      import(/* webpackChunkName: "groups" */ '@/views/Groups.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/chats/:type/:id',
    name: 'Chats',
    component: () =>
      import(/* webpackChunkName: "chats" */ '@/views/Chats.vue'),
    meta: { requiresAuth: true },
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
