<template>
  <div class="app">
    <header-component />
    <main class="main">
      <aside class="aside">
        <div class="profile">
          <img src="./assets/images/profile.jpg" alt="profile">
        </div>
        <nav class="nav">
          <router-link class="nav__link active" to="/">Приход</router-link>
          <router-link class="nav__link" to="/groups">Группы</router-link>
          <router-link class="nav__link" to="/products">Продукты</router-link>
          <router-link class="nav__link" to="/users">Пользователи</router-link>
          <router-link class="nav__link" to="/settings">Настройки</router-link>
        </nav>
      </aside>
      <router-view />
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss">
.main {
  display: flex;
  flex: 1 1 auto;
}

.aside {
  box-shadow: 0 10px 20px rgba($color: #000000, $alpha: 0.5);
  padding: 100px 40px;
}

.nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &__link {
    padding-bottom: 5px;

    &.active {
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
