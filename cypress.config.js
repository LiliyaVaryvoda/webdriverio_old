const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporters:[
    '@shelex/cypress-allure-plugin/reporter'
  ],
  reporterOptions: {
    '@shelex/cypress-allure-plugin': {
      allureWriter: 'allure-results'
    }
  },
  e2e: {
    specPattern:"**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
