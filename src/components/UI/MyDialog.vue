<template>
  <div v-if="isShow" class="order__dialog" @click.stop="closeDialog">
    <div @click.stop class="order__dialog-content">
      <div class="order__dialog-close">
        <my-button @click="closeDialog">
          <span class="material-icons"> close </span>
        </my-button>
      </div>
      <div class="order__dialog-wrapper">
        <slot></slot>
        <div class="order__buttons">
          <my-button @click="closeDialog">
            {{ cancel }}
          </my-button>
          <my-button @click="dialogAction" class="btn__remove">
            {{ actionText }}
          </my-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-dialog",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    cancel: {
      type: String,
      default: "Отменить",
    },
    actionText: {
      type: String,
      default: "Выполнить",
    },
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    dialogAction() {
      this.$emit("action");
    },
  },
};
</script>

<style lang="scss"></style>
