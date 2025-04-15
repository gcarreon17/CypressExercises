///<reference types = "cypress"/>

describe("Remove Products", () => {
  it("Remove Products", () => {
    // Launch Website
    cy.visit("https://www.automationexercise.com");

    // Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    // Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Verify List of Products are visible
    cy.get(".shop-menu > .nav > :nth-child(2) > a").click();
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.automationexercise.com/products");
    cy.get(".title")
      .should("be.visible")
      .invoke("text")
      .should("eq", "All Products");

    // View Item 1
    cy.get(
      ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p"
    )
      .should("be.visible")
      .invoke("text")
      .should("eq", "Blue Top");

    cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
    cy.url().should(
      "eq",
      "https://www.automationexercise.com/product_details/1"
    );
    cy.get(".product-information > h2")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Blue Top");

    let cart_qty = 4;
    cy.get("label")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Quantity:");
    cy.get("#quantity")
      .should("be.visible")
      .and("be.enabled")
      .clear()
      .type(cart_qty)
      .should("have.value", cart_qty);

    cy.get(":nth-child(5) > .btn").should("be.visible").click();

    //Item added to Cart
    cy.get(".modal-title")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Added!");
    cy.get(".modal-body > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Your product has been added to cart.");
    cy.get(".modal-footer > .btn")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Continue Shopping");
    cy.contains("View Cart")
      .should("be.visible")
      .invoke("text")
      .should("eq", "View Cart");

    //View Cart
    cy.contains("View Cart").click();
    cy.get("h4 > a")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Blue Top");

    //Verify qty displayed is the same as input
    cy.get(".disabled")
      .should("be.visible")
      .invoke("text")
      .should("eq", cart_qty.toString());

    //Click 'x' to remove item
    cy.get(".cart_quantity_delete > .fa").should("be.visible").click();

    //Verify cart is empty
    cy.get("#empty_cart")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const cleanedText = text.trim().replace(/\s+/g, " ");
        expect(cleanedText).to.eq("Cart is empty! Click here to buy products.");
      });
  });
});
