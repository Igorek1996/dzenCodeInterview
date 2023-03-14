import { createStore } from "vuex";
import { orders, products } from "../../tz/front-end-data.json";

export default createStore({
  state: {
    products: products,
    orders: orders,
  },
  mutations: {},
  actions: {},
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    ORDERS(state) {
      return state.orders;
    },
  },
});
