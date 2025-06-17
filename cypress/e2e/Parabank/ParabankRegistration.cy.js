///<reference types="cypress" />

import { parabankRegTestData } from "../../support/utils/parabankUtils";

let testData;

describe('Parabank Registration', { testIsolation: false }, () => {
    before(() => {
        testData = parabankRegTestData();
        cy.clearBefore();
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        cy.url().should('contain', '/register.htm');
        cy.title().should('contain', 'ParaBank | Register for Free Online Account Access');
        cy.captureSnapshot('Redirection to Parabank Registration Page');
    });


    it('Verify display of blank Registration Page', () => {
        cy.contains('Register').click();
        cy.get(':nth-child(1) > [align="right"] > b').should('be.visible').and('contain', 'First Name');
        cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').and('have.text', '');
        cy.get(':nth-child(2) > [align="right"] > b').should('be.visible').and('contain', 'Last Name');
        cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').and('have.text', '');
        cy.get(':nth-child(3) > [align="right"] > b').should('be.visible').and('contain', 'Address');
        cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').and('have.text', '');
        cy.get(':nth-child(4) > [align="right"] > b').should('be.visible').and('contain', 'City');
        cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').and('have.text', '');
        cy.get(':nth-child(5) > [align="right"] > b').should('be.visible').and('contain', 'State');
        cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').and('have.text', '');
        cy.get(':nth-child(6) > [align="right"] > b').should('be.visible').and('contain', 'Zip Code');
        cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').and('have.text', '');
        cy.get(':nth-child(7) > [align="right"] > b').should('be.visible').and('contain', 'Phone');
        cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').and('have.text', '');
        cy.get(':nth-child(8) > [align="right"] > b').should('be.visible').and('contain', 'SSN');
        cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').and('have.text', '');
        cy.get(':nth-child(10) > [align="right"] > b').should('be.visible').and('contain', 'Username');
        cy.get("input[id='customer.username']").should('be.visible').and('be.empty').and('have.text', '');
        cy.get(':nth-child(11) > [align="right"] > b').should('be.visible').and('contain', 'Password');
        cy.get("input[id='customer.password']").should('be.visible').and('be.empty').and('have.text', '');
        cy.get(':nth-child(12) > [align="right"] > b').should('be.visible').and('contain', 'Confirm');
        cy.get('#repeatedPassword').should('be.visible').and('be.empty').and('have.text', '');
        cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register');
    });

     // it('Fill in Registration form by typing', () => {
    //     cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type('TestFirstName');
    //     cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type('TestLastName');
    //     cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type('TestAddress');
    //     cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type('TestCity');
    //     cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type('TestState');
    //     cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type('12345');
    //     cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type('1234567890');
    //     cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type('123-45-6789');
    //     cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type('TestUsername');
    //     cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type('TestPassword');
    //     cy.get('#repeatedPassword').should('be.visible').and('be.empty').type('TestPassword');
    //     cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
    //     cy.url().should('contain', '/register.htm');
    //     cy.get('.title').should('contain', 'Welcome ' + 'TestUsername');
    //     cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
    //     cy.captureSnapshot("Filled Registration Form by typing") ;
    //     });



    // it('Fill in the Registration form from fixture data', () => {
    //     cy.fixture('RegistrationData2').then((userInput) => {
    //         cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(userInput.FirstName);
    //         cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(userInput.LastName);
    //         cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(userInput.Address);
    //         cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(userInput.City);
    //         cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(userInput.State);
    //         cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(userInput.ZipCode);
    //         cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(userInput.PhoneNumber);
    //         cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(userInput.SSN);
    //         cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(userInput.Username);
    //         cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(userInput.Password);
    //         cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(userInput.Password);
    //         cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
    //         cy.url().should('contain', '/register.htm');
    //         cy.get('.title').should('contain', 'Welcome ' + userInput.Username);
    //         cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
    //         cy.captureSnapshot("Filled Registration Form from fixture data");
    //     });
    // });


    // it('Verify Successful Registration using utility.js', () => {
    //     const userInput =  parabankRegTestData()
    //     cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(userInput.FirstName);
    //     cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(userInput.LastName);
    //     cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(userInput.Address);
    //     cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(userInput.City);
    //     cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(userInput.State);
    //     cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(userInput.ZipCode);
    //     cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(userInput.PhoneNumber);
    //     cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(userInput.SSN);
    //     cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(userInput.Username);
    //     cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(userInput.Password);
    //     cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(userInput.Password);
    //     cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
    //     cy.url().should('include', '/register.htm');
    //     cy.get('.title').should('contain', 'Welcome ' + userInput.Username);
    //     cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
    //     cy.captureSnapshot("Filled Registration Form using utility.js") ;
    //    });


    

    // Fill in the Registration form from commands.js
    it('Fill in the Registration form from commands.js', () => {
        cy.fillParabankRegistrationForm() ;
        cy.captureSnapshot("Filled Registration Form from commands.js");
    });


    it('Verify Logout', () => {
        cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible').and('contain', 'Log Out').click();
        cy.url().should('contain', '/index.htm');
        cy.get('h2').should('be.visible').and('contain', 'Customer Login');
        cy.captureSnapshot("Logout");
    });
});
