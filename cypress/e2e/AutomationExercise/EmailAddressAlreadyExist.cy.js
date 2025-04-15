///<reference types="cypress" />

describe("Register an existing email address", () => {
  it("Verify Unsuccessful Registration of an existing user", () => {
    //Navigate to URL
    cy.visit("http://www.automationexercise.com");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Verify homepage is displayed
    cy.get(".active > :nth-child(1) > h1").should("be.visible");

    //Click signup link
    cy.contains("Signup / Login").click();

    //Verify signup is displayed
    cy.get(".signup-form > h2").should("be.visible");

    cy.fixture("AutomationExerciseUser.json").then((Userdata) => {
      cy.get('[data-qa="signup-name"]').type("A1");
      cy.get('[data-qa="signup-email"]').type("A1@A.com");
      cy.get('[data-qa="signup-button"]').click();

      //Verify error message displayed
      cy.get(".signup-form > form > p")
        .should("be.visible")
        .and("contain.text", "Email Address already exist!");
    });
  });
});
