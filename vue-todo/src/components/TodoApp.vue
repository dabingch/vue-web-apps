<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<script setup>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'
</script>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vh;
  background-color: #f7f9fc;
}
</style>