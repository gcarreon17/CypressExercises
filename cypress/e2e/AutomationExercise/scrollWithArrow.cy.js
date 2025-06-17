///<reference types = "cypress"/>

describe("Scroll With Arrow Keys", {testIsolation: false}, () => {
  it("Scroll Down with Arrow Keys", () => {
    //Launch website
    cy.visit("https://www.automationexercise.com/");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Scroll down with arrow
    cy.get("body").type("{pageDown}");
    cy.get("footer").should("be.visible");
  });
});

it("Scroll Up with Arrow Keys", () => {
  //Launch website
  cy.visit("https://www.automationexercise.com/");
  cy.wait(5000);

  //Verify if Website URL is correct
  cy.url().should("eq", "https://www.automationexercise.com/");

  //Verify if Homepage is displayed
  cy.title().should("eq", "Automation Exercise");

  //Scroll up with arrow
  cy.get("body").type("{pageUp}");
  cy.get("header").should("be.visible");
});
