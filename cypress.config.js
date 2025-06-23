const { defineConfig } = require("cypress");
require('dotenv').config();
const { beforeRunHook, afterRunHook } = require("cypress-mochawesome-reporter/lib");

module.exports = defineConfig({
  e2e: {
    // viewportWidth: 1920,
    // viewportHeight: 1080,
    // baseUrl: "https://petstore.swagger.io/v2" || Cypress.env('API_BASE_URL'),
    baseUrl: process.env.API_BASE_URL,
    env: {
      apiKey: process.env.API_KEY
    },
    setupNodeEvents(on, config) {
      on("before:run", async (details) => {
        console.log("override before:run");
        console.log("Running tests");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });

      return config;
    },

    projectId: "cd78bc",
    experimentalStudio: true,
    video: true,
    videosFolder: 'cypress/videos',
    defaultCommandTimeout: 10000,
    retries: 3, 

    videoCompression: false,      // 🗜 Compress the video (0–51, false = no compression)
    trashAssetsBeforeRuns: false, // 🗑 Delete old videos/screenshots before a new run


    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportPageTitle: "Automation Exercise Register Login Delete Report",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },

    env: {
      projectName: process.env.PROJECT_NAME || "Cypress Test Automation",
      environment: process.env.ENVIRONMENT || "QA",
      API_KEY: process.env.API_KEY,
      API_BASE_URL: process.env.API_BASE_URL || "https://petstore.swagger.io/v2",
    },
  },
});
