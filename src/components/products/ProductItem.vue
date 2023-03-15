<template>
  <div class="product">
    <p>
      Название продукта: <strong>{{ product_data.title }}</strong>
    </p>
    <p>
      Тип продукта: <strong>{{ product_data.type }}</strong>
    </p>
    <p>
      Гарантия действительна <strong>{{ getGuarantee }}</strong>
    </p>
    <p>
      Цена: <strong>{{ getPrice("UAH") }}</strong> /
      <strong>{{ getPrice("USD") }}</strong>
    </p>
    <p>
      Название прихода: <strong>{{ order.title }}</strong>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
    order: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    getGuarantee() {
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timezone: "UTC",
      };
      let start = new Date(this.product_data.guarantee.start);
      let end = new Date(this.product_data.guarantee.end);

      return (
        start.toLocaleString("ru", options) +
        " - " +
        end.toLocaleString("ru", options) +
        "(" +
        start.toLocaleString("en", options) +
        " - " +
        end.toLocaleString("en", options) +
        ")"
      );
    },
    ...mapGetters(["ORDERS"]),
  },
  methods: {
    getPrice(currency) {
      let price;
      this.product_data.price.map((item) => {
        if (item.symbol === currency) {
          price = item.value;
        }
      });

      let parts = price.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".") + " " + currency;
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.product {
  padding: 10px;
  border-radius: 10px;
  border: 1px solid $color_main;
  gap: 20px;
}
</style>
