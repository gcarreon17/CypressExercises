///<reference types = "cypress"/>

import { automationExerciseTestData } from '../../support/utils/automationExerciseUtils'

describe("Remove Products", { testIsolation: false }, () => {

  let testData;

  before(() => {
    testData = automationExerciseTestData();
    cy.clearBefore()
    cy.visit("https://www.automationexercise.com/");
    cy.url().should("eq", "https://www.automationexercise.com/");
    cy.title().should("eq", "Automation Exercise");
    cy.captureSnapshot("Redirection to Automation Exercise");
  });

  it("Verify Product Listing", () => {
    cy.get(".features_items").should('be.visible')
    cy.get(".shop-menu > .nav > :nth-child(2) > a").click();
    cy.contains("Products").should('be.visible');
    cy.url().should("eq", "https://www.automationexercise.com/products");
    cy.get(".title")
      .should('be.visible')
      .invoke('text')
      .should("eq", "All Products");
    cy.captureSnapshot("Product Listing");
  });


  it("Verify product names and images", () => {
    cy.get('.features_items .product-image-wrapper').should('have.length', testData.productNames.length)
      .each(($wrapper, index) => {
        cy.wrap($wrapper)
          .find('.productinfo > p')
          .should('be.visible')
          .invoke('text')
          .should('eq', testData.productNames[index]);

        cy.wrap($wrapper)
          .find('.productinfo > img')
          .should('be.visible')
          .and(($img) => {
            const src = $img.attr('src');
            expect(src, `Image src should not be empty for product ${testData.productNames[index]}`).to.be.a('string').and.not.be.empty;
          });
      });
  });

  it('Verify adding to cart is successful', () => {
    cy.get('.features_items .product-image-wrapper')
      .should('have.length.greaterThan', 0)
      .then(($products) => {
        const randomIndex = Math.floor(Math.random() * $products.length);
        const $selected = $products[randomIndex];

        // Get the product name and store it
        const selectedName = Cypress.$($selected).find('.productinfo > p').text();
        Cypress.env('selectedProductName', selectedName);

        // Navigate to product detail page and add to cart
        cy.wrap($selected).within(() => {
          cy.get('a[href*="/product_details/"]').invoke('removeAttr', 'target').click();
        });
        cy.get('.product-information').should('be.visible');
        cy.contains('Add to cart').click();
        cy.captureSnapshot("Successful adding to cart");
        cy.get('.modal-content').should('be.visible');
        cy.get('.modal-title').should('be.visible').and('have.text', 'Added!');
        cy.get('.modal-body').should('contain.text', "Your product has been added to cart.");
        cy.contains('View Cart').should('be.visible').and('have.attr', 'href').and('include', 'view_cart');
        cy.get('#cartModal').should('be.visible').contains('Continue Shopping').click();
        cy.captureSnapshot("Successful Add to Cart");
      });
  });

  it("Verify successful removal of product", () => {
    cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').and('contain.text', "Cart").click();
    cy.get('.cart_quantity_delete > .fa').should('be.visible').click();
    cy.get('.text-center').should('be.visible').and('contain.text', "Cart is empty! Click here to buy products.");
    // cy.get('.text-center').should('be.visible').invoke('text').should('contain.text', "Cart is empty! Click here to buy products.")
  })
});