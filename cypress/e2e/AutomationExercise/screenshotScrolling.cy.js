///<reference types="cypress" />

describe('Scroll and take screenshots', {testIsolation: false}, () => {
    it('Takes screenshots while scrolling the products page', () => {
      cy.visit('https://www.automationexercise.com/products');
      cy.scrollAndScreenshot(); // You can pass wait time like: cy.scrollAndScreenshot(800)
    });
  });
  