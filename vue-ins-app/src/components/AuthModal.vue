<template>
  <div>
    <a-button class="btn" type="primary" @click="showModal">{{
      title
    }}</a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button
          :disabled="loading"
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
          >Submit</a-button
        >
      </template>
      <div class="input-container" v-if="!loading">
        <a-input
          class="input"
          v-if="!isLogin"
          v-model:value="userCredentials.username"
          placeholder="Username"
        />
        <a-input
          class="input"
          v-model:value="userCredentials.email"
          placeholder="Email"
        />
        <a-input
          class="input"
          v-model:value="userCredentials.password"
          placeholder="Password"
          type="password"
        />
      </div>
      <div class="spinner" v-else>
        <a-spin />
      </div>
      <a-typography-text type="danger" v-if="errorMessage">{{
        errorMessage
      }}</a-typography-text>
    </a-modal>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { errorMessage, loading, user } = storeToRefs(userStore);

const userCredentials = reactive({
  email: "",
  password: "",
  username: "",
});
const visible = ref(false);
const props = defineProps(["isLogin"]);
const title = props.isLogin ? "Login" : "Signup";

const showModal = () => {
  visible.value = true;
};

const clearCredentials = () => {
  userCredentials.email = "";
  userCredentials.password = "";
  userCredentials.username = "";
  userStore.clearErrorMessage();
};

const handleOk = async (e) => {
  if (props.isLogin) {
    await userStore.handleLogin({
      password: userCredentials.password,
      email: userCredentials.email,
    });
  } else {
    await userStore.handleSignup(userCredentials);
  }
  if (user.value) {
    clearCredentials();
    visible.value = false;
  }
};

const handleCancel = () => {
  userStore.clearErrorMessage();
  visible.value = false;
};
</script>

<style scoped>
.btn {
  margin-left: 10px;
}

.input {
  margin-top: 5px;
}

.input-container {
  height: 120px;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
}
</style>
