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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// add new command to the existing Cypress interface
import 'cypress-wait-until';
import 'cypress-file-upload';

function persistWrite(key: string, value: string) {
  cy.log('Persist:write', `key: ${key}, value: ${value}`);
  return cy.writeFile(`./cypress/tmp/${encodeURIComponent(key)}`, value);
}

function persistRead(key: string) {
  return cy.readFile(`./cypress/tmp/${decodeURIComponent(key)}`).then((value) => {
    cy.log('Persist:read', `key: ${key}, value: ${value}`);
    return cy.wrap(value);
  });
}

/* eslint-disable @typescript-eslint/no-misused-promises */
Cypress.Commands.add('persistWrite', persistWrite);
Cypress.Commands.add('persistRead', persistRead);

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      persistWrite: typeof persistWrite;
      persistRead: typeof persistRead;
    }
  }
}
