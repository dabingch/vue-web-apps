<template>
  <div>
    <QuizHeader
      :questionStatus="questionStatus"
      :barPercentage="barPercentage"
    />

    <div>
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
    </div>
  </div>
</template>

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
