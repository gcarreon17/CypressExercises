
class SignUpPage {
  // Button selectors
  signUpButton = '[data-qa="signup-button"]';

  // Field selectors
  signUpNameField = '[data-qa="signup-name"]';
  emailAddressField = '[data-qa="signup-email"]';

  // Assert the sign-up form is displayed correctly
  assertSignUpForm() {
    cy.get(this.signUpNameField).should("be.visible").and("have.attr", "placeholder", "Name").and("have.value", "");
    cy.get(this.emailAddressField).should("be.visible").and("have.attr", "placeholder", "Email Address").and("have.value", "");
    cy.get(this.signUpButton).should("be.visible").and("have.text", "Signup").and("be.enabled");
    cy.screenshot("Display of blank Sign Page");
  }

  //Fill the signup form with provided data
  fillSignUpForm() {
    cy.get(this.signUpNameField).type(data.signUpName);
    cy.get(this.emailAddressField).type(data.emailAddress);
    cy.screenshot("Filled up User SignUp Page");
    cy.get(this.signUpButton).click();
    cy.screenshot("Display of blank Sign Up Page");
  }
}

export const signUpPage = new SignUpPage();



class RegistrationPage {
  //Label selectors
  titleLabel = '.clearfix > :nth-child(1)';
  genderMrLabel = ':nth-child(3) > .top';
  genderMrsLabel = ':nth-child(4) > .top';
  nameLabel = 'form > :nth-child(3) > label';
  emailAddressLabel2 = 'form > :nth-child(4) > label';
  passwordLabel = 'form > :nth-child(5) > label';
  dobLabel = 'form > :nth-child(6) > label';
  newsletterLabel = 'form > :nth-child(7) > label';
  receiveSpecialOffersLabel = 'form > :nth-child(8) > label';
  optinLabel = 'form > :nth-child(8) > label';
  firstNameLabel = 'form > :nth-child(11) > label';
  lastNameLabel = 'form > :nth-child(12) > label';
  companyLabel = 'form > :nth-child(13) > label';
  addressLabel = 'form > :nth-child(14) > label';
  address2Label = 'form > :nth-child(15) > label';
  countryLabel = 'form > :nth-child(16) > label';
  stateLabel = 'form > :nth-child(17) > label';
  cityLabel = 'form > :nth-child(18) > label';
  zipCodeLabel = 'form > :nth-child(19) > label';
  mobileNumberLabel = 'form > :nth-child(20) > label';

  // Field selectors
  titleField = '.clearfix';
  mrRadioButton = '#id_gender1';
  mrsRadioButton = '#id_gender2';
  nameField = '[data-qa="name"]';
  emailAddressField = '[data-qa="email"]';
  passwordfield = '[data-qa="password"]';
  dayField = '[data-qa="days"]';
  monthField = '[data-qa="months"]';
  yearField = '[data-qa="years"]';
  newsletterCheckbox = '#newsletter';
  receiveSpecialOffersCheckbox = '#optin';
  firstNameField = '[data-qa="first_name"]';
  lastNameField = '[data-qa="last_name"]';
  companyField = '[data-qa="company"]';
  addressField = '[data-qa="address"]';
  address2Field = '[data-qa="address2"]';
  countryField = '[data-qa="country"]';
  stateField = '[data-qa="state"]';
  cityField = '[data-qa="city"]';
  zipCodeField = '[data-qa="zipcode"]';
  mobileNumberField = '[data-qa="mobile_number"]';

  //Button selectors
  createButtonLabel = '[data-qa="create-account"]';



