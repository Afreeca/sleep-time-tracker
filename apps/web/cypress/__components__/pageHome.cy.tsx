import Home from "../../src/app/page";

describe("<Home />", () => {
  it("renders", () => {
    cy.mountWithProvider(<Home />);
  });
});
