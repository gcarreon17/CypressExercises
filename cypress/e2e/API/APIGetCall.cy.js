// describe("Product List", () => {
//   it("Get Product List", () => {
//     cy.request("GET", "https://automationexercise.com/api/productsList")
//       .its("status")
//       .should("eq", 200);
//   });

//   it("Get Brands List", () => {
//     cy.request("GET", "https://automationexercise.com/api/brandsList")
//       .its("status")
//       .should("eq", 200);
//   });
// });


describe("Products and Brands List", () => {
  it("Get Product List", () => {
    cy.api({
      method: "GET",
      url: "https://automationexercise.com/api/productsList",
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
    cy.captureSnapshot('Successful GET Product List');
  });


  it("Get Brands List", () => {
    cy.api({
      method: "GET",
      url: "https://automationexercise.com/api/brandsList",
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
     cy.captureSnapshot('Successful GET Brands List');
  });
});