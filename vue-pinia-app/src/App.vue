<script setup>
import { useTaskStore } from './stores/taskStore'
import TaskDetails from './components/TaskDetails.vue'

const taskStore = useTaskStore()
</script>

<template>
	<main>
		<header>
			<img src="./assets/pinia-logo.svg" alt="pinia logo" />
			<h2>{{ taskStore.name }}</h2>
		</header>

		<div class="task-list">
			<div v-for="task in taskStore.tasks" :key="task.id">
				<TaskDetails :task="task" />
			</div>
		</div>
	</main>
</template>

<style scoped></style>
