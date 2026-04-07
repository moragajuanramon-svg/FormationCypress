describe('Utilisation de find()', () => {

  it('Trouve un élément dans un autre', () => {

    // Visitar la página
    cy.visit('https://example.cypress.io')

    // Buscar la lista principal y luego el enlace "Querying"
    cy.get('.home-list')
      .find('a')
      .contains('Querying')
      .click()

    // Verificar la redirección
    cy.url().should('include', '/commands/querying')

  })

})