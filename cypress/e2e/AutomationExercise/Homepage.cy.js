///<reference types="cypress" />

describe("Homepage", () => {
  it("Verify Homepage UI is correct", () => {
    //Launch website
    cy.visit("https://www.automationexercise.com/");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Verify menus are displayed
    cy.get(".shop-menu > .nav > :nth-child(2) > a").should("be.visible");
    cy.get(".shop-menu > .nav > :nth-child(3) > a").should("be.visible");
    cy.get(".shop-menu > .nav > :nth-child(4) > a").should("be.visible");
    cy.get(".shop-menu > .nav > :nth-child(5) > a").should("be.visible");
    cy.get(".shop-menu > .nav > :nth-child(6) > a").should("be.visible");
    cy.get(".shop-menu > .nav > :nth-child(7) > a").should("be.visible");
    cy.get(".shop-menu > .nav > :nth-child(8) > a").should("be.visible");

    cy.get(".left-sidebar").should("be.visible");

    //Verify carousel is displayed
    cy.get("#slider-carousel > .carousel-inner").should("be.visible");

    //Verify left arrow button is displayed
    cy.get("#slider-carousel > .left > .fa").should("be.visible");

    //Verify left arrow button is clickable
    cy.get("#slider-carousel > .left > .fa").click();

    //Verify right arrow button is displayed
    cy.get("#slider-carousel > .right > .fa").should("be.visible");

    //Verify right arrow button is clickable
    cy.get("#slider-carousel > .right > .fa").click();

    //Verify slider dots are displayed
    cy.get(".carousel-indicators").should("be.visible");

    //Verify Subscribe user
    cy.get(".single-widget > h2")
      .should("be.visible")
      .invoke("text")
      .and("eq", "Subscription");

    cy.get("#susbscribe_email")
      .should("be.visible")
      .and("be.enabled")
      .should("have.attr", "placeholder", "Your email address")
      .type("user_subscribe@email.com");

    //subscribe button
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
