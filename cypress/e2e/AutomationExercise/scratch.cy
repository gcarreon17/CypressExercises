//Define username variable
let nomUsername = "Tester6";
//Enter username and validate
cy.get('[data-qa="signup-name"]').type(nomUsername)
//Ensure the input field has the correct value
.should('have.value', nomUsername);

//Define email variable
let nomEmail = "test6@email.com"
//Enter email and validate
//cy.get('[data-qa="signup-email"]').type("test6@email.com")
Ensure the input field has the correct value
//.should('have.value', nomEmail);

//import { faker } from "@faker-js/faker";


//cy.xpath("//u[normalize-space()='Test Case 1: Register User']")
      .should("be.visible")
      .should("contain", "Test Case 1: Register User");