<template>
  <Container>
    <div class="profile-container" v-if="!loading">
      <UserBar
        :key="$route.params.username"
        :addNewPost="addNewPost"
        :user="user"
        :userInfo="{
          posts: 20,
          followers: 200,
          following: 100,
        }"
      />
      <ImageGallary :posts="posts" />
    </div>
    <div v-else>
      <a-spin class="spinner" />
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import ImageGallary from "./ImageGallary.vue";
import UserBar from "./UserBar.vue";
import { ref, onMounted } from "vue";
import { supabase } from "../supabase";
import { useRoute } from "vue-router";

const posts = ref([]);
const user = ref(null);
const loading = ref(false);
const route = useRoute();
const { username } = route.params;

const fetchData = async () => {
  loading.value = true;
  const { data: userData } = await supabase
    .from("users")
    .select()
    .eq("username", username)
    .single();

  if (!userData) {
    loading.value = false;
    return (user.value = null);
  }

  user.value = userData;

  const { data: postsData } = await supabase
    .from("posts")
    .select()
    .eq("owner_id", user.value.id);

  posts.value = postsData;

  loading.value = false;
};

const addNewPost = (post) => {
  posts.value.unshift(post);
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
}
</style>
