describe('Test Kitchen Sink', () => {

  it('Verifica el título de la página', () => {

    // Visitar el sitio
    cy.visit('https://example.cypress.io')

    // Verificar que el título contiene "Kitchen Sink"
    cy.title().should('include', 'Kitchen Sink')
    // equal es una assertion que verifica que el título sea exactamente "Kitchen Sink123"
    // include sería otra assertion que verifica que el título contenga "Kitchen Sink" sin importar lo que haya antes o después

  })

})