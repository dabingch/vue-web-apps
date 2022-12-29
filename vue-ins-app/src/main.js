import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// Use AntD
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(createPinia());
app.use(Antd);
app.use(router);

app.mount("#app");
