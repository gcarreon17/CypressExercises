///<reference types ="cypress"/>

describe("Cart", {testIsolation: false}, () => {
  it("Subscribe via Cart", () => {
    //Launch Website
    cy.visit("https://www.automationexercise.com");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Click Cart link
    cy.get(".shop-menu > .nav > :nth-child(3) > a").click();
    cy.url().should("eq", "https://www.automationexercise.com/view_cart");

    //Subscribe user
    cy.get("h2")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Subscription");

    cy.get("#susbscribe_email")
      .should("be.visible")
      .and("be.enabled")
      .should("have.attr", "placeholder", "Your email address")
      .type("user_subscribe@email.com");

    //Subscribe button
    cy.get("#subscribe").should("be.visible").and("be.enabled").click();
    cy.get(".alert-success.alert")
      .should("be.visible")
      .invoke("text")
      .should("eq", "You have been successfully subscribed!");

    cy.get(".searchform > p")
      .should("be.visible")
      .invoke("text")
      .should(
        "eq",
        "Get the most recent updates from our site and be updated your self..."
      );
  });
});
