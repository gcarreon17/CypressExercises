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
Cypress.Commands.add("captureSnapshot", (prefix) => {
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


Cypress.Commands.add('assertDropdownValues', (selector, expectedOptions) => {
  cy.get(selector).find('option').then($options => {
    const actual = [...$options].map(o => o.text.trim());
    expect(actual).to.deep.equal(expectedOptions);
  });
});
