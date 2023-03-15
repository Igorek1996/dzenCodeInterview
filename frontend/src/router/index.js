import { createRouter, createWebHistory } from "vue-router";
import OrderView from "../views/OrderView.vue";

const routes = [
  {
    path: "/",
    name: "settings",
    component: () => import("../views/SettingsView.vue"),
  },
  {
    path: "/orders",
    name: "OrderView",
    component: OrderView,
  },
  {
    path: "/groups",
    name: "groups",
    component: () => import("../views/GroupsView.vue"),
  },
  {
    path: "/order/:orderId",
    name: "order",
    component: () => import("../views/ProductsView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UsersView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
