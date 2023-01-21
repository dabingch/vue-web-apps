<template>
	<div class="card mb-4">
		<div class="card-content">
			<div class="content">
				{{ note.content }}
				<div class="has-text-right has-text-grey-light mt-2">
					<small>{{ characterLength }}</small>
				</div>
			</div>
		</div>
		<footer class="card-footer">
			<RouterLink
				:to="{ name: 'edit-note', params: { id: note.id } }"
				class="card-footer-item"
				>Edit</RouterLink
			>
			<a
				href="#"
				@click.prevent="deleteNote(note.id)"
				class="card-footer-item"
				>Delete</a
			>
		</footer>
	</div>
</template>

<script setup>
import { computed } from 'vue'

import { useNotesStore } from '@/stores/notesStore'

const { deleteNote } = useNotesStore()

const { note } = defineProps({
	note: {
		type: Object,
		required: true,
	},
})

const characterLength = computed(() => {
	let length = note.content.length
	let description = length > 1 ? 'characters' : 'character'

	return `${length} ${description}`
})
</script>

<style scoped></style>
