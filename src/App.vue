<template>
  <header-component />
  <nav>
    <router-link to="/">Приход</router-link>
    <router-link to="/groups">Группы</router-link>
    <router-link to="/products">Продукты</router-link>
    <router-link to="/users">Пользователи</router-link>
    <router-link to="/settings">Настройки</router-link>
  </nav>
  <router-view />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
export default {
  components: {
    HeaderComponent
  }
}
</script>

<style lang="scss"></style>
