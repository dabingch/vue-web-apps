<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<RouterLink to="/">Notes</RouterLink> |
	<RouterLink to="/stats">Stats</RouterLink>
	<RouterView />
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
