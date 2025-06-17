/*fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),

})
  .then((response) => response.json())
  .then((json) => console.log(json));*/

// describe("Post Call", () => {
//   it("Post Call", () => {
//     cy.request({
//       method: "POST",
//       url: "https://jsonplaceholder.typicode.com/posts",
//       body: {
//         title: "foo",
//         body: "bar",
//         userId: 1,
//       },
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .its("status")
//       .should("eq", 201);
//   });
// });


describe("Post Call", () => {
  it("POST - Verify successful POST and with status code 200", () => {
    cy.api({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
      cy.log(JSON.stringify(response.body));
      cy.captureSnapshot('Successful POST Call');
    });
  });
});
