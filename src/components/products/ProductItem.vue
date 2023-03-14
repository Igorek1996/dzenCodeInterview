<template>
    <div class="product">
        <div class="product__field product__name">
            {{ product_data.title }}
        </div>
        <div class="product__field product__type">
            {{ product_data.type }}
        </div>
        <div class="product__field product__guarantee">
            {{ product_data.guarantee }}
        </div>
        <div class="product__field product__price">
            {{ product_data.price }}
        </div>
        <div class="product__field product__arrival">
            {{ product_data.date }}
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "e-catalog-item",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        },
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            "PRODUCTS",
        ]),
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style lang="scss">
.product {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid teal;
    gap: 20px;

    &__field {
        white-space: nowrap;
    }

    &:not(:last-child) {
        margin-bottom: 15px;
    }
}
</style>