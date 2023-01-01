<script setup>
import { useTaskStore } from './stores/taskStore'
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import { ref } from 'vue'

const taskStore = useTaskStore()

const showFav = ref(false)

taskStore.getTasks()
</script>

<template>
	<main>
		<header>
			<img src="./assets/pinia-logo.svg" alt="pinia logo" />
			<h2>{{ taskStore.name }}</h2>
		</header>

		<div class="new-task-form">
			<TaskForm />
		</div>

		<nav class="filter">
			<button v-if="!showFav" @click="showFav = !showFav">
				Fav tasks
			</button>
			<button v-else @click="showFav = !showFav">All tasks</button>
		</nav>

		<div class="loading" v-if="taskStore.loading">Loading tasks...</div>

		<div v-else>
			<div class="task-list" v-if="!showFav">
				<p>You have {{ taskStore.totalCount }} tasks left to do</p>
				<div v-for="task in taskStore.tasks" :key="task.id">
					<TaskDetails :task="task" />
				</div>
			</div>
			<div class="task-list" v-else>
				<p>You have {{ taskStore.favCount }} fav tasks left to do</p>
				<div v-for="task in taskStore.favs" :key="task.id">
					<TaskDetails :task="task" />
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped></style>
