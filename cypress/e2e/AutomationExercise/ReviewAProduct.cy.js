///<reference types = "cypress"/>

describe("Review a Product", () => {
  it("Verify Review a Product", () => {
    cy.visit("https://www.automationexercise.com");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Verify List of Products are visible
    cy.get(".shop-menu > .nav > :nth-child(2) > a").click();
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.automationexercise.com/products");
    cy.get(".title")
      .should("be.visible")
      .invoke("text")
      .should("eq", "All Products");

    cy.get(
      ":nth-child(3) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();

    //Verify review product section
    cy.get(".active > a")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Write Your Review");
    cy.get("#name")
      .should("be.visible")
      .and("exist")
      .and("be.enabled")
      .and("have.value", "")
      .and("have.attr", "placeholder", "Your Name")
      .type("Test");

    cy.get("#email")
      .should("be.visible")
      .and("exist")
      .and("be.enabled")
      .and("have.value", "")
      .and("have.attr", "placeholder", "Email Address")
      .type("test@test.com");

    cy.get("#review")
      .should("be.visible")
      .and("exist")
      .and("be.enabled")
      .and("have.value", "")
      .and("have.attr", "placeholder", "Add Review Here!")
      .type("testing");

    cy.get("#button-review").should("be.visible").and("be.enabled").click();

   cy.get('span').invoke('text').should('include', 'Thank you for your review.');

  });
});
