import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: HomeView,
		iconClass: "fas fa-home",
		mainMenu: true,
	},
	{
		path: "/explore",
		name: "Explore",
		component: HomeView,
		iconClass: "fas fa-search",
		mainMenu: true,
	},
	{
		path: "/notification",
		name: "Notification",
		component: HomeView,
		iconClass: "fas fa-bell",
		mainMenu: true,
	},
	{
		path: "/messages",
		name: "Messages",
		component: HomeView,
		iconClass: "fas fa-envelope",
		mainMenu: true,
	},
	{
		path: "/profile",
		name: "Profile",
		component: HomeView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
