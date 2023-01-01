import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
	state: () => ({
		tasks: [
			{ id: 1, title: 'Task 1', isFav: false },
			{ id: 2, title: 'Task 2', isFav: true },
		],
		name: 'Pinia Tasks',
	}),
	getters: {
		favs() {
			return this.tasks.filter((t) => t.isFav)
		},
		favCount() {
			return this.tasks.reduce((p, c) => {
				return c.isFav ? p + 1 : p
			}, 0)
		},
		// arrow function
		totalCount: (state) => state.tasks.length,
	},
})
