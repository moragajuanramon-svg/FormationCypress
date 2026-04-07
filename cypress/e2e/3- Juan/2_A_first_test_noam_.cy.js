describe('Test du site Noam', () => {

  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it('Visite le site et vérifie un élément', () => {
    cy.visit('https://www.noam-be.com/')
    cy.url().should('include', 'noam-be.com')
    cy.url().should('include', 'noam-be.com')
//    cy.contains('Contact').should('be.visible')
  })

})