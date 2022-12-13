<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import { onMounted } from "vue";
import { useUserStore } from "./stores/users";

const userStore = useUserStore();

// Try to get the user once the website mounted
onMounted(() => {
  userStore.getUser();
});
</script>

<template>
  <main>
    <Nav />
    <RouterView />
  </main>
</template>
