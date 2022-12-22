import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
	state: () => ({
		todoList: [],
		id: 0,
	}),
	actions: {
		addTodo(item) {
			this.todoList.push({
				id: this.id++,
				item,
				complete: false,
			});
		},
		deleteTodo(item) {
			this.todoList.filter((t) => t.id !== item.id);
		},
	},
});
