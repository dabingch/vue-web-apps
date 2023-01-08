<template>
	<div>
		<header>
			<NuxtLink to="/"><h1>Adventure Store</h1></NuxtLink>
			<NuxtLink to="/cart">
				<span class="material-symbols-outlined"> shopping_bag </span>
			</NuxtLink>
		</header>

		<div>
			<slot />
		</div>
	</div>
</template>

<script setup></script>

<style scoped></style>
