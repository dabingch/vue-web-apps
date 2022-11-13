import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/css/tailwind.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

createApp(App).use(store).use(router).mount("#app");
