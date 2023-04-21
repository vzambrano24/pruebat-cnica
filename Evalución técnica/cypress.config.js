const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hxzqw6',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "pageLoadTimeout": 20000,
  "chromeWebSecurity": false
});
