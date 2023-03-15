<template>
  <header class="header">
    <div class="container">
      <div class="header__container">
        <router-link to="/" class="header__logo">
          <img src="../../assets/logo.png" alt="logo" />
        </router-link>
        <my-input type="search" placeholder="Поиск"></my-input>
        <date-component />
        <div>Колличество активных сессий: {{ numTabs }}</div>
      </div>
    </div>
  </header>
</template>

<script>
import io from "socket.io-client";
import DateComponent from "@/components/header/DateComponent.vue";
const socket = io("http://localhost:3000");
export default {
  components: {
    DateComponent,
  },
  data() {
    return {
      numTabs: 0,
    };
  },
  created() {
    socket.on("connect", () => {
      this.numTabs++;
    });
    socket.on("disconnect", () => {
      this.numTabs--;
    });
    socket.on("numTabsUpdated", (numTabs) => {
      this.numTabs = numTabs;
    });
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
