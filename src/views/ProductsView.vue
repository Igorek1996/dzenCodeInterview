<template>
  <div class="products">
    <div class="products__row">
      <h1>Продукты / {{ PRODUCTS.length }}</h1>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <div v-if="PRODUCTS.length" class="products__list">
      <transition-group name="products__list-items">
        <product-item
          v-for="product in sortedProducts"
          :key="product.id"
          :product_data="product"
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
    sortedProducts() {
      return [...this.PRODUCTS].sort((a, b) => {
        if (this.selectedSort !== "") {
          return a[this.selectedSort.toLocaleLowerCase()].localeCompare(
            b[this.selectedSort].toLocaleLowerCase()
          );
        }
        return this.PRODUCTS;
      });
    },
    ...mapGetters(["PRODUCTS"]),
  },
};
</script>

<style lang="scss">
.products {
  &__list {
    overflow-x: auto;

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
