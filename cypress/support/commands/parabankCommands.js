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


import ParabankRegistrationPage from '../pages/parabankRegistrationPage';
import { parabankRegTestData } from '../utils/parabankUtils';




//Fill in fields in the Parabank registration form using utility file
Cypress.Commands.add('fillParabankRegistrationForm', () => {
  const testData = parabankRegTestData();
  ParabankRegistrationPage.assertParabankRegForm(); 
  ParabankRegistrationPage.fillFormWithData(testData);
});



//Clear all cookies, local storage and session storage
Cypress.Commands.add('clearBefore', () => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();  
  cy.window().then((win) => {
     win.localStorage.clear();
     win.sessionStorage.clear();
    })
});



//Screengrab command
Cypress.Commands.add("takeScreenshot", (prefix) => {
    const date = new Date();
    const formattedDate = 
      `${String(date.getMonth() + 1).
        padStart(2, '0')}-${String(date.getDate()).
        padStart(2, '0')}-${String(date.getFullYear()).
          slice(-2)}`;
    const fileName = `${prefix}-${formattedDate}`;
    cy.screenshot(fileName);
    // cy.screenshot(fileName, { capture: 'fullPage' });
});



//screenshot while page is scrolling
Cypress.Commands.add('scrollAndScreenshot', (prefix = 'scroll-screenshot', stepDelay = 500) => {
  cy.document().then((doc) => {
    const viewportHeight = Cypress.config('viewportHeight');
    const date = new Date();
    const formattedDate = 
      `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${String(date.getFullYear()).slice(-2)}`;
    const fileName = `${prefix}-${formattedDate}`;


    // Scroll down one viewport height
    cy.scrollTo(0, viewportHeight);
    cy.wait(stepDelay);
    cy.screenshot(fileName);
  });
});


 
Cypress.Commands.add('selectGender', (gender) => {
  const genderLower = gender.toLowerCase();

  if (genderLower === 'male') {
    cy.get('input[type="radio"][value="Male"]').check({ force: true });
  } else if (genderLower === 'female') {
    cy.get('input[type="radio"][value="Female"]').check({ force: true });
  }
});




Cypress.Commands.add('disableAnimations', () => {
  cy.document().then((doc) => {
    const style = doc.createElement('style');
    style.innerHTML = `
      * {
        animation: none !important;
        transition: none !important;
      }
    `;
    doc.head.appendChild(style);
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



//Fill in fields in the Parabank registration form using utility file
// import {generateCustomerData} from '../support/utility';
// Cypress.Commands.add('fillRegistrationForm', () => {
//   const Userinput = generateCustomerData()
//   cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(Userinput.FirstName).should('have.value', Userinput.FirstName);
//   cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(Userinput.LastName).should('have.value', Userinput.LastName);
//   cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(Userinput.Address).should('have.value', Userinput.Address);
//   cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(Userinput.City).should('have.value', Userinput.City);
//   cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(Userinput.State).should('have.value', Userinput.State);
//   cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(Userinput.ZipCode).should('have.value', Userinput.ZipCode);
//   cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(Userinput.PhoneNumber).should('have.value', Userinput.PhoneNumber);
//   cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(Userinput.SSN).should('have.value', Userinput.SSN);
//   cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(Userinput.Username).should('have.value', Userinput.Username);
//   cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(Userinput.Password).should('have.value', Userinput.Password);
//   cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(Userinput.Password).should('have.value', Userinput.Password); 
//   cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
//   cy.url().should('include', '/register.htm');
//   cy.get('.title').should('contain', 'Welcome ' + Userinput.Username);
//   cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
//   });


