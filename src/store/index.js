import { createStore } from "vuex";
import { orders, products } from "../../tz/front-end-data.json";

export default createStore({
  state: {
    products: products,
    orders: orders,
  },
  mutations: {
    REMOVE_ORDER: (state, id) => {
      const index = state.orders.findIndex((item) => item.id === id);
      state.orders.splice(index, 1);
    },
  },
  actions: {
    REMOVE_ORDER({ commit }, id) {
      commit("REMOVE_ORDER", id);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    ORDERS(state) {
      return state.orders;
    },
  },
});
