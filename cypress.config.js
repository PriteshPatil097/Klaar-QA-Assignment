const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://dev.klaarhq.com/auth/sign_in',

        setupNodeEvents(on, config) {
      // implement node event listeners here
      specPattern: 'cypress/e2e/tests/**/*.cy.js'

    },
   /* env:{
      URL: 'https://dev.klaarhq.com/auth/sign_in',
    }*/
  },
})