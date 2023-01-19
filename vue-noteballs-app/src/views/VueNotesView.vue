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
						@click="addNote"
						:disabled="!newNote"
						class="button is-link has-background-success"
					>
						Add New Note
					</button>
				</div>
			</div>
		</div>

		<Note
			v-for="note in notes"
			:key="note.id"
			:note="note"
			@deleteClicked="deleteNote(note.id)"
		/>
	</div>
</template>

<script setup>
import { ref } from 'vue'

import Note from '@/components/notes/Note.vue'

const notes = ref([
	{
		id: 1,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 2,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
	{
		id: 3,
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	},
])

const newNote = ref('')
const newNoteRef = ref(null)

const addNote = () => {
	notes.value.unshift({
		id: notes.value.length + 1,
		content: newNote.value,
	})

	newNote.value = ''
	newNoteRef.value.focus()
}

const deleteNote = (idToDelete) => {
	notes.value = notes.value.filter((note) => note.id !== idToDelete)
}
</script>
