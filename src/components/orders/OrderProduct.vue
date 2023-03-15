<template>
  <div class="order-product">
    <div class="order-product__img">
      <img
        :src="require(`@/assets/images/${order_product.photo}`)"
        :alt="order_product.title"
      />
    </div>
    <div class="order-product__title">
      {{ order_product.title }}
    </div>
    <div class="order-product__price">
      <strong>{{ getPrice("UAH") }}</strong> /
      <strong>{{ getPrice("USD") }}</strong>
    </div>
    <my-button class="btn__remove"> Удалить продукт </my-button>
  </div>
</template>

<script>
export default {
  props: {
    order_product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    getPrice(currency) {
      let price;
      this.order_product.price.map((item) => {
        if (item.symbol === currency) {
          price = item.value;
        }
      });

      let parts = price.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".") + " " + currency;
    },
  },
};
</script>

<style lang="scss">
.order-product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  &:not(:last-child) {
    border-bottom: 2px solid $color_main;
  }
  &__img {
    width: 100px;
  }
  &__title {
  }
}
</style>
