<template>
  <div>
    <a-button class="btn" type="primary" @click="showModal">{{
      title
    }}</a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <a-input
        class="input"
        v-if="!isLogin"
        v-model:value="value"
        placeholder="Username"
      />
      <a-input class="input" v-model:value="value" placeholder="Email" />
      <a-input class="input" v-model:value="value" placeholder="Password" />
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";

const visible = ref(false);
const props = defineProps(["isLogin"]);
const title = props.isLogin ? "Login" : "Signup";

const showModal = () => {
  visible.value = true;
};

const handleOk = (e) => {
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
</style>
