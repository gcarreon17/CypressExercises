describe('Login', () => {
  it('Verify redirection to Sauce Demo Website', () => {
    cy.visit('https://www.saucedemo.com')
    cy.url().should('include', 'saucedemo')
    cy.contains('Swag Labs').should('be.visible')
  })

  it('Verify valid login', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
  })

    it('Verify invalid login', () => {
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("invalid")
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="error"]').should('be.visible')
        .and ('contain', 'Epic sadface: Username and password do not match any user in this service')
    })    
})