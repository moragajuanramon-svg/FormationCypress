

// describe() sert à regrouper plusieurs tests liés entre eux
// C’est comme un titre ou une catégorie de tests
describe('Interaction avec cy.get()', () => {

  // it() définit un test individuel
  // On décrit ici ce que le test est censé faire
  it('Clique sur un lien et vérifie la redirection', () => {

    // cy.visit() permet d’ouvrir une page web dans le navigateur contrôlé par Cypress
    // C’est l’équivalent d’ouvrir un navigateur et de taper une URL
    cy.visit('https://example.cypress.io')



    // cy.get('.home-list a')
    // Recherche tous les éléments <a> (liens) qui se trouvent
    // à l’intérieur d’un élément ayant la classe "home-list"
    // On limite ainsi la recherche à une zone précise de la page
    cy.get('.home-list a')

      // .contains('Querying')
      // Filtre les éléments trouvés pour ne garder que celui
      // qui contient le texte "Querying"
      // Cela permet de sélectionner le bon lien parmi plusieurs
      .contains('Querying')

      // .click()
      // Simule un clic utilisateur sur le lien sélectionné
      // Cela doit déclencher une navigation vers une autre page
      .click()



    // cy.url()
    // Permet de récupérer l’URL actuelle du navigateur
    cy.url()

      // .should('include', '/commands/querying')
      // Assertion : vérifie que l’URL contient la chaîne indiquée
      // Cela confirme que la redirection s’est bien effectuée
      // et que l’on est sur la bonne page
      .should('include', '/commands/querying')

  })

})