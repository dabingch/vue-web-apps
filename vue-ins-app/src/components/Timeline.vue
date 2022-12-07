<template>
  <Container>
    <div v-if="!loadingUser">
      <Cards v-if="user" />
      <LoginMessage v-else />
    </div>
    <div v-else class="timeline-spinner">
      <a-spin />
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import Cards from "./Cards.vue";
import LoginMessage from "./LoginMessage.vue";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { user, loadingUser } = storeToRefs(userStore);
</script>

<style>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}

.timeline-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
}
</style>
