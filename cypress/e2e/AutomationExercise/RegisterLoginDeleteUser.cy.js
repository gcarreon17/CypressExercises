///<reference types = "cypress"/>
import {automationExerciseData} from '../../support/utility';
describe("RegisterLoginDeleteUser", {testIsolation: false}, () => {
  before(() => {
    cy
    cy.visit("https://www.automationexercise.com/");
    cy.url().should("eq", "https://www.automationexercise.com/");   
    cy.title().should("eq", "Automation Exercise");  
    cy.takeScreenshot('Redirection to Automation Exercise')
  })
  
  it("Verify Sign up page", () => {
  //Verify signup page is displayed
    cy.contains("Signup / Login").click();
    cy.get("img").should("be.visible").and("exist");
    cy.get(".signup-form > h2").should("be.visible");
    cy.get('[data-qa="signup-name"]').should("be.empty");
    cy.get('[data-qa="signup-email"]').should("be.empty");
    cy.get('[data-qa="signup-button"]').should("be.visible").and("be.enabled");
    cy.takeScreenshot('Sign up page')
  })
  
  
  
  //Data entry from fixture file
  //  cy.fixture("AutomationExerciseUser.json").then((Userdata) => {
  //   //"user" + faker.string.alpha(2) + "@test.com";
  //   cy.get('[data-qa="signup-name"]')
  //     .type(Userdata.Name)
  //     .should("have.value", Userdata.Name);
  //   cy.get('[data-qa="signup-email"]')
  //     .type(Userdata.EmailAddress)
  //     .should("have.value", Userdata.EmailAddress);


   //Verify fields and data entry from utility file
    it('Verify Successful Fill-up Signup form', () => { 
      const Userinput = automationExerciseData()
      cy.get('[data-qa="signup-name"]').type(Userinput.Name).should("have.value", Userinput.Name);
      cy.get('[data-qa="signup-email"]').type(Userinput.EmailAddress).should("have.value", Userinput.EmailAddress);
      cy.get('[data-qa="signup-button"]').click();
    
     //Gender
       cy.get("#id_gender1").should("be.visible");
       cy.get("#id_gender2").should("be.visible");
       cy.get("#id_gender1").should("not.be.checked");
       cy.get("#id_gender2").should("not.be.checked");
      
       cy.get("#id_gender1").check().should("be.checked");
       cy.get("#id_gender2").should("not.be.checked");
       cy.get("#id_gender2").check().should("be.checked");
       cy.get("#id_gender1").should("not.be.checked");

     //check if matched with name and email entered in Signup screen
       cy.get('[data-qa="name"]').should("have.value", Userinput.Name);
       cy.get('[data-qa="email"]').should("have.value", Userinput.EmailAddress);
       cy.get('[data-qa="password"]').should("be.empty").type(Userinput.Password).should("have.value", Userinput.Password);
     //Select newsletter subscription
       cy.get("#newsletter").should("be.visible").check();
     //Receive special offers from our partners
       cy.get("#optin").should("be.visible").check();
     //Date of Birth - Day
       cy.get('[data-qa="days"]').should('be.visible').invoke('text').should('contain', 'Day');
       cy.get('[data-qa="days"]').select(Userinput.day).find('option:selected').should('have.text', Userinput.day); 
     //Date of Birth - Month   
       cy.get('[data-qa="months"]').should("be.visible").invoke('text').should('contain', 'Month');
       cy.get('[data-qa="months"]').select(Userinput.month).find('option:selected').should('have.text', Userinput.month); 
     //Date of Birth - Year    
       cy.get('[data-qa="years"]').should("be.visible").invoke('text').should('contain', 'Year')
       cy.get('[data-qa="years"]').select(Userinput.year).find('option:selected').should('have.text', Userinput.year); 
     //First Name
       cy.get('[data-qa="first_name"]').should("be.visible").and("be.empty");
       cy.get('[data-qa="first_name"]').type(Userinput.FirstName).should("have.value", Userinput.FirstName);
     //Last Name
       cy.get('[data-qa="last_name"]').should("be.visible").and("be.empty");
       cy.get('[data-qa="last_name"]').type(Userinput.LastName ).should("have.value", Userinput.LastName);
     //Company
       cy.get('[data-qa="company"]').should("be.visible").and("be.empty");
       cy.get('[data-qa="company"]').type(Userinput.Company).should("have.value", Userinput.Company);
     //Address1
       cy.get('[data-qa="address"]').should("be.visible").and("be.empty");
       cy.get('[data-qa="address"]').type(Userinput.Address).should("have.value", Userinput.Address);
     //Address2
       cy.get('[data-qa="address2"]').should("be.visible").and("be.empty");
       cy.get('[data-qa="address2"]').type(Userinput.Address).should("have.value", Userinput.Address);
     //Country
       cy.get('[data-qa="country"]').should("be.visible").invoke('text').should('contain', 'India')
       cy.get('[data-qa="country"]').select(Userinput.Country).find('option:selected').should('have.text', Userinput.Country);
     //State
       cy.get('[data-qa="state"]').should("be.visible").and("be.empty");
       cy.get('[data-qa="state"]').type(Userinput.State).should("have.value", Userinput.State);
     //City
       cy.get('[data-qa="city"]').should("be.visible").and("be.empty");
       cy.get('[data-qa="city"]').type(Userinput.City).should("have.value", Userinput.City);
     //Zip Code
       cy.get('[data-qa="zipcode"]').should("be.visible").and("be.empty");
       cy.get('[data-qa="zipcode"]').type(Userinput.ZipCode).should("have.value", Userinput.ZipCode);
     //Mobile Number
       cy.get('[data-qa="mobile_number"]').should("be.visible").and("be.empty");
       cy.get('[data-qa="mobile_number"]').type(Userinput.MobileNumber).should("have.value", Userinput.MobileNumber);
     //Click Create account button
       cy.get('[data-qa="create-account"]').click();
       cy.takeScreenshot('Filled up Sign up page');
    });

      it('Verify Successful Registration', () => {
     //Verify Successful registration message
       cy.contains("Account Created!").should('be.visible').should("have.text", "Account Created!");
       //cy.get('[data-qa="continue-button"]').should('be.visible').and('be.enabled').
       cy.get('[data-qa="continue-button"]').click();
       cy.takeScreenshot('Successful registration');
    });
       
      it('Verify Successful Log-out', () => { 
       cy.get('.shop-menu > .nav > :nth-child(4) > a').should('exist').invoke('text')
       .then(text => {
        expect(text.trim()).to.eq('Logout');
       cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
       cy.takeScreenshot('Logged out');
      });
    });
  });
