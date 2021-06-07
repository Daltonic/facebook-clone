import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Wall",
    component: () =>
      import(/* webpackChunkName: "wall" */ "../views/Wall.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
