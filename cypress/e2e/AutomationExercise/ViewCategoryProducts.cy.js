///<reference types = "cypress"/>

describe("View Category", () => {
  it("View Category", () => {
    //Launch website
    cy.visit("https://www.automationexercise.com/");
    cy.wait(5000);

    //Verify if Website URL is correct
    cy.url().should("eq", "https://www.automationexercise.com/");

    //Verify if Homepage is displayed
    cy.title().should("eq", "Automation Exercise");

    //Verify List of Products are visible
    cy.get("a[href='/products']").click();
    cy.contains("Products").should("be.visible");
    cy.url().should("eq", "https://www.automationexercise.com/products");

    //Category
    cy.get(".left-sidebar > :nth-child(1)")
      .should("be.visible")
      .invoke("text")
      .should("eq", "Category");
    //Women
    cy.get(":nth-child(1) > .panel-heading > .panel-title > a").should(
      "be.visible"
    );
    cy.get("#Women > .panel-body > ul > :nth-child(1) > a").should(
      "not.be.visible"
    );
    cy.get("#Women > .panel-body > ul > :nth-child(2) > a").should(
      "not.be.visible"
    );
    cy.get("#Women > .panel-body > ul > :nth-child(3) > a").should(
      "not.be.visible"
    );
    cy.get(":nth-child(1) > .panel-heading > .panel-title > a")
      .invoke("text")
      .then((text) => {
        const cleanedText = text.trim().replace(/\s+/g, " ");
        expect(cleanedText).to.eq("Women");
        cy.get(":nth-child(1) > .panel-heading > .panel-title > a").click();
        //Women-Dress
        cy.get("#Women > .panel-body > ul > :nth-child(1) > a")
          .should("be.visible")
          .invoke("text")
          .then((text) => {
            const cleanedText = text.trim().replace(/\s+/g, " ");
            expect(cleanedText).to.eq("Dress");
            //Women-Tops
            cy.get("#Women > .panel-body > ul > :nth-child(2) > a")
              .should("be.visible")
              .invoke("text")
              .then((text) => {
                const cleanedText = text.trim().replace(/\s+/g, " ");
                expect(cleanedText).to.eq("Tops");
                //Women-Saree
                cy.get("#Women > .panel-body > ul > :nth-child(3) > a")
                  .should("be.visible")
                  .invoke("text")
                  .then((text) => {
                    const cleanedText = text.trim().replace(/\s+/g, " ");
                    expect(cleanedText).to.eq("Saree");

                    //Men
                    cy.get(
                      ":nth-child(2) > .panel-heading > .panel-title > a"
                    ).should("be.visible");
                    cy.get("#Men > .panel-body > ul > :nth-child(1)").should(
                      "not.be.visible"
                    );
                    cy.get("#Men > .panel-body > ul > :nth-child(2)").should(
                      "not.be.visible"
                    );
                    cy.get(":nth-child(2) > .panel-heading > .panel-title > a")
                      .invoke("text")
                      .then((text) => {
                        const cleanedText = text.trim().replace(/\s+/g, " ");
                        expect(cleanedText).to.eq("Men");
                        cy.get(
                          ":nth-child(2) > .panel-heading > .panel-title > a"
                        ).click();
                        //Men-TShirt
                        cy.get("#Men > .panel-body > ul > :nth-child(1)")
                          .should("be.visible")
                          .invoke("text")
                          .then((text) => {
                            const cleanedText = text
                              .trim()
                              .replace(/\s+/g, " ");
                            expect(cleanedText).to.eq("Tshirts");

                            //Men-Jeans
                            cy.get("#Men > .panel-body > ul > :nth-child(2)")
                              .should("be.visible")
                              .invoke("text")
                              .then((text) => {
                                const cleanedText = text
                                  .trim()
                                  .replace(/\s+/g, " ");
                                expect(cleanedText).to.eq("Jeans");

                                //Kids
                                cy.get(
                                  ":nth-child(3) > .panel-heading > .panel-title > a"
                                ).should("be.visible");
                                cy.get(
                                  "#Kids > .panel-body > ul > :nth-child(1) > a"
                                ).should("not.be.visible");
                                cy.get(
                                  "#Kids > .panel-body > ul > :nth-child(2) > a"
                                ).should("not.be.visible");
                                cy.get(
                                  ":nth-child(3) > .panel-heading > .panel-title > a"
                                )
                                  .invoke("text")
                                  .then((text) => {
                                    const cleanedText = text
                                      .trim()
                                      .replace(/\s+/g, " ");
                                    expect(cleanedText).to.eq("Kids");
                                    cy.get(
                                      ":nth-child(3) > .panel-heading > .panel-title > a"
                                    ).click();

                                    //Kids-Dress
                                    cy.get(
                                      "#Kids > .panel-body > ul > :nth-child(1)"
                                    )
                                      .should("be.visible")
                                      .invoke("text")
                                      .then((text) => {
                                        const cleanedText = text
                                          .trim()
                                          .replace(/\s+/g, " ");
                                        expect(cleanedText).to.eq("Dress");

                                        //Kids-Tops & Shirts
                                        cy.get(
                                          "#Kids > .panel-body > ul > :nth-child(2) > a"
                                        )
                                          .should("be.visible")
                                          .invoke("text")
                                          .then((text) => {
                                            const cleanedText = text
                                              .trim()
                                              .replace(/\s+/g, " ");
                                            expect(cleanedText).to.eq(
                                              "Tops & Shirts"
                                            );

                                            //Navigate thru Kids-Dress
                                            cy.get(
                                              "#Kids > .panel-body > ul > :nth-child(1) > a"
                                            ).click();
                                            cy.url().should(
                                              "eq",
                                              "https://www.automationexercise.com/category_products/4"
                                            );
                                            cy.get(".title")
                                              .should("be.visible")
                                              .invoke("text")
                                              .should(
                                                "eq",
                                                "Kids - Dress Products"
                                              );

                                            cy.get(
                                              ":nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p"
                                            )
                                              .should("be.visible")
                                              .invoke("text")
                                              .then((text) => {
                                                const cleanedText = text
                                                  .trim()
                                                  .replace(/\s+/g, " ");
                                                expect(cleanedText).to.eq(
                                                  "Sleeves Top and Short - Blue & Pink"
                                                );
                                                cy.get(".features_items")
                                                  .should("be.visible")
                                                  .find("img  ")
                                                  .should("have.length", 6);

                                                //Click other category like Men
                                                cy.get(
                                                  ":nth-child(2) > .panel-heading > .panel-title > a > .badge > .fa"
                                                ).click();
                                                cy.get(
                                                  "#Men > .panel-body > ul > :nth-child(1) > a"
                                                ).click();
                                                cy.get(".title")
                                                  .should("be.visible")
                                                  .invoke("text")
                                                  .should(
                                                    "eq",
                                                    "Men - Tshirts Products"
                                                  );
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
      });
  });
});
