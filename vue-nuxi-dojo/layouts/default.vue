<template>
	<div>
		<header>
			<nav>
				<ul>
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li><NuxtLink to="/products">Products</NuxtLink></li>
				</ul>
			</nav>
		</header>

		<div><slot></slot></div>
	</div>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
	color: #12b488;
}
</style>
