<script setup lang="ts">
import { ref } from "vue";

enum GENDER {
  MALE,
  FEMALE,
}

const name = ref("");

interface Invitee {
  id: number;
  name: string;
  gender: GENDER;
}

const addInvitee = (): void => {
  if (name.value) {
    invitees.value.push({
      id: Math.floor(Math.random() * 100000),
      name: name.value,
      gender: gender.value,
    });
  }
};

const gender = ref(GENDER.MALE);

const invitees = ref<Invitee[]>([]);
</script>

<template>
  <main>
    <div>
      <h1>People Invited to My Party</h1>
      <div class="input-container">
        <input
          type="text"
          placeholder="Name..."
          v-model="name"
          @keypress.enter="addInvitee"
        />
        <select v-model="gender" @keypress.enter="addInvitee">
          <option :value="GENDER.MALE">Male</option>
          <option :value="GENDER.FEMALE">Female</option>
        </select>
      </div>
    </div>
  </main>
</template>

<style scoped>
* {
  color: #333;
}

main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
}

input,
select {
  width: 100%;
  padding: 5px;
  margin-bottom: 2px;
}
</style>
