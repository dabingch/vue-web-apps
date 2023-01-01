import { defineStore } from 'pinia'

export const useTaskStore = defindStore('task', {
	state: () => ({
		tasks: [
			{ id: 1, title: 'Task 1', isFav: false },
			{ id: 2, title: 'Task 2', isFav: false },
		],
	}),
})
