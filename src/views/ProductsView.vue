<template>
    <div class="products">

        <div class="products__row">

            <h1>Продукты / {{ PRODUCTS.length }}</h1>
            <my-button>
                Elfkbnm
            </my-button>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <div class="products__wrapper">
            <product-item v-for="product in sortedProducts" :key="product.id" :product_data="product" />
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
import ProductItem from '@/components/products/ProductItem.vue';

export default {
    name: 'ProductsView',
    components: {
        ProductItem,
    },
    data() {
        return {
            selectedSort: '',
            sortOptions: [
                { value: "type", name: 'По типу' },
                { value: "title", name: 'По названию' }
            ]
        }
    },
    computed: {
        sortedProducts() {
            return [...this.PRODUCTS].sort((a, b) => {
                if (this.selectedSort !== '') {
                    return a[this.selectedSort.toLocaleLowerCase()].localeCompare(b[this.selectedSort].toLocaleLowerCase());
                }
                return this.PRODUCTS;
            })
        },
        ...mapGetters([
            "PRODUCTS",
        ]),
    }
}
</script>


<style lang="scss">
.products {

    &__wrapper {
        overflow-x: auto;
    }

    &__row {
        display: flex;
        align-items: center;
        gap: 0 20px;
    }
}
</style>