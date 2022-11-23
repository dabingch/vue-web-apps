<template>
  <n-card>
    <template #cover>
      <img :src="image" />
    </template>
    <h3>{{ name }}</h3>
    <slot></slot>
  </n-card>
</template>

<script setup>
const { image, name, occupation } = defineProps(["image", "name"]);
</script>

<style scoped>
.n-card {
  width: 200px;
  margin: 10px 20px;
  /* height: 300px; */
}
.n-card img {
  height: 250px;
}
</style>
