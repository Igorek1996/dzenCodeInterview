<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style lang="scss">
.btn {
  cursor: pointer;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  background: teal;
  color: #ffffff;
  transition: 0.2s;
  line-height: 1;

  &:hover {
    background: rgba(teal, 0.5);
  }

  &__remove {
    background: red;

    &:hover {
      background: rgba(red, 0.5);
    }
  }
}
</style>
