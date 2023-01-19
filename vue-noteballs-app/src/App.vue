<script setup>
import { RouterView } from 'vue-router'

import Navbar from './components/layouts/Navbar.vue'
</script>

<template>
	<Navbar />
	<div class="container is-max-desktop px-2 py-4">
		<RouterView />
	</div>
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
