<template>
  <div>
    <h1>Breaking Bad Cards</h1>
    <h4>{{ characters }}</h4>
    <div>
      <button @click="page++">Next</button>
      <button @click="page--">Prev</button>
    </div>
  </div>
</template>

<script setup>
import axios from "axios"
import { ref, watch } from "vue";

const characters = ref(null)
const page = ref(0)

const response = await axios.get("https://www.breakingbadapi.com/api/characters?limit=8")
characters.value = response.data

watch(page, async () => {
  const res = await axios.get(`https://www.breakingbadapi.com/api/characters?limit=8&offset=${page.value * 8}`)
  characters.value = res.data
  console.log(res)
})

console.log(response)
</script>

<style lang="scss" scoped>

</style>