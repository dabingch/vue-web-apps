<template>
  <a-layout-header>
    <Container>
      <div class="nav-container">
        <div class="left-content">
          <RouterLink to="/">Instagram</RouterLink>
          <a-input-search
            v-model="searchUsername"
            placeholder="username..."
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div class="right-content">
          <a-button type="primary">Sign Up</a-button>
          <a-button type="primary">Login</a-button>
        </div>
      </div>
    </Container>
  </a-layout-header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Container from "./Container.vue"

const searchUsername = ref("")

const onSearch = () => {

}
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

.right-content button {
  margin-left: 10px;
}
</style>