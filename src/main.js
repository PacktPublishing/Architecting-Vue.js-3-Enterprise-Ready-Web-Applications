import { createApp, provide, h } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import locales from "./locales/index.js";
import apolloClient from "./plugins/apollo.config";
import { DefaultApolloClient } from "@vue/apollo-composable";

const i18n = createI18n({
  locale: "en", // set locale
  fallbackLocale: "en", // set fallback locale
  messages: locales, // set locale messages
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
});

app.use(i18n);
app.mount("#app");
