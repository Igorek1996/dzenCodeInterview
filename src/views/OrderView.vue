<template>
  <div class="orders">
    <div class="orders__row">
      <h1>Приходы / {{ ORDERS.length }}</h1>
    </div>
    <div class="orders__wrapper" v-if="ORDERS.length">
      <div class="orders__list">
        <transition-group name="orders__list-items">
          <order-item
            v-for="order in ORDERS"
            :key="order.id"
            :order_data="order"
            @showOrderDetails="showDetails"
            :class="{ order_expanded: isExpanded }"
            @remove="removeOrder"
          />
        </transition-group>
      </div>
      <div v-if="Object.keys(ourOrder).length !== 0" class="orders__products">
        <div class="orders__products-close">
          <my-button @click="closeDetails">
            <span class="material-icons"> close </span>
          </my-button>
        </div>
        <div class="orders__products-info">
          <p>
            Название заказа: <strong>{{ ourOrder.title }}</strong>
          </p>
          <p>
            Колличество продуктов:
            <strong>{{ ourOrder.products.length }}</strong>
          </p>
          <p>
            Дата создания прихода: <strong>{{ ourOrder.date }}</strong>
          </p>
          <p>
            Сумма:
            <strong>
              {{ getPrice("UAH") }} /
              {{ getPrice("USD") }}
            </strong>
          </p>
        </div>
      </div>
    </div>
    <div div v-else class="orders__message">
      <p>Список приходов пуст!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import OrderItem from "@/components/orders/OrderItem.vue";

export default {
  name: "OrderView",
  components: {
    OrderItem,
  },
  data() {
    return {
      ourOrder: {},
      isExpanded: false,
    };
  },
  computed: {
    ...mapGetters(["ORDERS"]),
  },
  methods: {
    getPrice(currency) {
      let arr = [];
      let prices = this.ourOrder.products.map((product) => {
        return product.price;
      });

      prices.flat(2).forEach((item) => {
        if (item.symbol === currency) {
          arr.push(item.value);
        }
      });

      arr = arr.reduce((accum, item) => accum + item, 0);

      let parts = arr.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".") + " " + currency;
    },
    showDetails(order_data) {
      this.isExpanded = true;
      this.ourOrder = order_data;
    },
    closeDetails() {
      this.isExpanded = false;
      this.ourOrder = {};
    },
    removeOrder(id) {
      this.REMOVE_ORDER(id);
      this.closeDetails();
    },
    ...mapActions(["REMOVE_ORDER"]),
  },
};
</script>

<style lang="scss">
.orders {
  &__wrapper {
    display: flex;
    gap: 20px;
  }

  &__list {
    flex: 0 1 100%;
    &-items-item {
      display: inline-block;
      margin-right: 10px;
    }
    &-items-enter-active,
    &-items-leave-active {
      transition: all 0.3s ease;
    }
    &-items-enter-from,
    &-items-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
    &-items-move {
      transition: transform 0.8s ease;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 0 20px;
  }

  &__products {
    flex: 0 0 50%;
    padding: 10px;
    border: 2px solid teal;

    &-close {
      text-align: right;
    }
  }
}
</style>
