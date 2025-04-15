describe("Post Call", () => {
  it("DELETE Call", () => {
    cy.request({
      method: "DELETE",
      url: "https://jsonplaceholder.typicode.com/posts/1",
    })
      .its("status")
      .should("eq", 200);
  });
});
