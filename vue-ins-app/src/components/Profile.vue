<template>
  <Container>
    <div class="profile-container" v-if="!loading">
      <!-- Rerender every time when the username is changed -->
      <UserBar
        :key="$route.params.username"
        :addNewPost="addNewPost"
        :user="user"
        :isFollowing="isFollowing"
        :updateIsFollowing="updateIsFollowing"
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
import { ref, onMounted, watch } from "vue";
import { supabase } from "../supabase";
import { useRoute } from "vue-router";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";

const posts = ref([]);
const userStore = useUserStore();
const { user: loggedInUser } = storeToRefs(userStore);
const user = ref(null);
const loading = ref(false);
const isFollowing = ref(false);
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

  await fetchIsFollowing();

  loading.value = false;
};

const addNewPost = (post) => {
  posts.value.unshift(post);
};

const updateIsFollowing = (follow) => {
  isFollowing.value = follow;
};

const fetchIsFollowing = async () => {
  if (loggedInUser.value && loggedInUser.value.id !== user.value.id) {
    const { data } = await supabase
      .from("followers_following")
      .select()
      .eq("follower_id", loggedInUser.value.id)
      .eq("following_id", user.value.id)
      .single();

    // console.log(res)
    if (data) {
      isFollowing.value = true;
    }
  }
};

watch(loggedInUser, () => {
  fetchIsFollowing();
});

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
