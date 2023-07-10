<template>
  <input
    class="input"
    type="text"
    :value="modelValue"
    @input="updateInput"
  />
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: [String, Number]
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>

<style  scoped>
.input {
  width: 100%;
  border: solid 2px tomato;
  padding: 10px;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
}
</style>