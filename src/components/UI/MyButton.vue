<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style lang="scss">
.btn {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    padding: 10px 15px;
    background: teal;
    color: #ffffff;
    transition: .2s;

    &:hover {
        background: rgba(0, 128, 128, 0.836);
    }
}
</style>