<template>
	<div class="post">
    <div>
      <div><strong>Название:</strong> {{ post.title }}</div>
		  <div><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__buttons">
      <my-button
        @click="$emit('remove', post)"
      >Удалить</my-button>
    </div>
	</div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      }
    }
  }
</script>

<style scoped>
  .post {
		padding: 15px;
		border: solid 3px tomato;
		margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
		}
	.post:last-child {
		margin-bottom: 0;
	}
</style>