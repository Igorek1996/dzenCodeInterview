<template>
  <div class="app">
    <header-component />
    <div class="wrapper">
      <aside class="aside">
        <div class="profile">
          <img src="./assets/images/profile.jpg" alt="profile" />
        </div>
        <nav class="nav">
          <router-link class="nav__link" to="/">Приход</router-link>
          <router-link class="nav__link" to="/groups">Группы</router-link>
          <router-link class="nav__link" to="/products">Продукты</router-link>
          <router-link class="nav__link" to="/users">Пользователи</router-link>
          <router-link class="nav__link" to="/settings">Настройки</router-link>
        </nav>
      </aside>
      <main class="main">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  flex: 1 1 auto;
}

.main {
  flex: 0 1 100%;
  padding: 20px;
}

.aside {
  box-shadow: 0 10px 20px rgba(#000000, 0.5);
  padding: 100px 40px;
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &__link {
    border-bottom: 2px solid transparent;
    padding-bottom: 5px;
    &:hover {
      border-bottom: 2px solid teal;
    }

    &.router-link-exact-active {
      border-bottom: 2px solid teal;
    }
  }
}

.profile {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-bottom: 50px;
}
</style>
