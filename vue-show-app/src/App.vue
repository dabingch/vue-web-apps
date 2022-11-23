<script setup>
import BreakingBadCardsSuspence from "./components/BreakingBadCardsSuspence.vue";
import RickMortyCards from "./components/RickMortyCards.vue";
import Hero from "./components/Hero.vue";
import { ref } from "vue";

const isBreakingBad = ref(true);
</script>

<template>
  <main>
    <Hero
      :isBreakingBad="isBreakingBad"
      @selectShow="isBreakingBad = !isBreakingBad"
    />
    <KeepAlive>
      <Component
        :is="isBreakingBad ? BreakingBadCardsSuspence : RickMortyCards"
      />
    </KeepAlive>
  </main>
</template>

<style scoped>
.cards {
  height: 700px;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
