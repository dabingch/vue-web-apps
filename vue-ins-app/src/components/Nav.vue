<template>
  <a-layout-header>
    <Container>
      <div class="nav-container">
        <div class="left-content">
          <RouterLink to="/">Instagram</RouterLink>
          <a-input-search
            v-model:value="searchUsername"
            placeholder="username..."
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div v-if="!loadingUser" class="content">
          <div class="right-content" v-if="!user">
            <!-- Sign up -->
            <AuthModal :isLogin="false" />
            <!-- Login -->
            <AuthModal :isLogin="true" />
          </div>
          <div class="right-content" v-else>
            <a-button type="primary" @click="goToUsersProfile"
              >Profile</a-button
            >
            <a-button type="primary" @click="handleLogout">Logout</a-button>
          </div>
        </div>
      </div>
    </Container>
  </a-layout-header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import Container from "./Container.vue";
import AuthModal from "./AuthModal.vue";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";

const searchUsername = ref("");
const router = useRouter();
const userStore = useUserStore();
const { user, loadingUser } = storeToRefs(userStore);

const onSearch = () => {
  if (searchUsername.value) {
    router.push(`/profile/${searchUsername.value}`);
  }
  searchUsername.value = "";
};

const handleLogout = async () => {
  await userStore.handleLogout();
};

const goToUsersProfile = () => {
  router.push(`/profile/${user.value.username}`);
};
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
}

.left-content {
  display: flex;
  align-items: center;
}

.left-content a {
  margin-right: 10px;
}

.right-content {
  display: flex;
  align-items: center;
}

.right-content button {
  margin-left: 10px;
}

.content {
  display: flex;
  align-items: center;
}
</style>
