<template>
  <div class="observer" ref="root"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const observer = ref(null);
const root = ref(null);

const emit = defineEmits(["intersect"]);

onMounted(() => {
  observer.value = new IntersectionObserver(([entry]) => {
    // console.log(entry)
    if (entry && entry.isIntersecting) {
      emit("intersect");
    }
  });

  observer.value.observe(root.value);
});
</script>

<style scoped>
.observer {
  height: 10px;
  width: 10px;
}
</style>
