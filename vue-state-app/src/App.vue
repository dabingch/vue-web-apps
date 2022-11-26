<script setup>
import { ref, reactive } from 'vue';

// const red = ref(0)
// const blue = ref(0)
// const green = ref(0)

// const color = ref({
//   red: 0,
//   blue: 0,
//   green: 0
// })

// Only takes objects
const color = reactive({
  red: 0,
  blue: 0,
  green: 0
})
</script>

<template>
  <main :style="{backgroundColor: `rgb(${color.red},${color.green},${color.blue})`}">
    <div>
      <input type="number" v-model="color.red" placeholder="red">
      <input type="number" v-model="color.blue" placeholder="blue">
      <input type="number" v-model="color.green" placeholder="green">
    </div>
  </main>
</template>

<style scoped>
main {
  /* background-color: rgb(122, 50, 255); */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  display: flex;
  flex-direction: column;
}
</style>
