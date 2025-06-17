// describe("Post Call", () => {
//   it("DELETE - Verify successful DELETE and with status code 200", () => {
//     cy.api({
//       method: "DELETE",
//       url: "https://jsonplaceholder.typicode.com/posts/1",
//     })
//       .its("status")
//       .should("eq", 200);
//   });
// });


describe("Delete Call", () => {
  it("DELETE - Verify successful DELETE and with status code 200", () => {
    cy.api({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
    cy.captureSnapshot('Successful DELETE Call');
  });
});