  // Assert the registration form is displayed correctly
  assertRegistrationForm() {
    cy.get(this.titleLabel).should("be.visible").and("have.text", "Title");
    cy.get(this.genderMrLabel).should("be.visible").invoke('text').then((text) => {
      expect(text.trim()).to.equal('Mr.');
    });
    cy.get(this.genderMrsLabel).should("be.visible").invoke('text').then((text) => {
      expect(text.trim()).to.equal('Mrs.');
    });
    cy.get(this.nameLabel).should("be.visible").and("have.text", "Name *");
    cy.get(this.emailAddressLabel2).should("be.visible").and("have.text", "Email *");
    cy.get(this.passwordLabel).should("be.visible").and("have.text", "Password *");
    cy.get(this.dobLabel).should("be.visible").and("have.text", "Date of Birth");
    cy.get(this.newsletterLabel).should("be.visible").and("have.text", "Sign up for our newsletter!");
    cy.get(this.receiveSpecialOffersLabel).should("be.visible").and("have.text", "Receive special offers from our partners!");
    cy.get(this.firstNameLabel).should("be.visible").and("have.text", "First name *");
    cy.get(this.lastNameLabel).should("be.visible").and("have.text", "Last name *");
    cy.get(this.companyLabel).should("be.visible").and("have.text", "Company");
    cy.get(this.addressLabel).should("be.visible").and("have.text", "Address * (Street address, P.O. Box, Company name, etc.)");
    cy.get(this.address2Label).should("be.visible").and("have.text", "Address 2");
    cy.get(this.countryLabel).should("be.visible").invoke('text').then((text) => {
      expect(text.trim()).to.eq('Country *');
    });
    cy.get(this.stateLabel).should("be.visible").invoke('text').then((text) => {
      expect(text.trim()).to.eq('State *');
    });
    cy.get(this.cityLabel).should("be.visible").invoke('text').then((text) => {
      expect(text.trim()).to.eq('City *');
    });
    cy.get(this.zipCodeLabel).should("be.visible").invoke('text').then((text) => {
      expect(text.trim()).to.eq('Zipcode *');
    });
    cy.get(this.mobileNumberLabel).should("be.visible").invoke('text').then((text) => {
      expect(text.trim()).to.eq('Mobile Number *')
    });

    cy.get(this.mrRadioButton).should('be.visible').and('not.be.checked');
    cy.get(this.mrsRadioButton).should('be.visible').and('not.be.checked');


    cy.get(this.passwordfield).should("be.visible").and("have.value", "");
    cy.get(this.dayField).should("be.visible").and("have.value", "").and("be.enabled");
    cy.get(this.monthField).should("be.visible").and("have.value", "").and("be.enabled");
    cy.get(this.yearField).should("be.visible").and("have.value", "").and("be.enabled");
    cy.get(this.newsletterCheckbox).should("be.visible").and("not.be.checked");
    cy.get(this.receiveSpecialOffersCheckbox).should("be.visible").and("not.be.checked");
    cy.get(this.firstNameField).should("be.visible").and("have.value", "");
    cy.get(this.lastNameField).should("be.visible").and("have.value", "");
    cy.get(this.companyField).should("be.visible").and("have.value", "");
    cy.get(this.addressField).should("be.visible").and("have.value", "");
    cy.get(this.address2Field).should("be.visible").and("have.value", "");
    cy.get(this.countryField).should("be.visible").and("have.value", "India");
    cy.get(this.stateField).should("be.visible").and("have.value", "");
    cy.get(this.cityField).should("be.visible").and("have.value", "");
    cy.get(this.zipCodeField).should("be.visible").and("have.value", "");
    cy.get(this.mobileNumberField).should("be.visible").and("have.value", "");

    cy.screenshot("Display of blank Registration Page");
  }


  // Fill the registration form with test data
  fillRegistrationForm(data) {
    // Generate a random boolean value
    const isMale = Math.random() < 0.5; // True for 'Mr.', False for 'Mrs.'
    if (isMale) {
      cy.get(this.mrRadioButton).click().should('be.checked');
      cy.get(this.mrsRadioButton).should('not.be.checked');
    } else {
      cy.get(this.mrsRadioButton).click().should('be.checked');
      cy.get(this.mrRadioButton).should('not.be.checked');
    }

    cy.get(this.nameField).invoke('val')
      .then((enteredName) => {
        cy.log('Name is: ' + enteredName);
        expect(enteredName).to.equal(testData.signUpName);
      });
    cy.get(this.emailAddressField).invoke('val')
      .then((enteredEmail) => {
        cy.log('Email is:' + enteredEmail)
        expect(enteredEmail).to.equal(testData.signUpEmailAddress);
      });

    cy.get(this.passwordfield).type(data.password);
    cy.get(this.dayField).select(data.day);
    cy.get(this.monthField).select(data.month);
    cy.get(this.yearField).select(data.year);
    cy.get(this.newsletterCheckbox).check().should("be.checked");
    cy.get(this.receiveSpecialOffersCheckbox).check().should("be.checked");
    cy.get(this.firstNameField).type(data.firstName);
    cy.get(this.lastNameField).type(data.lastName);
    cy.get(this.companyField).type(data.company);
    cy.get(this.addressField).type(data.address);
    cy.get(this.address2Field).type(data.address);
    cy.get(this.countryField).select(data.country);
    cy.get(this.stateField).type(data.state);
    cy.get(this.cityField).type(data.city);
    cy.get(this.zipCodeField).type(data.zipCode);
    cy.get(this.mobileNumberField).type(data.mobileNumber);
    cy.get(this.createButtonLabel).should("be.visible").and("have.text", "Create Account").and("be.enabled");
    //cy.get(this.createButtonLabel).click();
    cy.screenshot("Filled up User Registration Page");
  }
}

export const registrationPage = new RegistrationPage();