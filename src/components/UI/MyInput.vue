<template>
    <input class="input" :type="my_type" @input="updateInput" :placeholder="my_placeholder" :value="modelValue">
</template>

<script>

export default {
    name: 'my-input',
    props: {
        my_placeholder: {
            type: String,
            default: 'Enter some text'
        },
        my_type: {
            type: String,
            default: 'text'
        },
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value)
        }
    }
}
</script>

<style lang="scss">
.input {
    width: 100%;
    border: 2px solid teal;
    padding: 10px;
}
</style>