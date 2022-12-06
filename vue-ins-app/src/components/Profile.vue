<template>
  <Container>
    <div class="profile-container">
      <UserBar
        :key="$route.params.username"
        :addNewPost="addNewPost"
        username="dabing"
        :userInfo="{
          posts: 20,
          followers: 200,
          following: 100,
        }"
      />
      <ImageGallary :posts="posts" />
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import ImageGallary from "./ImageGallary.vue";
import UserBar from "./UserBar.vue";
import { ref } from "vue";

const posts = ref([]);

const addNewPost = (post) => {
  posts.value.unshift(post);
};
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}
</style>
