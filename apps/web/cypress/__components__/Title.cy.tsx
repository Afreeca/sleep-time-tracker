import Title from "../../src/components/Title";

describe("Title", () => {
  it("should display title text", () => {
    cy.mount(<Title text="Nice title" />);
    cy.get("h1").should("have.text", "Nice title");
  });
});
