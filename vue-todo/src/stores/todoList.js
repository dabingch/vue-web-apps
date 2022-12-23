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
				completed: false,
			});
		},
		deleteTodo(itemId) {
			this.todoList = this.todoList.filter((t) => t.id !== itemId);
			// console.log(this.todoList);
			// console.log("delete todo");
		},
		toggleCompleted(id) {
			const todo = this.todoList.find((t) => t.id === id);
			if (todo) {
				todo.completed = !todo.completed;
				// console.log("todo complete");
			}
		},
	},
});
