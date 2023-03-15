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
      <transition-group name="orders__list-items">
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
              Дата создания прихода: <strong>{{ getDate }}</strong>
            </p>
            <p>
              Сумма:
              <strong>
                {{ getPrice("UAH") }} /
                {{ getPrice("USD") }}
              </strong>
            </p>
          </div>
          <div class="orders__products-list">
            <order-product
              v-for="item in ourOrder.products"
              :key="item.id"
              :order_product="item"
            />
          </div>
        </div>
      </transition-group>
    </div>
    <div div v-else class="orders__message">
      <p>Список приходов пуст!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import OrderItem from "@/components/orders/OrderItem.vue";
import OrderProduct from "@/components/orders/OrderProduct.vue";

export default {
  name: "OrderView",
  components: {
    OrderItem,
    OrderProduct,
  },
  data() {
    return {
      ourOrder: {},
      isExpanded: false,
    };
  },
  computed: {
    getDate() {
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezone: "UTC",
      };
      let date = new Date(this.ourOrder.date);

      return (
        date.toLocaleString("ru", options) +
        "(" +
        date.toLocaleString("en", options) +
        ")"
      );
    },
    ...mapGetters(["ORDERS"]),
  },
  methods: {
    getPrice(currency) {
      let arr = [];
      let prices = this.ourOrder.products.map((product) => product.price);

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
    ...mapActions(["REMOVE_ORDER", "REMOVE_PRODUCT_FROM_ORDER"]),
  },
  mounted() {},
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
      transition: all 0.1s ease;
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
    gap: 0 20px;
  }

  &__products {
    flex: 0 0 50%;
    padding: 10px;
    border: 2px solid $color_main;

    &-close {
      text-align: right;
    }

    &-list {
      border-top: 2px solid $color_main;
      padding-top: 10px;
      margin-top: 10px;
    }
  }
}
</style>
