<template>
	<div>
		<p>{{ product.title }}</p>
		<p>{{ product.price }}</p>
	</div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// Once key changes, the data will be refetched
const { data: product } = await useFetch(uri, { key: id })

definePageMeta({
	layout: 'products',
})
</script>

<style lang="scss" scoped></style>
