<template>
  <div>
    <a-button class="btn" type="primary" @click="showModal">{{
      title
    }}</a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
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
const { errorMessage } = storeToRefs(userStore);

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

const handleOk = (e) => {
  // visible.value = false;
  userStore.handleSignup(userCredentials);
};
</script>

<style scoped>
.btn {
  margin-left: 10px;
}

.input {
  margin-top: 5px;
}
</style>
