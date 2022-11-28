<script setup lang="ts">
import { ref, computed } from "vue";
import Card from "./components/Card.vue";
import { GENDER, type Invitee } from "./types";

const name = ref("");

const addInvitee = (): void => {
  if (name.value) {
    invitees.value.push({
      id: Math.floor(Math.random() * 100000),
      name: name.value,
      gender: gender.value,
    });
  }
};

const count = computed<{
  female: number;
  male: number;
}>(() => {
  return invitees.value.reduce(
    (countObj, invitee) => {
      if (invitee.gender === GENDER.MALE) {
        return {
          ...countObj,
          male: countObj.male + 1,
        };
      }

      return {
        ...countObj,
        female: countObj.female + 1,
      };
    },
    { male: 0, female: 0 }
  );
});

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
      <div class="cards-container">
        <Card
          v-for="invitee in invitees"
          :key="invitee.id"
          :invitee="invitee"
        />
      </div>
      <div>
        <p>Females - {{ count.female }}</p>
        <p>Males - {{ count.male }}</p>
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
