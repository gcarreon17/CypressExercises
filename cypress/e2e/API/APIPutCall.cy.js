/*fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));*/

// describe("Post Call", () => {
//   it("PUT Call", () => {
//     cy.request({
//       method: "PUT",
//       url: "https://jsonplaceholder.typicode.com/posts/1", // Fixed: Added URL
//       body: {
//         id: 1,
//         title: "foo",
//         body: "bar",
//         userId: 1,
//       }, // Removed JSON.stringify()
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .its("status")
//       .should("eq", 200);
//   });
// });


describe("Put Call", () => {
  it("PUT Call", () => {
    cy.api({
      method: "PUT",
      url: "https://jsonplaceholder.typicode.com/posts/1", 
      body: {
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
      }, 
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));
    });
    cy.captureSnapshot('Successful PUT Call');
  });
});