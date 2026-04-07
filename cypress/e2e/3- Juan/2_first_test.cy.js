describe('Mon premier test Cypress', () => {
// describe est le nom de la suite de tests, c'est une description générale du groupe de tests que tu vas faire
  it('Visite un site web', () => {
    // it est le nom du test, c'est une description spécifique de ce que tu vas tester
    // il peut y avoir plusieurs it() dans un même describe(), chacun testant une fonctionnalité différente

    // cy.visit() est une commande de Cypress qui permet de visiter une URL
    // ici, on visite le site d'exemple de Cypress pour les tests
    cy.visit('https://example.cypress.io')
  })

})