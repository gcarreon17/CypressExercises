const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cd78bc",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
