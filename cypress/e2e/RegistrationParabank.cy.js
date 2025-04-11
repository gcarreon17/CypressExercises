import { generateCustomerData } from '../support/utility';
describe('Parabank Registration', {testIsolation: false}, () => {
    //describe('Parabank Registration', () => {
    before(() => {
        cy.visit('https://parabank.parasoft.com')
    })

    it('Verify registration screen', () => {
        cy.contains('Register').should('be.visible').and('contain', 'Register')
        
    })

        //Register screen
    it('Verify Registration screen', () => {
        cy.contains('Register').click()
        cy.url().should('include', '/register.htm')
        cy.get('form > :nth-child(1) > b').should('be.visible').and('contain', 'Username')
        cy.get('form > :nth-child(2) > .input').should('be.visible').and('be.empty')
        cy.get('form > :nth-child(3)').should('be.visible').and('contain', 'Password')
        cy.get(':nth-child(1) > [align="right"] > b').should('be.visible').and('contain', 'First Name')
        cy.get(':nth-child(2) > [align="right"] > b').should('be.visible').and('contain', 'Last Name')
        cy.get(':nth-child(3) > [align="right"] > b').should('be.visible').and('contain', 'Address')
        cy.get(':nth-child(4) > [align="right"]').should('be.visible').and('contain', 'City')
        cy.get(':nth-child(5) > [align="right"]').should('be.visible').and('contain', 'State')  
        cy.get(':nth-child(6) > [align="right"] > b').should('be.visible').and('contain', 'Zip Code')
        cy.get(':nth-child(7) > [align="right"]').should('be.visible').and('contain', 'Phone')
        cy.get(':nth-child(8) > [align="right"] > b').should('be.visible').and('contain', 'SSN')   
        cy.get(':nth-child(11) > [align="right"] > b').should('be.visible').and('contain', 'Password')
        cy.get(':nth-child(12) > [align="right"] > b').should('be.visible').and('contain', 'Confirm')
        cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register')  
        cy.takeScreenshot("Register Screen")
    })   


        //Enter values in the Registration form
        //cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type('TestFirstName')
        //cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type('TestLastName')
        //cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type('TestAddress')
        //cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type('TestCity')
        //cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type('TestState')
        //cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type('12345')
        //cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type('1234567890')
        //cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type('123-45-6789')
        //cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type('TestPassword')
        //cy.get("#repeatedPassword").should('be.visible').and('be.empty').type('TestPassword')


        //Fill in the Registration form from fixture data
    // it('Fill in the Registration form', () => {
    //     cy.fixture('RegistrationData2').then((Userinput) => {
    //     cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(Userinput.FirstName)
    //     cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(Userinput.LastName)
    //     cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(Userinput.Address)
    //     cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(Userinput.City)
    //     cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(Userinput.State)
    //     cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(Userinput.ZipCode)
    //     cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(Userinput.PhoneNumber)
    //     cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(Userinput.SSN)
    //     cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(Userinput.Username)
    //     cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(Userinput.Password)
    //     cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(Userinput.Password)
    //     cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible').and('contain', 'Register')
    //     })
        

        // Fill in the Registration form from using utility.js
        it('Verify Successful Registration', () => {
            const Userinput =  generateCustomerData()
            cy.get("input[id='customer.firstName']").should('be.visible').and('be.empty').type(Userinput.FirstName)
            cy.get("input[id='customer.lastName']").should('be.visible').and('be.empty').type(Userinput.LastName)
            cy.get("input[id='customer.address.street']").should('be.visible').and('be.empty').type(Userinput.Address)
            cy.get("input[id='customer.address.city']").should('be.visible').and('be.empty').type(Userinput.City)
            cy.get("input[id='customer.address.state']").should('be.visible').and('be.empty').type(Userinput.State)
            cy.get("input[id='customer.address.zipCode']").should('be.visible').and('be.empty').type(Userinput.ZipCode)
            cy.get("input[id='customer.phoneNumber']").should('be.visible').and('be.empty').type(Userinput.PhoneNumber)
            cy.get("input[id='customer.ssn']").should('be.visible').and('be.empty').type(Userinput.SSN)
            cy.get("input[id='customer.username']").should('be.visible').and('be.empty').type(Userinput.Username)
            cy.get("input[id='customer.password']").should('be.visible').and('be.empty').type(Userinput.Password)
            cy.get('#repeatedPassword').should('be.visible').and('be.empty').type(Userinput.Password)
            cy.get('[colspan="2"] > .button').should('be.visible').and('contain', 'Register').click()
            cy.url().should('include', '/register.htm')
            cy.get('.title').should('contain', 'Welcome ' + Userinput.Username)
            cy.takeScreenshot("Filled Registration Form") 
        })

        it('Verify Logout', () => {
            cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible').and('contain', 'Log Out').click()
            cy.takeScreenshot("Logout") 
        })

        // Fill in the Registration form from using commands.js
        // it('Fill in the Registration form', () => {
        //         cy.fillRegistrationForm()
        //         })
    

       // 
         //   cy.get('#leftPanel > ul > :nth-child(8) > a').should('be.visible').and('contain', 'Log Out').click()
            //cy.get("a[href='logout.htm']").should('be.visible').and('contain', 'Log Out').click()
        })