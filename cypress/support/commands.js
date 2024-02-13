// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
Cypress.Commands.add('login', (email, password) => {
    cy.visit('')
    cy.get('[data-cy="login-with-klaar-button"]').click()
    cy.get('#email-field').type(email)
    cy.get('#password-field').type(password)
    cy.get('[data-cy="login-submit-button"]').click()
    cy.wait(6000)
    cy.get('[data-cy="settings-nav-menu-button"]').click()
    
})

// Cypress.Commands.add('Incorrectlogin', (Inemail, Inpassword) => {
//     cy.visit('')
//     cy.get('[data-cy="login-with-klaar-button"]').click()
//     cy.get('#email-field').type(Inemail)
//     cy.get('#password-field').type(Inpassword)
//     cy.get('[data-cy="login-submit-button"]').click()
//     cy.wait(6000)
//     cy.get('[data-cy="settings-nav-menu-button"]').click()
// })

Cypress.Commands.add('setCustomViewport', (width, height) => {
    cy.viewport(width, height);
})