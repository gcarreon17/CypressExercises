describe('E-Commerce Test Flow/Workflow', {testIsolation: false}, () => {
  before(() => {
      cy.clearAllLocalStorage()
      cy.launchWebsite()
      cy.authLogin()
  })


    //Products Screen
    it('Verify Products Screen', () => {
    cy.url().should('include', '/inventory.html')
    cy.title().should('eq', 'Swag Labs')
    cy.get('.app_logo').should('be.visible')
    cy.get('.title').should('contain', 'Products')
    

    //Backpack
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible')
    cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Backpack')
    cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
      .should('be.visible')
      .and('contain', '$29.99')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should('be.visible')
      .and('be.enabled')
      .invoke('text')
      .should('eq', 'Add to cart')
        

    //Bike Light
    cy.get('[data-test="inventory-item-sauce-labs-bike-light-img"]').should('be.visible')
    cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light')
    cy.get(':nth-child(2) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
      .should('be.visible')
      .and('contain', '$9.99')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
      .should('be.visible')
      .and('be.enabled')
      .invoke('text')
      .should('eq', 'Add to cart')
  

    //tshirt
    cy.get('[data-test="inventory-item-sauce-labs-bolt-t-shirt-img"]').should('be.visible')
    cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bolt T-Shirt')
    cy.get(':nth-child(3) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
      .should('be.visible')
      .and('contain', '$15.99')
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
      .should('be.visible')
      .and('be.enabled')
      .invoke('text')
      .should('eq', 'Add to cart')

    //jacket
    cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should('be.visible')
    cy.get(':nth-child(4) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Fleece Jacket')
    cy.get(':nth-child(4) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
      .should('be.visible')
      .and('contain', '$49.99')
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
      .should('be.visible')
      .and('be.enabled')
      .invoke('text')
      .should('eq', 'Add to cart')

    //red shirt
    cy.get('[data-test="inventory-item-test.allthethings()-t-shirt-(red)-img"]').should('be.visible')
    cy.get(':nth-child(6) > [data-test="inventory-item-description"]').should('contain', 'Test.allTheThings() T-Shirt (Red)')
    cy.get(':nth-child(6) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
      .should('be.visible')
      .and('contain', '$15.99')
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
      .should('be.visible')
      .and('be.enabled')
      .invoke('text')
      .should('eq', 'Add to cart')

    //onesie
    cy.get('[data-test="inventory-item-sauce-labs-onesie-img"]').should('be.visible')
    cy.get(':nth-child(5) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Onesie')
    cy.get(':nth-child(5) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
      .should('be.visible')
      .and('contain', '$7.99')
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
      .should('be.visible')
      .and('be.enabled')
      .invoke('text')
      .should('eq', 'Add to cart')
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]')
      .should('be.visible')
      .and('be.enabled')
    //.invoke('text')
    //.then((itemAdded) => {
    // cy.log(`Item Added: ${itemAdded}`)
    //expect(itemAdded.trim()).to.equal('Add to cart')
    // if (itemAdded.trim() === 'Add to cart') {
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.takeScreenshot('Redirected to Products Screen')
})

    
    //Verify Add to Cart
    it('Verify Add to Cart', () => {
    cy.url().should('include', '/inventory.html')
    cy.title().should('eq', 'Swag Labs')
    cy.get('.app_logo').should('be.visible')
    cy.get('.title').should('contain', 'Products')
    cy.get('[data-test="shopping-cart-link"]').should('be.visible')
    cy.get('.shopping_cart_badge').should('exist').and('contain', '1')
    cy.takeScreenshot('Successful Add to Cart')
  })

    //Verify Cart Screen
    it('Verify Cart Screen', () => {
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart.html')
    cy.title().should('eq', 'Swag Labs')
    cy.get('.app_logo').should('be.visible')
    cy.get('[data-test="title"]').should('contain', 'Your Cart')
    cy.get('[data-test="cart-quantity-label"]').should('be.visible').invoke('text').should('contain', 'QTY')
    cy.get('[data-test="cart-desc-label"]').should('be.visible').invoke('text').should('contain', 'Description')
    cy.get('[data-test="item-quantity"]').should('be.visible').invoke('text').should('contain', '1')
    cy.get('[data-test="inventory-item-name"]').should('be.visible').invoke('text').should('contain', 'Sauce Labs Onesie')
    //cy.get('[data-test="inventory-item-desc"]').should
    cy.get('[data-test="inventory-item-price"]').should('be.visible').invoke('text').should('contain', '$7.99')
    cy.get('[data-test="continue-shopping"]').should('be.visible').and('be.enabled')
    cy.get('[data-test="checkout"]').should('be.visible').and('be.enabled')
    cy.takeScreenshot('Cart Screen')
    })

    //Verify Checkout
    it('Verify Checkout', () => {
    cy.get('[data-test="checkout"]').click()
    cy.title().should('eq', 'Swag Labs')
    cy.get('.app_logo').should('be.visible')
    cy.url().should('include', '/checkout-step-one.html')
    cy.get('[data-test="title"]').should('contain', 'Checkout: Your Information')
    cy.get('[data-test="firstName"]').type('Gert')
    cy.get('[data-test="lastName"]').type('Carreon')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').should('be.visible').and('be.enabled').click()
    cy.takeScreenshot('Checkout Form Filled')
  })
    
    //Verify Checkout Overview
    it('Verify Checkout Overview Screen', () => {
    cy.url().should('include', '/checkout-step-two.html')
    cy.title().should('eq', 'Swag Labs')
    cy.get('.app_logo').should('be.visible')
    cy.get('[data-test="finish"]').should('be.visible').and('be.enabled').click()
    cy.url().should('include', '/checkout-complete.html') 
    cy.takeScreenshot('Checkout Overview')
})

    //Verify Order Confirmation
    it('Verify Order Confirmation Screen', () => {
    cy.url().should('include', '/checkout-complete.html')
    cy.title().should('eq', 'Swag Labs')  
    cy.get('.app_logo').should('be.visible')
    cy.get('[data-test="complete-header"]').should('be.visible').and('contain', 'Thank you for your order!')
    cy.get('[data-test="complete-text"]').should('be.visible')
      .and('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')  
    cy.takeScreenshot('Order Confirmation')
})

    //Verify Back to Home
    it('Verify Back to Homepage', () => {
    cy.get('[data-test="back-to-products"]').should('be.visible').and('be.enabled').click()
    cy.url().should('include', '/inventory.html')
    })
  })