const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    supportFolder: false,
    supportFile: false,
    specPattern: "src/tests/components/**/*.spec.js",
    // eslint-disable-next-line no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "http://localhost:3000",
  },

  env: {
    // HINT: here we read these keys from .env file, feel free to remove the items that you don't need
    baseUrl: "http://localhost:3000",
    apiUrl: "http://localhost:1337",
    email: "admin@test.com",
    password: "Admin111",
  },

  e2e: {},
});
