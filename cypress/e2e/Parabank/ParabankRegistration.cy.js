///<reference types = "cypress"/>
import {generateCustomerData} from '../../support/utility';
import ParabankRegistrationPage from '../../support/pages/ParabankRegistration.pages.js';

describe('Parabank Registration', {testIsolation: false}, () => {
    before(() => {
        cy.clearBefore();
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
        cy.url().should('contain', '/register.htm');
        cy.title().should('contain', 'ParaBank | Register for Free Online Account Access');
        cy.takeScreenshot('Redirection to Parabank Registration Page');
        cy.contains('Register').click();
        })
        const Userinput = generateCustomerData()

    it('Verify registration form', () => {
        ParabankRegistrationPage.fillRegistrationForm();
        cy.takeScreenshot("Register Screen");
        // cy.get(':nth-child(1) > [align="right"] > b').should('be.visible').and('contain', 'First Name');
        // cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').and('have.text', '');
        // cy.get(':nth-child(2) > [align="right"] > b').should('be.visible').and('contain', 'Last Name');
        // cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').and('have.text', '');
        // cy.get(':nth-child(3) > [align="right"] > b').should('be.visible').and('contain', 'Address');
        // cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').and('have.text', '');
        // cy.get(':nth-child(4) > [align="right"] > b').should('be.visible').and('contain', 'City');
        // cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').and('have.text', '');
        // cy.get(':nth-child(5) > [align="right"] > b').should('be.visible').and('contain', 'State');
        // cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').and('have.text', '');
        // cy.get(':nth-child(6) > [align="right"] > b').should('be.visible').and('contain', 'Zip Code');
        // cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').and('have.text', '');
        // cy.get(':nth-child(7) > [align="right"] > b').should('be.visible').and('contain', 'Phone');
        // cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').and('have.text', '');                
        // cy.get(':nth-child(8) > [align="right"] > b').should('be.visible').and('contain', 'SSN');
        // cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').and('have.text', '');
        // cy.get(':nth-child(10) > [align="right"] > b').should('be.visible').and('contain', 'Username');
        // cy.get("input[id='customer.username']").should('be.visible').and('be.empty').and('have.text', '');
        // cy.get(':nth-child(11) > [align="right"] > b').should('be.visible').and('contain', 'Password');
        // cy.get("input[id='customer.password']").should('be.visible').and('be.empty').and('have.text', '');
        // cy.get(':nth-child(12) > [align="right"] > b').should('be.visible').and('contain', 'Confirm');
        // cy.get('#repeatedPassword').should('be.visible').and('be.empty').and('have.text', '');
        // cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register');
    })


        //Enter default values in the Registration form
    // it('Fill in the Registration form', () => {
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
    //     cy.takeScreenshot("Filled Registration Form") ;
    //     })
    


        //Fill in the Registration form from fixture data
    // it('Fill in the Registration form', () => {
    //      cy.fixture('RegistrationData2').then((Userinput) => {
    //      cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(Userinput.FirstName);
    //      cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(Userinput.LastName);
    //      cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(Userinput.Address);
    //      cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(Userinput.City);
    //      cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(Userinput.State);
    //      cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(Userinput.ZipCode);
    //      cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(Userinput.PhoneNumber);
    //      cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(Userinput.SSN);
    //      cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(Userinput.Username);
    //      cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(Userinput.Password);
    //      cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(Userinput.Password);
    //      cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
    //      cy.url().should('contain', '/register.htm');
    //      cy.get('.title').should('contain', 'Welcome ' + Userinput.Username);
    //      cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
    //      cy.takeScreenshot("Filled Registration Form") ;
    //     })
        

        

        //Fill in the Registration form from using utility.js
    // it('Verify Successful Registration', () => {
    //     const Userinput =  generateCustomerData()
    //     cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(Userinput.FirstName);
    //     cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(Userinput.LastName);
    //     cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(Userinput.Address);
    //     cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(Userinput.City);
    //     cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(Userinput.State);
    //     cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(Userinput.ZipCode);
    //     cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(Userinput.PhoneNumber);
    //     cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(Userinput.SSN);
    //     cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(Userinput.Username);
    //     cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(Userinput.Password);
    //     cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(Userinput.Password);
    //     cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click();
    //     cy.url().should('include', '/register.htm');
    //     cy.get('.title').should('contain', 'Welcome ' + Userinput.Username);
    //     cy.get('#rightPanel > p').should('be.visible').and('contain', 'Your account was created successfully. You are now logged in.');
    //     cy.takeScreenshot("Filled Registration Form") ;
    //    })

    
       // Fill in the Registration form from using commands.js
    // it('Fill in the Registration form', () => {
    //     cy.fillRegistrationForm() ;
    //     cy.takeScreenshot("Filled Registration Form");
    // });
    

        // Fill in the Registration form using page object model
    it('Fill in the Registration form', () => {
        ParabankRegistrationPage.fillFormWithData(Userinput);
        cy.takeScreenshot("Filled Registration Form");
    });


    it('Verify Logout', () => {
        cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible').and('contain', 'Log Out').click();
        cy.url().should('contain', '/index.htm');
        cy.get('h2').should('be.visible').and('contain', 'Customer Login');
        cy.takeScreenshot("Logout");
        })
})