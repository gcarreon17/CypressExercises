class ParabankRegistrationPage {
    // Label selectors
    firstNameLabel = ':nth-child(1) > [align="right"] > b';
    lastNameLabel = ':nth-child(2) > [align="right"] > b';
    addressLabel = ':nth-child(3) > [align="right"] > b';
    cityLabel = ':nth-child(4) > [align="right"] > b';
    stateLabel = ':nth-child(5) > [align="right"] > b';
    zipCodeLabel = ':nth-child(6) > [align="right"] > b';
    phoneLabel = ':nth-child(7) > [align="right"] > b';
    ssnLabel = ':nth-child(8) > [align="right"] > b';
    usernameLabel = ':nth-child(10) > [align="right"] > b';
    passwordLabel = ':nth-child(11) > [align="right"] > b';
    confirmLabel = ':nth-child(12) > [align="right"] > b';

    // Input selectors
    firstNameInput = "input[id='customer.firstName']";
    lastNameInput = "input[id='customer.lastName']";
    addressInput = "input[id='customer.address.street']";
    cityInput = "input[id='customer.address.city']";
    stateInput = "input[id='customer.address.state']";
    zipCodeInput = "input[id='customer.address.zipCode']";
    phoneNumberInput = "input[id='customer.phoneNumber']";
    ssnInput = "input[id='customer.ssn']";
    usernameInput = "input[id='customer.username']";
    passwordInput = "input[id='customer.password']";
    confirmInput = "input[id='repeatedPassword']";
    registerButton = '[colspan="2"] > .button';

  
    // Method to assert label and empty input field visibility
    assertParabankRegForm() {
    cy.get(this.firstNameLabel).should("be.visible").and("contain", "First Name");
    cy.get(this.firstNameInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.lastNameLabel).should("be.visible").and("contain", "Last Name");
    cy.get(this.lastNameInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.addressLabel).should("be.visible").and("contain", "Address");
    cy.get(this.addressInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.cityLabel).should("be.visible").and("contain", "City");
    cy.get(this.cityInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.stateLabel).should("be.visible").and("contain", "State");
    cy.get(this.stateInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.zipCodeLabel).should("be.visible").and("contain", "Zip Code");
    cy.get(this.zipCodeInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.phoneLabel).should("be.visible").and("contain", "Phone");
    cy.get(this.phoneNumberInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.ssnLabel).should("be.visible").and("contain", "SSN");
    cy.get(this.ssnInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.usernameLabel).should("be.visible").and("contain", "Username");
    cy.get(this.usernameInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.passwordLabel).should("be.visible").and("contain", "Password");
    cy.get(this.passwordInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.confirmLabel).should("be.visible").and("contain", "Confirm");
    cy.get(this.confirmInput).should("be.visible").and("be.empty").and("have.text", "");
    cy.get(this.registerButton).should("be.visible").and("contain", "Register");
    }

    // Method to fill in the registration form with data
    fillFormWithData(parabankRegTestData) {
      cy.get(this.firstNameInput).type(parabankRegTestData.FirstName);
      cy.get(this.lastNameInput).type(parabankRegTestData.LastName);
      cy.get(this.addressInput).type(parabankRegTestData.Address);
      cy.get(this.cityInput).type(parabankRegTestData.City);
      cy.get(this.stateInput).type(parabankRegTestData.State);
      cy.get(this.zipCodeInput).type(parabankRegTestData.ZipCode);
      cy.get(this.phoneNumberInput).type(parabankRegTestData.PhoneNumber);
      cy.get(this.ssnInput).type(parabankRegTestData.SSN);
      cy.get(this.usernameInput).type(parabankRegTestData.Username);
      cy.get(this.passwordInput).type(parabankRegTestData.Password);
      cy.get(this.confirmInput).type(parabankRegTestData.Password);
      cy.get(this.registerButton).click();
    }
  }
  
  export default new ParabankRegistrationPage();
  