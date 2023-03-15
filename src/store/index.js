import { createStore } from "vuex";
import { orders } from "../../tz/front-end-data.json";

export default createStore({
  state: {
    orders: orders,
  },
  mutations: {
    REMOVE_ORDER: (state, id) => {
      const index = state.orders.findIndex((item) => item.id === id);
      state.orders.splice(index, 1);
    },
  },
  actions: {
    REMOVE_ORDER({ commit }, productId, orderID) {
      commit("REMOVE_ORDER", productId, orderID);
    },
  },
  getters: {
    ORDERS(state) {
      return state.orders;
    },
  },
});
