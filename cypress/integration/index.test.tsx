/// <reference types="cypress" />



context('Actions', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('baseUrl'));
    })


 describe("index page activity", ()=>
 {
    it('should find welcome message', ()=>{
       cy.get('[data-testid="custom-header-elem"]').should('have.text',
       'Welcome to Jokes App Click the button Below to Continue');
    })

    it('should have have button',()=>{
      cy.get('button').should('have.text','Continue');
    });

    it('should navigate to the filter-jokes form page', ()=>{
       cy.get('button').click();
       cy.location('pathname').should('include', 'filter-jokes');
       cy.get('[data-testid="custom-header-elem"]').should('have.text',
       'Filter Jokes');
    
    });

 });


});