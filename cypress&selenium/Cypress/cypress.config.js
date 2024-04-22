const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");


module.exports = defineConfig({

  projectId: "kg6e7s",
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on);
    },
  },
});
