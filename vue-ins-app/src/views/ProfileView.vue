<script setup>
import Profile from "../components/Profile.vue";
</script>

<template>
  <main>
    <!-- Render every time when the username is changed -->
    <Profile :key="$route.params.username" />
  </main>
</template>
