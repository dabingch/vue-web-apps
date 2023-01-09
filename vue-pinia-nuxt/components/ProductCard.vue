<template>
	<div class="card flex items-center gap-8">
		<img :src="product.img" :alt="`${product.title}`" />
		<div>
			<p class="text-2xl text-secondary">{{ product.title }}</p>
			<p class="text-xl text-gray-50">{{ product.description }}</p>
			<p class="text-lg text-secondary my-3">
				{{ product.price }} Silver Coins
			</p>
			<button class="btn" @click="addToBasket" :disabled="loading">
				<span v-if="loading">Adding...</span>
				<span v-else>Add to Basket</span>
			</button>
		</div>
	</div>
</template>

<script setup>
import { useCartStore } from '@/stores/cartStore'

import { ref } from 'vue'

const cartStore = useCartStore()

const { product } = defineProps(['product'])

const loading = ref(false)

const addToBasket = async () => {
	loading.value = true
	await cartStore.addToCart(product)
	setTimeout(() => (loading.value = false), 1000)
}
</script>

<style scoped></style>
