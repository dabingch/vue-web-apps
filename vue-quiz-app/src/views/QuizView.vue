<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />
    <!-- TransitionGroup for multiple components -->
    <div>
      <Transition name="fade">
        <Question
          v-if="!showResults"
          :question="quiz.questions[currentQuestionIndex]"
          @selectOption="onOptionSelected"
        />
        <Result
          v-else
          :quizQuestionLength="quiz.questions.length"
          :numberOfCorrectAnswers="numberOfCorrectAnswers"
        />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter-active {
  transition: all 5s ease;
}
.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: all 1s ease;
}
</style>

<script setup>
import Question from "../components/Question.vue";
import QuizHeader from "../components/QuizHeader.vue";
import Result from "../components/Result.vue";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import quizzes from "../data/quizzes.json";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizzes.find((quiz) => quiz.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

// 1 / 3
const questionStatus = computed(
  () => `${currentQuestionIndex.value} / ${quiz.questions.length}`
);
// 33%
const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
};
</script>
