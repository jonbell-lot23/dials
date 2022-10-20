describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3001");
  });
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });
  it("passes", () => {
    cy.visit("http://localhost:8080");
  });
});
