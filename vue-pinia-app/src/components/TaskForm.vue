<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" v-model="newTask" placeholder="Add new task" />
		<button>Add</button>
	</form>
</template>

<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()
const newTask = ref('')

const handleSubmit = () => {
	if (newTask.value) {
		taskStore.addTask({
			title: newTask.value,
			isFav: false,
			id: Math.floor(Math.random() * 10000),
		})

		newTask.value = ''
	}
}
</script>

<style lang="scss" scoped></style>
