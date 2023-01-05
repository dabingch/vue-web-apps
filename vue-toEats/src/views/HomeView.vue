<template>
	<main>
		<form @submit.prevent="addRestaurant">
			<label for="restaurant-name">Restaurant</label>
			<input
				type="text"
				id="restaurant-name"
				v-model="newRestaurantName"
			/>
			<button type="submit">Add Restaurant</button>
		</form>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const restaurantList = ref<string[]>([])
const newRestaurantName = ref<string>('')

const addRestaurant = () => {
	restaurantList.value.push(newRestaurantName.value)
	newRestaurantName.value = ''
}
</script>

<style scoped></style>
