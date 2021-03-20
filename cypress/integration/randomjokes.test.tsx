/// <reference types="cypress" />


// http://localhost:3000/random-jokes/Any?
let queryParams = "blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single,twopart";

context('Actions', () => {

    beforeEach(() => {
      cy.visit(Cypress.env('baseUrl')+"/random-jokes/Any?"+queryParams);
    })


 describe("random jokes page test", ()=>
 {
  it('should display category, joketype, language and joke content',()=>{
    cy.get('.header-jokes').should('have.text','Joke');
    cy.get('[data-testid="go-back-to-home-page"]').click();
    cy.location('pathname').should('include', '/'); 
  })

  it("should go back to home page", ()=>{
    cy.get('[data-testid="go-back-to-home-page"]').click();
    cy.location('pathname').should('include', '/'); 
  });

  it("should go back to filter page",()=>{
    cy.get('[data-testid="go-back-to-filter-page"]').click();
    cy.location('pathname').should('include', '/'); 
  });  
  


 });




});