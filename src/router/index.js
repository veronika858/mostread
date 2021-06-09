import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/24h.vue";

const routes = [
  {
    path: "/",
    name: "24h",
    component: Home,
  },
  {
    path: "/3d",
    name: "3d",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "3d" */ "../views/3d.vue"),
  },
  {
    path: "/7d",
    name: "7d",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
        import(/* webpackChunkName: "7d" */ "../views/7d.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
