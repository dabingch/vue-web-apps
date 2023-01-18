<script setup>
import { RouterView } from 'vue-router'

import Navbar from './components/layouts/Navbar.vue'
</script>

<template>
	<Navbar />
	<RouterView />
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
