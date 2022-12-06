<template>
  <div>
    <a-button @click="showModal">Upload Photo</a-button>
    <a-modal v-model:visible="visible" title="Upload Photo" @ok="handleOk">
      <div v-if="!loading">
        <input type="file" accept=".jpeg,.png" @change="handleUploadChange" />
        <a-input
          v-model:value="caption"
          placeholder="Caption..."
          :maxLength="50"
        />
        <a-typography-text type="danger" v-if="errorMessage">{{
          errorMessage
        }}</a-typography-text>
      </div>
      <div v-else class="spinner">
        <a-spin />
      </div>
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/users";
import { storeToRefs } from "pinia";

const visible = ref(false);
const caption = ref("");
const file = ref(null);
const loading = ref(false);
const errorMessage = ref("");

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const showModal = () => {
  visible.value = true;
};

const handleOk = async () => {
  if (file.value) {
    loading.value = true;
    const fileName = Math.floor(Math.random() * 10000000);
    const { error } = await supabase.storage
      .from("images")
      .upload("public/" + fileName, file.value);

    if (error) {
      loading.value = false;
      return (errorMessage.value = "Unable to upload image");
    }

    await supabase.from("posts").insert({
      url: data.path,
      caption: caption.value,
      owner_id: user.value.id,
    });

    loading.value = false;
    errorMessage.value = "";
  }

  // visible.value = false;
};

const handleUploadChange = (e) => {
  if (e.target.files[0]) {
    file.value = e.target.files[0];
  }
};
</script>

<style scoped>
input {
  margin-top: 10px;
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
