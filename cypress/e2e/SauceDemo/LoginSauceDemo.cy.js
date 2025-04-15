describe('Verify successful redirection to website', () => {
  it('Verify redirection to Sauce Demo Website', () => {
    cy.visit('https://www.saucedemo.com')
    cy.title().should('eq', 'Swag Labs')
    cy.get('.login_logo').should('be.visible')
    cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled')
    cy.takeScreenshot("Redirect to Sauce Demo Website")
  })

  it('Verify invalid login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("invalid")
    cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
      .and ('contain', 'Epic sadface: Username and password do not match any user in this service')
    cy.takeScreenshot("Invalid Login") 
  })    

  it('Verify valid login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.title().should('eq', 'Swag Labs')
    cy.get('.login_logo').should('be.visible')
    cy.get('[data-test="login-button"]').should('be.visible').and('be.enabled')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
    cy.takeScreenshot("Valid Login1") 
    })
  

  it('Verify logout', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.takeScreenshot("Logout")
   }) 
})