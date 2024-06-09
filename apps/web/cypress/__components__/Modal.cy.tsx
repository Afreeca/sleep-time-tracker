import Modal from "../../src/components/modal/Modal";

describe("Modal", () => {
  beforeEach(() => {
    const onCloseSpy = cy.spy().as("onClose");
    cy.mount(
      <Modal
        isOpen={true}
        onClose={onCloseSpy}
        closeX={true}
        primaryButtonText={"Yes"}
        secondaryButtonText={"No"}
      >
        <div>
          <h1 className="text-black">content</h1>
        </div>
      </Modal>
    );
  });
  it("should display the buttons and children", () => {
    cy.get("h1").should("have.text", "content");
    cy.get("button").should("have.length", 3);
  });

  it("should close trigger the close modal", () => {
    cy.contains("button", "×").should("be.visible").click();
    cy.get("@onClose").should("have.been.calledOnce");
  });

  it("should not display close button", () => {
    cy.mount(
      <Modal
        isOpen={true}
        onClose={cy.stub()}
        closeX={false}
        primaryButtonText={"Yes"}
        secondaryButtonText={"No"}
      >
        <div>
          <h1 className="text-black">content</h1>
        </div>
      </Modal>
    );
    cy.get("h1").should("have.text", "content");
    cy.debug();
    cy.get("button").should("have.length", 2);
  });
});
