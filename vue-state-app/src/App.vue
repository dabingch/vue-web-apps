<script setup>
</script>

<template>
  <main>
    <div>
      <input type="number" placeholder="red">
      <input type="number" placeholder="blue">
      <input type="number" placeholder="green">
    </div>
  </main>
</template>

<style scoped>
main {
  background-color: rgb(122, 50, 255);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  display: flex;
  flex-direction: column;
}
</style>
