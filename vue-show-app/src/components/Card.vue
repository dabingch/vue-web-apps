<template>
  <n-card>
    <template #cover>
      <img :src="image" />
    </template>
    <h3>{{ name }}</h3>
    <div class="jobs">
      <p v-for="(job, index) in occupation" :key="index">
        {{ job }}<span v-if="index < occupation.length - 1">,&nbsp;</span>
      </p>
    </div>
  </n-card>
</template>

<script setup>
const { image, name, occupation } = defineProps([
  "image",
  "name",
  "occupation",
]);
</script>

<style scoped>
.n-card {
  width: 200px;
  margin: 10px 20px;
  /* height: 300px; */
}
.n-card img {
  height: 250px;
}

p {
  font-size: 10px;
}

.jobs {
  display: flex;
  flex-wrap: wrap;
}
</style>
