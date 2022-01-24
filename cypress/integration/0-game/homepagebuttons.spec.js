const one = 1
const two = 2

describe("Homepage Buttons Display and can be clicked to navigate to Victory and Death pages", () => {
    //line 1 should probably say 'homePage', and NavBar should maybe have another file. 
    //Also, what is 'correct'...?
    beforeEach(() => {
      cy.visit("/");
    });
    it("displays 2 buttons", () => {
      cy.get("[data-testid=buttonComponent]")
      .find("button")
      .should("have.length", 2); 
    });

    it("button 1 redirects to Victory Page", () => {
        cy.get("[data-testid=bottle1Button]")
        .click()
        cy.url()
        .should("include", "/result"); 
      });
      it("button 2 redirects to Death", () => {
        cy.get("[data-testid=bottle2Button]")
        .click()
        cy.url()
        .should("include", "/result"); 
      });})