<template>
	<form @submit.prevent>
			<h4>Создание поста</h4>
			<my-input 
				v-model="post.title"
				type="text"
				placeholder="Название"
			/>
			<my-input
				v-model="post.body"
				type="text"
				placeholder="Описание"
			/>
			<my-button @click="creatPost" style="align-self: flex-end;" >Создать</my-button>
		</form>
</template>

<script>
	export default {
		data() {
			return {
				post: {
					title: '',
					body: '',
				}
			}
		},
		methods: {
			creatPost() {
				this.post.id = Date.now(),
				this.$emit('crate', this.post)
				this.post = {
					title: '',
					bosy: '',
				}
				this.title = '';
				this.body = '';
			}
		}
	}
</script>

<style scoped>
	form {
		display: flex;
		flex-direction: column;
	}
</style>