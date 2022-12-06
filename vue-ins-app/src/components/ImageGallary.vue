<template>
  <div class="image-gallery-container">
    <img
      v-for="post in props.posts"
      :key="post.id"
      alt="post_image"
      :src="`https://xqfkchdlylsnwzikglhl.supabase.co/storage/v1/object/public/images/${post.url}`"
    />
  </div>
</template>

<script setup>
const props = defineProps(["posts"]);
console.log(props.posts);
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
