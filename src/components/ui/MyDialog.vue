<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-dialog',
    props: {
      show: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      hideDialog() {
        this.$emit('update:show', false)
      }
    },
  }
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  background-color: rgba(24, 22, 22, 0.3);
  display: flex;
}
.dialog__content {
  margin: auto;
  background: #fff;
  border-radius: 10px;
  width: 80vh;
  width: 50%;
  padding: 3% 3%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>