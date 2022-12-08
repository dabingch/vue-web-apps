<template>
  <div class="image-gallery-container">
    <img
      v-for="post in props.posts"
      :key="post.id"
      alt="post_image"
      :src="`${VITE_BASE_PHOTO_URL}${post.url}`"
    />
  </div>
</template>

<script setup>
const props = defineProps(["posts"]);
const { VITE_BASE_PHOTO_URL } = import.meta.env;
</script>

<style scoped>
.image-gallery-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

img {
  margin: 5px;
  width: 200px;
}
</style>
