<template>
  <div style="display: inline-block;">
    <button class="btn">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
	.btn{
		background-color: tomato;
		color: #fff;
		border: none;
		outline: none;
		cursor: pointer;
		font-size: 14px;
		padding: 15px;
		border-radius: 4px;
		transition: .3s;
		display: inline-block;
	}
	.btn:hover {
		opacity: 0.8;
	}
</style>