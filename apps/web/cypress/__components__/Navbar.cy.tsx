import NavBar from "@/components/NavBar";

describe("Navbar", () => {
  it("should display correctly", () => {
    cy.mount(<NavBar />);
    cy.get("nav")
      .should("be.visible")
      .find("a")
      .should("exist")
      .should("have.attr", "target", "_blank")
      .and("have.attr", "href")
      .should("not.be.empty")
      .and("include", "https://cynomi.com");

    cy.get("nav")
      .should("exist")
      .find("img")
      .should("have.attr", "alt", "Cynomi logo")
      .and("have.attr", "src", "/icons/icon.png")
      .should("have.attr", "src")
      .and("not.be.empty");
  });
});
