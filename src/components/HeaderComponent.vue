<template>
    <header class="header">
        <div class="container">
            <div class="header__container">
                <router-link to="/" class="header__logo">
                    <img src="../assets/logo.png" alt="logo">
                </router-link>
                <search-component />
                <date-component />
            </div>
        </div>
    </header>
</template>

<script>
import SearchComponent from '@/components/SearchComponent.vue';
import DateComponent from '@/components/DateComponent.vue';
export default {
    components: {
        SearchComponent,
        DateComponent
    }
}
</script>

<style lang="scss">
.header {
    box-shadow: 0 10px 20px rgba($color: #000000, $alpha: 0.5);

    &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__logo {
        max-width: 50px;
    }
}
</style>