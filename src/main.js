import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueGtag, {
  config: { id: import.meta.env.VITE_GOOGLE_MEASUREMENT_ID },
});

app.mount("#app");
