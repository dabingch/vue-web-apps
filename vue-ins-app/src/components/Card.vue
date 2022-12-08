<template>
  <a-card hoverable style="width: 240px" class="card">
    <template #cover>
      <img alt="example" :src="`${VITE_BASE_PHOTO_URL}${post.url}`" />
    </template>
    <a-card-meta :title="post.username">
      <template #description>{{ post.caption }}</template>
    </a-card-meta>
  </a-card>
</template>

<script setup>
const props = defineProps(["post"]);

//environment variables
const { VITE_BASE_PHOTO_URL } = import.meta.env;
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
