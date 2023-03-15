<template>
  <div class="products">
    <div class="products__row">
      <h1>Продукты / {{ sortedProducts.length }}</h1>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <div v-if="sortedProducts.length" class="products__list">
      <transition-group name="products__list-items">
        <product-item
          v-for="product in sortedProducts"
          :key="product.id"
          :product_data="product"
          :order="getOrder"
        />
      </transition-group>
    </div>
    <div v-else class="products__message">Список продуктов пуст!</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from "@/components/products/ProductItem.vue";

export default {
  name: "ProductsView",
  components: {
    ProductItem,
  },
  data() {
    return {
      selectedSort: "",
      sortOptions: [
        { value: "type", name: "По типу" },
        { value: "title", name: "По названию" },
      ],
    };
  },
  computed: {
    getOrder() {
      const order = this.ORDERS.find(
        (order) => order.id == this.$route.params.orderId
      );
      return order;
    },
    sortedProducts() {
      return [...this.getOrder.products].sort((a, b) => {
        if (this.selectedSort !== "") {
          return a[this.selectedSort.toLocaleLowerCase()].localeCompare(
            b[this.selectedSort].toLocaleLowerCase()
          );
        }
      });
    },
    ...mapGetters(["ORDERS"]),
  },
};
</script>

<style lang="scss">
.products {
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    &-items-item {
      display: inline-block;
      margin-right: 10px;
    }
    &-items-enter-active,
    &-items-leave-active {
      transition: all 1s ease;
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
}
</style>
