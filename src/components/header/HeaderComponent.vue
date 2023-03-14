<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <router-link to="/" class="header__logo">
          <img src="../../assets/logo.png" alt="logo" />
        </router-link>
        <my-input
          type="search"
          placeholder="Поиск"
          v-model="PRODUCTS.title"
        ></my-input>
        <date-component />
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import DateComponent from "@/components/header/DateComponent.vue";
export default {
  components: {
    DateComponent,
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
};
</script>

<style lang="scss">
.header {
  box-shadow: 0 10px 20px rgba($color: #000000, $alpha: 0.5);
  padding: 10px 0;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0 50px;
  }

  &__logo {
    max-width: 50px;
  }
}
</style>
