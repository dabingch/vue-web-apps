import { createRouter, createWebHashHistory } from 'vue-router'
import NotesView from '../views/NotesView.vue'
import StatsView from '../views/StatsView.vue'
import EditNoteView from '../views/EditNoteView.vue'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'notes',
			component: NotesView,
		},
		{
			path: '/editNote/:id',
			name: 'edit-note',
			component: EditNoteView,
		},
		{
			path: '/stats',
			name: 'stats',
			component: StatsView,
		},
	],
})

export default router
