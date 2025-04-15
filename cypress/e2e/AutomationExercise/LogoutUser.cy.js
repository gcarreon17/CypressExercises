/// <reference types="cypress" />

describe("Logout User", () => {
  it("Verify Successful User Logout", () => {
    //Navigate to URL
    cy.visit("https://www.automationexercise.com");
    cy.wait(5000);
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify homepage is displayed
    cy.get(".active > :nth-child(1) > h1").should("be.visible");

    //Click signup link
    cy.contains("Signup / Login").click();
    cy.url().should("eq", "https://www.automationexercise.com/login");

    //Verify signup is displayed
    cy.get(".signup-form > h2").should("be.visible");

    var Name = Math.random().toString(36).substring(2, 9);
    var EmailAddress = Name + "@test.com";
    cy.get('[data-qa="signup-name"]').type(Name).should("have.value", Name);
    cy.get('[data-qa="signup-email"]')
      .type(EmailAddress)
      .should("have.value", EmailAddress);

    //Click signup button
    cy.get('[data-qa="signup-button"]').click();

    //Verify Account Information screen is visible
    cy.contains("Enter Account Information").should("be.visible");

    //Fill details: Title, Name, Email, Password, Date of birth
    cy.get("#id_gender1").should("be.visible");
    cy.get("#id_gender2").should("be.visible");
    cy.get("#id_gender1").should("not.be.checked");
    cy.get("#id_gender2").should("not.be.checked");

    cy.get("#id_gender1").check().should("be.checked");
    cy.get("#id_gender2").should("not.be.checked");
    cy.get("#id_gender2").check().should("be.checked");
    cy.get("#id_gender1").should("not.be.checked");

    //check if matched with name and email entered in Signup screen
    cy.get('[data-qa="name"]').should("have.value", Name);
    cy.get('[data-qa="email"]').should("have.value", EmailAddress);
    cy.get('[data-qa="password"]')
      .type("Password")
      .should("have.value", "Password");

    //Date of Birth
    cy.get('[data-qa="days"]').select("5");
    cy.get('[data-qa="months"]').select("5");
    cy.get('[data-qa="years"]').select("2000");

    //Select newsletter subscription
    cy.get("#newsletter").should("be.visible").check();
    //Receive special offers from our partners
    cy.get("#optin").should("be.visible").check();

    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').should("be.visible");
    cy.get('[data-qa="last_name"]').should("be.visible");
    cy.get('[data-qa="company"]').should("be.visible");
    cy.get('[data-qa="address"]').should("be.visible");
    cy.get('[data-qa="address2"]').should("be.visible");
    cy.get('[data-qa="country"]').should("be.visible");
    cy.get('[data-qa="state"]').should("be.visible");
    cy.get('[data-qa="city"]').should("be.visible");
    cy.get('[data-qa="zipcode"]').should("be.visible");
    cy.get('[data-qa="mobile_number"]').should("be.visible");

    cy.fixture("AutomationExerciseAddress.json").then((Addressdata) => {
      cy.get('[data-qa="first_name"]')
        .type(Addressdata.FirstName)
        .should("have.value", Addressdata.FirstName);
      cy.get('[data-qa="last_name"]')
        .type(Addressdata.LastName)
        .should("have.value", Addressdata.LastName);
      cy.get('[data-qa="company"]')
        .type(Addressdata.Company)
        .should("have.value", Addressdata.Company);
      cy.get('[data-qa="address"]')
        .type(Addressdata.Address)
        .should("have.value", Addressdata.Address);
      cy.get('[data-qa="address2"]')
        .type(Addressdata.Address2)
        .should("have.value", Addressdata.Address2);
      cy.get('[data-qa="country"]')
        .select("Canada")
        .should("have.value", "Canada");
      cy.get('[data-qa="state"]')
        .type(Addressdata.State)
        .should("have.value", Addressdata.State);
      cy.get('[data-qa="city"]')
        .type(Addressdata.City)
        .should("have.value", Addressdata.City);
      cy.get('[data-qa="zipcode"]')
        .type(Addressdata.Zipcode)
        .should("have.value", Addressdata.Zipcode);
      cy.get('[data-qa="mobile_number"]')
        .type(Addressdata.MobileNumber)
        .should("have.value", Addressdata.MobileNumber);

      //Click Create account button
      cy.get('[data-qa="create-account"]').click();

      //Verify Successful registration message
      cy.contains("Account Created!").should("have.text", "Account Created!");

      //Click Continue button
      cy.get('[data-qa="continue-button"]').click();

      //Verify Logged in as is correct
      cy.get(":nth-child(10) > a")
        .should("be.visible")
        .should("contain", `Logged in as ${Name}`);

      //Logout
      cy.contains("Logout").click();

      //Returned to Homepage
      cy.get(".login-form > h2").should("be.visible");
      cy.url().should("eq", "https://www.automationexercise.com/login");
    });
  });
});
