import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import locales from "./locales/index.js";

const i18n = createI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages: locales, // set locale messages
});

const app = createApp(App);

app.use(i18n);
app.mount("#app");
