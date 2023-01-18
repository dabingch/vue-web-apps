import { createRouter, createWebHashHistory } from 'vue-router'
import VueNotesView from '../views/VueNotesView.vue'
import VueStatsView from '../views/VueStatsView.vue'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'notes',
			component: VueNotesView,
		},
		{
			path: '/stats',
			name: 'stats',
			component: VueStatsView,
		},
	],
})

export default router
