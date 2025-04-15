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

describe("Post Call", () => {
  it("Post Call", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .its("status")
      .should("eq", 201);
  });
});
