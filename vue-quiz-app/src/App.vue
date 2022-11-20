<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input type="text" placeholder="Search...">
    </header>

    <div class="options-container">
      <div class="card">
        <img src="" alt="">
        <div class="card-text">
          <h2>Math</h2>
          <p>15 questions</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { RouterView } from "vue-router"
  import QuizzesView from "./views/QuizzesView.vue"
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>