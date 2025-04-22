describe("Product List", () => {
  it("Get Product List", () => {
    cy.request("GET", "https://automationexercise.com/api/productsList")
      .its("status")
      .should("eq", 200);
  });

  it("Get Brands List", () => {
    cy.request("GET", "https://automationexercise.com/api/brandsList")
      .its("status")
      .should("eq", 200);
  });
});