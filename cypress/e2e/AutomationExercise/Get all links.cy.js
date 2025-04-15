///<reference types="cypress" />

describe("Extract All URLs from a Website", () => {
  it("Should get all links on the page", () => {
    cy.visit("https://www.automationexercise.com");
    cy.wait(5000);

    cy.get("a").each(($el) => {
      // Get the href attribute
      const link = $el.prop("href");
      if (link) {
        // Log URL in Cypress Test Runner
        cy.log(link);

        // Save to a file
        cy.writeFile(
          "cypress/fixtures/urls.json",
          { url: link },
          { flag: "a+" }
        );
      }
    });
  });
});
