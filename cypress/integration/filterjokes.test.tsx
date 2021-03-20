/// <reference types="cypress" />



context('Actions', () => {
    beforeEach(() => {
      cy.visit(Cypress.env('baseUrl')+"/filter-jokes");
    })


 describe("filter jokes page test", ()=>
 {
  it('should validate form first',()=>{
    cy.get('[data-testid="custom-button-submit"]').click();
    cy.get('.swal-modal').should('have.attr', 'aria-modal', 'true');
  })

  it("should fill form and submit",()=>{
      cy.get('[data-testid="select-data-test-id"]').click();
      cy.get('.MuiListItem-gutters').should($a => {
         $a.map((i, el) => {
           if(el.getAttribute('data-value')=='en')
           {
               el.click();
           }
        })  
     });

     cy.get('[data-testid="filter-types-checkbox"]').click({multiple:true});
     cy.get('[data-testid="filter-flags-checkbox"]').click({multiple:true});
     cy.get('[data-testid="custom-button-submit"]').click();  
     cy.location('pathname').should('include', 'random-jokes'); 

  })

 });




});