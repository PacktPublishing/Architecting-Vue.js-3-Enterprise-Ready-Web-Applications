/* eslint-disable no-undef */

const afterLoginFunction = () => {
  cy.visit(`${Cypress.env("baseUrl")}/login`);
};

describe("Login tests", () => {
  beforeEach(() => {
    afterLoginFunction();
    cy.wait(5000);
  });

  it("Should show an success message if the email address and password is valid", () => {
    cy.get("#passwordField").type(`${Cypress.env("password")}`);
    cy.get("#emailField").type(`${Cypress.env("email")}`);

    cy.get("#loginForm").then(() => {
      cy.get("#submitButton").click();
      cy.wait(1000);
      cy.get("#loggedIn").should("be.visible");
    });
  });

  it("Should show an error message if the email address and password is not valid", () => {
    cy.get("#emailField").type("test@test.com");
    cy.get("#passwordField").type("test");

    cy.get("#loginForm").then(() => {
      cy.get("#submitButton").click();
      cy.wait(1000);
      cy.get("#failed").should("be.visible");
    });
  });
});
