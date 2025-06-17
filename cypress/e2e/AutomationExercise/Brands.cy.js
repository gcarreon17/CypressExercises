///<reference types = "cypress"/>

describe("Brands", {testIsolation: false}, () => {
  it("Verify Brands", () => {
    cy.visit("https://www.automationexercise.com");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Verify List of Products are visible
    cy.get("a[href='/products']").click();
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.automationexercise.com/products");
    cy.get(".title")
      .should("be.visible")
      .invoke("text")
      .should("eq", "All Products");

    //Verify Brands
    cy.get(".brands_products > h2")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Brands");
    cy.get(".brands_products").should("be.visible");
    cy.get(".brands-name > .nav > :nth-child(1) > a")
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        const cleanedText = text.trim().replace(/\s+/g, " ");
        expect(cleanedText).to.eq("(6)Polo");

        cy.get(".brands-name > .nav > :nth-child(2) > a")
          .should("be.visible")
          .invoke("text")
          .then((text) => {
            const cleanedText = text.trim().replace(/\s+/g, " ");
            expect(cleanedText).to.eq("(5)H&M");

            cy.get(".brands-name > .nav > :nth-child(3) > a")
              .should("be.visible")
              .invoke("text")
              .then((text) => {
                const cleanedText = text.trim().replace(/\s+/g, " ");
                expect(cleanedText).to.eq("(5)Madame");
                cy.get(".brands-name > .nav > :nth-child(4) > a")
                  .should("be.visible")
                  .invoke("text")
                  .then((text) => {
                    const cleanedText = text.trim().replace(/\s+/g, " ");
                    expect(cleanedText).to.eq("(3)Mast & Harbour");
                    cy.get(".brands-name > .nav > :nth-child(5) > a")
                      .should("be.visible")
                      .invoke("text")
                      .then((text) => {
                        const cleanedText = text.trim().replace(/\s+/g, " ");
                        expect(cleanedText).to.eq("(4)Babyhug");
                        cy.get(".brands-name > .nav > :nth-child(6) > a")
                          .should("be.visible")
                          .invoke("text")
                          .then((text) => {
                            const cleanedText = text
                              .trim()
                              .replace(/\s+/g, " ");
                            expect(cleanedText).to.eq("(3)Allen Solly Junior");
                            cy.get(".brands-name > .nav > :nth-child(7) > a")
                              .should("be.visible")
                              .invoke("text")
                              .then((text) => {
                                const cleanedText = text
                                  .trim()
                                  .replace(/\s+/g, " ");
                                expect(cleanedText).to.eq("(3)Kookie Kids");
                                cy.get(
                                  ".brands-name > .nav > :nth-child(8) > a"
                                )
                                  .should("be.visible")
                                  .invoke("text")
                                  .then((text) => {
                                    const cleanedText = text
                                      .trim()
                                      .replace(/\s+/g, " ");
                                    expect(cleanedText).to.eq("(5)Biba");

                                    //Verify 1 brand is selected
                                    cy.get(
                                      ".brands-name > .nav > :nth-child(6) > a"
                                    ).click();
                                    cy.url().should(
                                      "eq",
                                      "https://www.automationexercise.com/brand_products/Allen%20Solly%20Junior"
                                    );
                                    cy.get(".title")
                                      .should("be.visible")
                                      .invoke("text")
                                      .should(
                                        "eq",
                                        "Brand - Allen Solly Junior Products"
                                      );

                                    //Click again another menu
                                    cy.get(
                                      ".brands-name > .nav > :nth-child(5) > a"
                                    ).click();
                                    cy.url().should(
                                      "eq",
                                      "https://www.automationexercise.com/brand_products/Babyhug"
                                    );
                                    cy.get(".title")
                                      .should("be.visible")
                                      .invoke("text")
                                      .should("eq", "Brand - Babyhug Products");
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  });
});
