import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', {
	state: () => {
		return {
			notes: [
				{
					id: 1,
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				},
				{
					id: 2,
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				},
				{
					id: 3,
					content:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				},
			],
		}
	},
	getters: {},
	actions: {
		addNote(noteToAdd) {
			this.notes.unshift({
				id: this.notes.length + 1,
				content: noteToAdd,
			})
		},
		deleteNote(idToDelete) {
			this.notes = this.notes.filter((note) => note.id !== idToDelete)
		},
		findNoteById(idToFind) {
			const note = this.notes.find((note) => note.id == idToFind)

			return note
		},
		updateNote(noteToUpdate) {
			const note = this.notes.find((note) => note.id == noteToUpdate.id)

			note.content = noteToUpdate.content
		},
	},
})
