<template>
	<div class="edit-note">
		<h1>Edit Note with an ID of {{ route.params.id }}</h1>
		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea
						v-model="editNote"
						class="textarea"
						placeholder="Edit your note"
					></textarea>
				</div>
			</div>
			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button
						@click="handleOnSaveClicked"
						:disabled="!editNote"
						class="button is-link has-background-success"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import { useNotesStore } from '@/stores/notesStore'

const { findNoteById, updateNote } = useNotesStore()

const route = useRoute()
const router = useRouter()
const note = findNoteById(route.params.id)

const editNote = ref(note.content)

const handleOnSaveClicked = () => {
	updateNote({
		id: note.id,
		content: editNote.value,
	})
	router.push('/')
}
</script>

<style scoped></style>
