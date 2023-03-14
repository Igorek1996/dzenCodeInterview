<template>
  <div class="order">
    <div class="order__info">
      <div class="order__field order__name">
        {{ order_data.title }}
      </div>
      <div class="order__field order__arrival">
        {{ order_data.date }}
      </div>
      <div class="order__field order__description">
        {{ order_data.description }}
      </div>
    </div>
    <div class="order__buttons">
      <my-button @click="showOrderDetails"> Показать детали </my-button>
      <my-button @click="openDialog" class="btn__remove">
        Удалить приход
      </my-button>
    </div>
    <my-dialog
      :isShow="isDialogVisible"
      cancel="Отменить"
      actionText="Удалить"
      @close="closeDialog"
      @action="removeOrder"
    >
      <p class="order__dialog-title">
        Вы уверенны, что хотите удалить приход №
        <strong>{{ order_data.title }}</strong
        >?
      </p>
    </my-dialog>
  </div>
</template>

<script>
import MyButton from "../UI/MyButton.vue";

export default {
  props: {
    order_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isDialogVisible: false,
    };
  },
  computed: {},
  methods: {
    showOrderDetails() {
      this.$emit("showOrderDetails", this.order_data);
    },
    openDialog() {
      this.isDialogVisible = true;
    },
    closeDialog() {
      this.isDialogVisible = false;
    },
    removeOrder() {
      this.$emit("remove", this.order_data.id);
    },
  },
  mounted() {},
  components: { MyButton },
};
</script>

<style lang="scss">
.order {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid teal;
  gap: 20px;

  &_expanded {
    display: block;

    .order {
      &__info {
        margin-bottom: 20px;
      }

      &__buttons {
        justify-content: flex-start;
      }
    }
  }

  &__field {
    white-space: nowrap;
  }

  &__info {
    display: flex;
    gap: 0 10px;
  }

  &__buttons {
    display: flex;
    justify-content: center;
    gap: 0 10px;
    margin-left: auto;
  }

  &__dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);

    &-content {
      width: 500px;
      background: #fff;
      padding: 10px;
      border: 2px solid teal;
      border-radius: 10px;
    }

    &-title {
      text-align: center;
      margin-bottom: 20px;
    }

    &-wrapper {
      margin-top: 20px;
    }

    &-close {
      text-align: right;
    }
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
}
</style>
