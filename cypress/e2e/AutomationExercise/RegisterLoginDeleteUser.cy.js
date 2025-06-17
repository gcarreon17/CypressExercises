///<reference types = "cypress"/>

import { automationExerciseTestData } from '../../support/utils/automationExerciseUtils'

let testData;

describe("Register-Login-Delete User", { testIsolation: false }, () => {
  before(() => {
    testData = automationExerciseTestData();
    cy.clearBefore();
    cy.visit("https://www.automationexercise.com/");
    cy.url().should('eq', "https://www.automationexercise.com/");
    cy.title().should('eq', "Automation Exercise");
    cy.captureSnapshot('Redirection to Automation Exercise');
  });

  it("Verify successful assertion and Fill up Sign Up Page", () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').and('include.text', "Signup / Login").click();
    cy.get("img").should("be.visible").and("exist");
    cy.get(".signup-form > h2").should("be.visible");
    cy.get('[data-qa="signup-name"]').should("be.empty");
    cy.get('[data-qa="signup-email"]').should("be.empty");
    cy.get('[data-qa="signup-button"]').should("be.visible").and("be.enabled");
    cy.captureSnapshot('Sign up page')
  });


  //Data entry from fixture file
  //  cy.fixture("AutomationExerciseUser.json").then((Userdata) => {
  //   //"user" + faker.string.alpha(2) + "@test.com";
  //   cy.get('[data-qa="signup-name"]')
  //     .type(Userdata.Name)
  //     .should("have.value", Userdata.Name);
  //   cy.get('[data-qa="signup-email"]')
  //     .type(Userdata.EmailAddress)
  //     .should("have.value", Userdata.EmailAddress);


  it("Verify assertion and Fill up Sign Up Page", () => {
    cy.url().should("eq", "https://www.automationexercise.com/login");
    cy.contains("Signup / Login").click();
    cy.get(".signup-form > h2").should("be.visible");
    cy.get('[data-qa="signup-name"]').should("have.value", "");
    cy.get('[data-qa="signup-email"]').should("have.value", "");
    cy.get('[data-qa="signup-button"]').should("be.visible").and("be.enabled");
    cy.captureSnapshot("Sign Up Page is displayed");
    cy.get('[data-qa="signup-name"]').type(testData.signUpName);
    cy.get('[data-qa="signup-email"]').type(testData.signUpEmailAddress);
    cy.captureSnapshot("Filled up Sign Up Page");
    cy.get('[data-qa="signup-button"]').click();
    cy.captureSnapshot("Registration Page is displayed");
  });

  it("Verify assertion and Fill up Registration Page", () => {
    const rawTitle = testData.rawTitle;
    cy.contains("Enter Account Information").should("be.visible");
    cy.contains('Title').should('be.visible');
    //Title
    cy.contains('Mr.').should('be.visible').and('not.be.checked');
    cy.contains('Mrs.').should('be.visible').and('not.be.checked');
    cy.get('.clearfix')
      .find(`input[type="radio"][value="${rawTitle}"]`)
      .check()
      .should('be.checked');
    //Name
    cy.get('form > :nth-child(3) > label').invoke('text').should('eq', "Name *");
    cy.get('[data-qa="name"]').invoke('val')
      .then((enteredName) => {
        cy.log('Name is: ' + enteredName);
        expect(enteredName).to.equal(testData.signUpName);
      });
    //Email       
    cy.get('form > :nth-child(4) > label').invoke('text').should('eq', "Email *");
    cy.get('[data-qa="email"]').invoke('val')
      .then((enteredEmail) => {
        cy.log('Email is:' + enteredEmail)
        expect(enteredEmail).to.equal(testData.signUpEmailAddress);
      });
    //Password
    cy.get(':nth-child(5) > label').invoke('text').should('eq', "Password *");
    cy.get('[data-qa="password"]').should('be.visible').and('be.empty').and('be.enabled').type(testData.password);
    //Date of Birth
    cy.get(':nth-child(6) > label').invoke('text').should('eq', "Date of Birth");

    //DOB-Date
    cy.get('[data-qa="days"]').should('be.visible').invoke('text')
      .then((text) => {
        const cleanText = text.replace(/\s+/g, ' ').trim();
        expect(cleanText).to.contain('Day');
        cy.get('[data-qa="days"]').select(testData.day);
      });
    //DOB-Month
    cy.get('[data-qa="months"]').should('be.visible').invoke('text')
      .then((text) => {
        const cleanText = text.replace(/\s+/g, ' ').trim();
        expect(cleanText).to.contain('Month');
        cy.get('[data-qa="months"]').select(testData.month);
      });
    //DOB-Year
    cy.get('[data-qa="years"]').should('be.visible').invoke('text')
      .then((text) => {
        const cleanText = text.replace(/\s+/g, ' ').trim();
        expect(cleanText).to.contain('Year');
        cy.get('[data-qa="years"]').select(testData.year);
      });
    //Newsletter and Special offer
    cy.get(':nth-child(7) > label').invoke('text').should('eq', "Sign up for our newsletter!");
    cy.get(':nth-child(8) > label').invoke('text').should('eq', "Receive special offers from our partners!");
    cy.get('#newsletter').should('be.visible').debug().and('not.be.checked').and('be.enabled').check().should('be.checked');
    cy.get('#optin').should('be.visible').debug().and('not.be.checked').and('be.enabled').check().should('be.checked');
    cy.get('form > .title > b').invoke('text').should('eq', "Address Information");
    //First Name
    cy.get(':nth-child(11) > label').invoke('text').should('eq', "First name *");
    cy.get('[data-qa="first_name"]').should('be.visible').and('be.empty').and('be.enabled').type(testData.firstName).should('have.value', testData.firstName);
    //Last Name
    cy.get(':nth-child(12) > label').invoke('text').should('eq', "Last name *");
    cy.get('[data-qa="last_name"]').should('be.visible').and('be.empty').and('be.enabled').type(testData.lastName).should('have.value', testData.lastName);
    //Company
    cy.get(':nth-child(13) > label').invoke('text').should('eq', "Company");
    cy.get('[data-qa="company"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="company"]').type(testData.company);
    //Address
    cy.get('.inline-infos').invoke('text').should('eq', "(Street address, P.O. Box, Company name, etc.)");
    cy.get('[data-qa="address"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="address"]').type(testData.address);
    //Address2
    cy.get(':nth-child(15) > label').invoke('text').should('eq', "Address 2");
    cy.get('[data-qa="address2"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="address2"]').type(testData.address);
    //Country
    cy.contains('label', 'Country *');
    cy.get('[data-qa="country"]').should('be.visible').and('be.enabled');
    cy.get('[data-qa="country"]').invoke('text')
      .then((text) => {
        const cleanText = text.replace(/\s+/g, ' ').trim();
        expect(cleanText).to.contain('India');
        cy.get('[data-qa="country"]').type(testData.country);
      });
    //State
    cy.contains('label', 'State *');
    cy.get('[data-qa="state"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="state"]').type(testData.state);
    //City
    cy.contains('label', 'City *');
    cy.get('[data-qa="city"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="city"]').type(testData.city);
    //Zip Code
    cy.contains('label', 'Zipcode *');
    cy.get('[data-qa="zipcode"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="zipcode"]').type(testData.zipCode);
    //Mobile Number
    cy.contains('label', 'Mobile Number *');
    cy.get('[data-qa="mobile_number"]').should('be.visible').and('be.empty').and('be.enabled');
    cy.get('[data-qa="mobile_number"]').type(testData.mobileNumber);
    //Create Account button
    cy.get('[data-qa="create-account"]').should('have.text', "Create Account").and('be.enabled');
    cy.captureSnapshot("Verified Registration Page is displayed");
    cy.get('[data-qa="create-account"]').click()
  });

  it("Verify successful registration of user account", () => {
    cy.url().should('eq', 'https://www.automationexercise.com/account_created');
    cy.contains('Account Created!').should('be.visible').and('have.text', "Account Created!");
    cy.get('.col-sm-9 > :nth-child(2)').should('be.visible').and('have.text', "Congratulations! Your new account has been successfully created!");
    cy.get('.col-sm-9 > :nth-child(3)').should('be.visible').and('have.text', "You can now take advantage of member privileges to enhance your online shopping experience with us.")
    cy.get('[data-qa="continue-button"]').should('be.visible').and('not.have.class', 'disabled').click();
    cy.captureSnapshot("Successful registration of user account");
  });

  it('Verify User is redirected to Homepage', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('exist').invoke('text')
      .then(text => {
        expect(text.trim()).to.eq("Logout");
        cy.captureSnapshot("Redirected to Homepage");
      });
  });

  it("Verify Successful deletion of user account", () => {
    cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').and('contain.text', "Delete Account").click();
    cy.url().should('eq', 'https://www.automationexercise.com/delete_account');
    cy.get('b').should('be.visible').and('have.text', "Account Deleted!");
    cy.get('.col-sm-9 > :nth-child(2)').should('be.visible').and('have.text', "Your account has been permanently deleted!");
    cy.get('.col-sm-9 > :nth-child(3)').should('be.visible').and('have.text', "You can create new account to take advantage of member privileges to enhance your online shopping experience with us.");
    cy.captureSnapshot("Successful deletion of User Account");
    cy.get('[data-qa="continue-button"]').should('be.visible').and('contain.text', 'Continue').click();
  });
});