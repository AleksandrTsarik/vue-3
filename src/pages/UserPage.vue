<template>
	<div >
		<h1>Страница с постами</h1>
		<div class="app__btns">
			<my-button
				@click="showDialog"
				style="margin: 15px 0;"
			>
			Создать пользователя
			</my-button>
			<my-select 
				v-model="selectedSort"
			/>
		</div>
		
		<my-dialog v-model:show="dialogVisible">
			<post-form
			@crate="creatPost"
		/>
		</my-dialog>
		
		<post-list
			:posts="posts"
			@remove="removePost"
			v-if="!isPostsLoading"
		/>
		<!-- <div v-esle>Идет загрузка.....</div> -->
	</div>
</template>
	
<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue'
import MyButton from '@/components/ui/MyButton.vue';
import axios from 'axios';
import MyButtonVue from '@/components/ui/MyButton.vue';


export default {
	components: {
		PostForm, PostList
	},
	data() {
		return {
			posts: [],
			dialogVisible: false,
			isPostsLoading: false,
			selectedSort: '',
		}
	},
	methods: {
		creatPost(post) {
			this.posts.push(post);
			this.dialogVisible = false;
		},
		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},
		showDialog() {
			this.dialogVisible = true
		},
		async fetchPosts() {
			try {
				this.isPostsLoading = true;
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
				this.posts = response.data
			} catch(e) {
				alert('Ошибка')
			} finally {
				this.isPostsLoading = false
			}
		},
	},
	mounted() {
		this.fetchPosts();
	},

}
</script>

<style>
	
	.app__btns {
		display: flex;
		justify-content: space-between;
	}
	
</style>
