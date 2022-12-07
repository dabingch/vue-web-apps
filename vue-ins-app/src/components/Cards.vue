<template>
  <div class="timeline-container">
    <Card v-for="post in data" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
import data from "../assets/data";
import Card from "./Card.vue";
</script>
