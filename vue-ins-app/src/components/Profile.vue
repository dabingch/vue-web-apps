<template>
  <Container>
    <div class="profile-container">
      <UserBar
        username="dabing"
        :userInfo="{
          posts: 20,
          followers: 200,
          following: 100,
        }"
      />
      <ImageGallary
        :posts="[
          {
            id: 1,
            image:
              'https://gravatar.com/avatar/9ed1bddfefff8a20dfee2251a1e9c26c?s=400&d=wavatar&r=x',
          },
          {
            id: 2,
            image:
              'https://gravatar.com/avatar/9ed1bddfefff8a20dfee2251a1e9c26c?s=400&d=wavatar&r=x',
          },
        ]"
      />
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import ImageGallary from "./ImageGallary.vue";
import UserBar from "./UserBar.vue";
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}
</style>
