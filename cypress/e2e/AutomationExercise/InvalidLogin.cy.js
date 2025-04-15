  /// <reference types="cypress" />

  describe("Invalid Login", () => {
    it("Verify Invalid Login", () => {
      //Navigate to URL
      cy.visit("https://www.automationexercise.com");
      cy.wait(5000);

      //Verify if Website URL is correct
      cy.url().should("eq", "https://www.automationexercise.com/");

      //Verify if Homepage is displayed
      cy.title().should("eq", "Automation Exercise");

      //Verify homepage is displayed
      cy.get(".active > :nth-child(1) > h1").should("be.visible");

      //Click Login link
      cy.contains("Signup / Login").click();

      //Verify Login Screen is displayed
      cy.contains("Login to your account").should("be.visible");
      cy.get('[data-qa="login-email"]').should("be.empty");
      cy.get('[data-qa="login-password"]').should("be.empty");
      cy.get('[data-qa="login-button"]').should("be.enabled");

      //Verify Login using invalid email
      cy.get('[data-qa="login-email"]').type("Invalid");
      cy.get('[data-qa="login-password"]').type("Password");
      cy.get('[data-qa="login-button"]').click();
      //cy.log("Invalid Email Address");
      cy.get('[data-qa="login-email"]')
        .invoke("prop", "validationMessage")
        .should(
          "equal",
          "Please include an '@' in the email address. 'Invalid' is missing an '@'."
        );

      //Verify Login using invalid email
      cy.get('[data-qa="login-email"]')
        .clear()
        .should("be.empty")
        .type("A1@A.com");
      cy.get('[data-qa="login-password"]')
        .clear()
        .should("be.empty")
        .type("Invalid");
      cy.get('[data-qa="login-button"]').click();
      cy.get(".login-form > form > p")
        .invoke("text")
        .should("eq", "Your email or password is incorrect!");

      //Verify Login using invalid email and password
      cy.get('[data-qa="login-email"]')
        .clear()
        .should("be.empty")
        .type("Invalid");
      cy.get('[data-qa="login-password"]')
        .clear()
        .should("be.empty")
        .type("Invalid");
      cy.get('[data-qa="login-button"]').click();
      cy.wait(5000);
      cy.get(".login-form").should("be.visible");
      cy.log("Invalid Credentials");
    });
  });
