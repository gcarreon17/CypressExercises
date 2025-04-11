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

//Launch SauceDemo Website
Cypress.Commands.add('launchWebsite', () => {
    cy.visit('https://www.saucedemo.com')
    cy.title().should('eq', 'Swag Labs')
    cy.get('.login_logo').should('be.visible')
    cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled')
    cy.takeScreenshot("Launch Website")
})

//Login SauceDemo  
Cypress.Commands.add('authLogin', (username, password) => {
    cy.visit('https://www.saucedemo.com')
    cy.title().should('eq', 'Swag Labs')
    cy.get('.login_logo').should('be.visible')
    cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
    cy.takeScreenshot("Valid Login2") 
    })

//Screengrab command
Cypress.Commands.add("takeScreenshot", (prefix) => {
  cy.then(() => {
    const date = new Date();
    const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${String(date.getFullYear()).slice(-2)}`;
    const fileName = `${prefix}-${formattedDate}`;
    cy.screenshot(fileName);
  });
});

Cypress.Commands.add('saveCart', () => {
  cy.window().then((win) => {
    const cart = win.localStorage.getItem('cart-contents') || '[]';
    Cypress.env('savedCart', cart);
  });
});

Cypress.Commands.add('restoreCart', () => {
  const cart = Cypress.env('savedCart') || '[]';
  cy.window().then((win) => {
    win.localStorage.setItem('cart-contents', cart);
  });
});

//Fill in fields in the registration form
import { generateCustomerData } from '../support/utility';
Cypress.Commands.add('fillRegistrationForm', () => {
  const Userinput = generateCustomerData()
  cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(Userinput.FirstName)
  cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(Userinput.LastName)
  cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(Userinput.Address)
  cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(Userinput.City)
  cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(Userinput.State)
  cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(Userinput.ZipCode)
  cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(Userinput.PhoneNumber)
  cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(Userinput.SSN)
  cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(Userinput.Username)
  cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(Userinput.Password)
  cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(Userinput.Password)
  cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click()
  cy.url().should('include', '/register.htm')
  cy.get('.title').should('contain', 'Welcome ' + Userinput.Username)

});
