<template>
  <a-card hoverable style="width: 240px" class="card">
    <template #cover>
      <img alt="example" :src="post.url" />
    </template>
    <a-card-meta :title="post.username">
      <template #description>{{ post.caption }}</template>
    </a-card-meta>
  </a-card>
</template>

<script setup>
const props = defineProps(["post"]);
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>
