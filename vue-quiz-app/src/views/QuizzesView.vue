<template>
  <div>
    <header>
      <h1>Quizzes</h1>
      <input type="text" v-model.trim="search" placeholder="Search..." />
    </header>
    <div class="options-container">
      <TransitionGroup appear @before-enter="beforeEnter" @enter="enter">
        <Card
          v-for="(quiz, index) in quizzes"
          :key="quiz.id"
          :quiz="quiz"
          :data-index="index"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import q from "../data/quizzes.json";
import { ref, watch } from "vue";
import Card from "../components/Card.vue";
import gsap from "gsap";

const quizzes = ref(q);
const search = ref("");

watch(search, () => {
  quizzes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(-100px)";
};

const enter = (el) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: el.dataset.index * 0.3,
  });
};
</script>

<style scoped>
header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128, 128, 128, 0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}
</style>
