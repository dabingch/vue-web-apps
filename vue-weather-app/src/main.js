import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwindcss.css";

createApp(App).use(router).mount("#app");
