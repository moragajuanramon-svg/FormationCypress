describe('Assertions test', () => {

  it('Vérifie un élément visible avec texte', () => {

    cy.visit('https://example.cypress.io')

    cy.contains('.home-list a', 'Querying')
      .should('be.visible')

  })

})