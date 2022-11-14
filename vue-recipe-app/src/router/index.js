import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Recipe from "../views/Recipe.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/recipe/:slug",
		name: "recipe",
		component: Recipe,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
