const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  projectId: "cd78bc",
  experimentalStudio: true,
  //viewportWidth: 1000,
  //viewportHeight: 600,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Exercise RegisterLoginDelete Report',
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
      on('before:run', async (details) => {
        console.log('override before:run');
        console.log('Running tests');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    }
  }
});
