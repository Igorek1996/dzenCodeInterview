import { createRouter, createWebHistory } from "vue-router";
import ArrivalView from "../views/ArrivalView.vue";

const routes = [
  {
    path: "/",
    name: "ArrivalView",
    component: ArrivalView,
  },
  {
    path: "/groups",
    name: "groups",
    component: () => import("../views/GroupsView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UsersView.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/SettingsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
