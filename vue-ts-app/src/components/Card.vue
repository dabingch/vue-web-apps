<template>
  <div
    :style="{
      backgroundColor:
        invitee.gender === GENDER.MALE ? 'rgb(8,111,111)' : 'rgb(111,18,8)',
    }"
  >
    {{ invitee.name }}
  </div>
</template>

<script setup lang="ts">
import { GENDER, type Invitee } from "../types";

defineProps<{
  invitee: Invitee;
}>();
</script>

<style scoped>
div {
  background-color: blue;
  border-radius: 5px;
  margin-top: 5px;
  text-align: center;
  padding: 3px;
  color: white;
}
</style>
