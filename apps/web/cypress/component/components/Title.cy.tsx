import Title from "../../../src/components/Title";

describe("<Title />", () => {
  it("renders", () => {
    cy.mount(<Title text="Nice title" />);
  });
});
