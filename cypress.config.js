const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cd78bc",
  experimentalStudio: true,
  //viewportWidth: 1000,
  //viewportHeight: 600,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  env: {
    qa: process.env.QA_URL,
    uat: process.env.UAT_URL
  },

  e2e: {
    //baseUrl: 'https://www.saucedemo.com',
    // testIsolation: false, // Uncomment if you want to disable test isolation
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  }
});
