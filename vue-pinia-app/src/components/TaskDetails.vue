<template>
	<div class="task">
		<h3>{{ task.title }}</h3>
		<div class="icons">
			<i class="material-icons" @click="deleteTask(task.id)">delete</i>
			<i
				class="material-icons"
				@click="toggleFav(task.id)"
				:class="{ active: task.isFav }"
				>favorite</i
			>
		</div>
	</div>
</template>

<script setup>
import { useTaskStore } from '../stores/taskStore'

const taskStore = useTaskStore()

const { deleteTask, toggleFav } = taskStore

const { task } = defineProps(['task'])
</script>

<style lang="scss" scoped></style>
