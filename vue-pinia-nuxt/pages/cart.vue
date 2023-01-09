<template>
	<div>
		<h2 class="text-white text-2xl text-center my-8">Your Basket</h2>

		<div class="text-xl card" v-if="cartStore.cart.length">
			<div
				class="flex gap-8 items-center"
				v-for="product in cartStore.cart"
			>
				<img :src="product.img" :alt="`${product.title}`" />
				<p class="text-white">{{ product.title }}</p>
				<ProductQuantity :product="product" />
				<p class="text-white">
					{{ product.price * product.quantity }} coins
				</p>

				<button
					class="ml-auto"
					@click="cartStore.deleteFromCart(product)"
				>
					<span class="material-icons-outlined text-white"
						>delete</span
					>
				</button>
			</div>

			<div class="text-right pt-4 mt-4 border-t-2">
				<span class="text-white">Total amount to pay: </span>
				<span class="text-secondary"
					>{{ cartStore.cartTotal }} Silver Coins</span
				>
			</div>
		</div>

		<div v-else>
			<p class="text-white">No items in your basket</p>
		</div>
	</div>
</template>

<script setup>
import ProductQuantity from '@/components/ProductQuantity.vue'

import { useCartStore } from '~~/stores/cartStore'

const cartStore = useCartStore()
</script>

<style scoped></style>
