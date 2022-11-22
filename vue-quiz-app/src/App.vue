<template>
  <div class="container">
    <!-- <Transition name="route"> -->
    <RouterView />
    <!-- </Transition> -->
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import QuizzesView from "./views/QuizzesView.vue";
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.route-enter-active {
  transition: all 1s ease;
}
</style>
