const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {},

  env: {
    // HINT: here we read these keys from .env file, feel free to remove the items that you don't need
    baseUrl: process.env.FE_URL ?? "http://localhost:3000",
    apiUrl: process.env.BE_URL ?? "http://localhost:1337",
    email: "admin@test.com",
    password: "Admin111",
  },

  e2e: {
    supportFolder: false,
    supportFile: false,
    specPattern: "src/tests/e2e/**/*.spec.js",
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: process.env.FE_URL ?? "http://localhost:3000",
  },
});
