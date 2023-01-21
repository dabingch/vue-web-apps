<template>
	<div class="edit-note">
		<h1>Edit Note with an ID of {{ route.params.id }}</h1>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped></style>
