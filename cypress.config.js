//npx cypress run --record --key 44bdf3ee-a26d-429a-9543-30d6b6acef07
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
