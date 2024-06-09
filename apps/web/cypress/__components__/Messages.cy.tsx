import Message from "@/components/messages";

describe("Messages", () => {
  const testMessage = (
    message: string,
    type: "success" | "error",
    bgColor: string
  ) => {
    cy.mountWithProvider(<Message message={message} type={type} />);
    cy.get('[data-cy="messages"]').should("be.visible");

    cy.get('[data-cy="messages"]')
      .children()
      .first()
      .should("have.css", "background-color", bgColor);

    cy.wait(5000);
    cy.get('[data-cy="messages"]').should("not.exist");
  };

  it("should display a successful message with 5s duration", () => {
    testMessage("you made it", "success", "rgb(204, 251, 241)");
  });

  it("should display an error message with 5s duration", () => {
    testMessage("I'm sorry", "error", "rgb(254, 226, 226)");
  });
});
