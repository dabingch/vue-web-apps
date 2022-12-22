<template>
  <div>
    <form @submit.prevent="addItemAndClear(todo)">
      <input type="text" v-model="todo">
      <button>Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '../stores/todoList';

const todo = ref('');

const store = useTodoListStore()

const addItemAndClear = (item) => {
  if (item.length === 0) {
    return
  }

  store.addTodo(item)
  todo.value = ''
}
</script>

<style scoped>

</style>