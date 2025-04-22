///<reference types="cypress" />

describe("Test Case1", () => {
  it("Test script1 - Verify Title Positive", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM");
  });

  it("Test script2 - Verify Title Negative", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("eq", "OrangeHRM1"); // Ensuring the title is not 'OrangeHRM1'
  });
});