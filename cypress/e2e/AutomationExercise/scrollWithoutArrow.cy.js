///<reference types = "cypress"/>

describe("Scroll Without Arrow Keys", {testIsolation: false}, () => {
  it("Scroll Down without Arrow Keys", () => {
    //Launch website
    cy.visit("https://www.automationexercise.com/");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    // Scroll down to the bottom of the page
    cy.scrollTo("bottom");
    cy.get(".footer-bottom > .container > .row").should("be.visible");
    cy.get("footer")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const cleanedText = text.trim().replace(/\s+/g, " ");
        expect(cleanedText).to.contains("Copyright © 2021 All rights reserved");

        cy.wait(5000);
        cy.get("#scrollUp").should("be.visible").click();
      });
  });
});
