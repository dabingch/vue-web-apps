<template>
	<div class="notes">
		<div class="card has-background-success-dark p-4 mb-5">
			<div class="field">
				<div class="control">
					<textarea
						v-model="newNote"
						class="textarea"
						placeholder="Add a new note"
						ref="newNoteRef"
					></textarea>
				</div>
			</div>
			<div class="field is-grouped is-grouped-right">
				<div class="control">
					<button
						@click="handleAddNote"
						:disabled="!newNote"
						class="button is-link has-background-success"
					>
						Add New Note
					</button>
				</div>
			</div>
		</div>

		<Note v-for="note in notes" :key="note.id" :note="note" />
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

import Note from '@/components/notes/Note.vue'
import { useNotesStore } from '@/stores/notesStore'

const { addNote } = useNotesStore()
const notesStore = useNotesStore()
// storeToRefs() is a helper function that converts a store to a reactive object
const { notes } = storeToRefs(notesStore)

const newNote = ref('')
const newNoteRef = ref(null)

const handleAddNote = () => {
	addNote(newNote.value)
	newNote.value = ''
	newNoteRef.value.focus()
}
</script>
